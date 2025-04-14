import React from 'react';

import { makeStyles } from '@mui/styles';
import { useCtfCarouselVideoComponentQuery } from './__generated/ctf-carousel-video-component.generated';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  carouselContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  video: {
    width: '100%',
    height: 'auto',
  },
}));

interface CtfCarouselVideoComponentProps {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfCarouselVideoComponent = ({
  id,
  locale,
  preview,
}: CtfCarouselVideoComponentProps) => {
  const classes = useStyles();
  const { data, isLoading } = useCtfCarouselVideoComponentQuery({
    id,
    locale,
    preview,
  });

  if (isLoading || !data?.carouselVideoComponent?.videosCollection?.items) {
    return <div>Loading...</div>;
  }

  const videos = data.carouselVideoComponent.videosCollection.items;

  return (
    <div className={classes.root}>
      <div className={classes.innerContainer}>
        <div className={classes.carouselContainer}>
          {videos.map((video, index) => (
            <video
              key={index}
              src={video?.url || ''}
              className={classes.video}
              controls
              autoPlay
              loop
              muted
            />
          ))}
        </div>
      </div>
    </div>
  );
};

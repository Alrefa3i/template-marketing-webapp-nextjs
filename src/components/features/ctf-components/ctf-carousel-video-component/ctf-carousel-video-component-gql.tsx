import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfCarouselVideoComponentQuery } from './__generated/ctf-carousel-video-component.generated';
import { CtfCarouselVideoComponent } from './ctf-carousel-video-component';

interface CtfCarouselVideoComponentGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfCarouselVideoComponentGql = ({
  id,
  locale,
  preview,
}: CtfCarouselVideoComponentGqlPropsInterface) => {
  const { data, isLoading } = useCtfCarouselVideoComponentQuery({
    id,
    locale,
    preview,
  });

  const carouselVideoComponent = useContentfulLiveUpdates(data?.carouselVideoComponent);

  if (isLoading || !carouselVideoComponent) {
    return null;
  }

  return (
    <CtfCarouselVideoComponent
      {...carouselVideoComponent}
      id={id}
      locale={locale}
      preview={preview}
    />
  );
};

import * as Types from '../../../../../lib/__generated/graphql.types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type CtfCarouselVideoComponentQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfCarouselVideoComponentQuery = { __typename?: 'Query', carouselVideoComponent?: { __typename?: 'CarouselVideoComponent', sys: { __typename?: 'Sys', id: string }, videosCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null } | null> } | null } | null };


export const CtfCarouselVideoComponentDocument = `
    query CtfCarouselVideoComponent($id: String!, $locale: String, $preview: Boolean) {
  carouselVideoComponent(id: $id, locale: $locale, preview: $preview) {
    sys {
      id
    }
    videosCollection {
      items {
        url
        title
        description
      }
    }
  }
}
    `;
export const useCtfCarouselVideoComponentQuery = <
      TData = CtfCarouselVideoComponentQuery,
      TError = unknown
    >(
      variables: CtfCarouselVideoComponentQueryVariables,
      options?: UseQueryOptions<CtfCarouselVideoComponentQuery, TError, TData>
    ) =>
    useQuery<CtfCarouselVideoComponentQuery, TError, TData>(
      ['CtfCarouselVideoComponent', variables],
      customFetcher<CtfCarouselVideoComponentQuery, CtfCarouselVideoComponentQueryVariables>(CtfCarouselVideoComponentDocument, variables),
      options
    );

useCtfCarouselVideoComponentQuery.getKey = (variables: CtfCarouselVideoComponentQueryVariables) => ['CtfCarouselVideoComponent', variables];
;

useCtfCarouselVideoComponentQuery.fetcher = (variables: CtfCarouselVideoComponentQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfCarouselVideoComponentQuery, CtfCarouselVideoComponentQueryVariables>(CtfCarouselVideoComponentDocument, variables, options);
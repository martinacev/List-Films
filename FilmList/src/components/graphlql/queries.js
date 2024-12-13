import { gql } from "@apollo/client";

export const GET_FILMS = gql`
  query GetFilms($after: String) {
    allFilms(first: 5, after: $after) {
      films {
        id
        title
        episodeID
        director
        releaseDate
        producers
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { GET_FILMS } from "../graphlql/queries";
import { format } from "date-fns";
import classes from "./FilmList.module.css";

function FilmList() {
  const { data, loading, error, fetchMore } = useQuery(GET_FILMS);
  const [hasMore, setHasMore] = useState(true);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const loadMore = () => {
    if (data.allFilms.pageInfo.hasNextPage) {
      fetchMore({
        variables: { after: data.allFilms.pageInfo.endCursor },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            allFilms: {
              ...fetchMoreResult.allFilms,
              films: [...prev.allFilms.films, ...fetchMoreResult.allFilms.films],
            },
          };
        },
      });
    } else {
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={data.allFilms.films.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<p>Loading more...</p>}
    >
      <div className={classes.FilmList}>
        {data.allFilms.films.map((film) => (
          <div key={film.id} className={classes.card}>
            <h2>{film.title}</h2>
            <p className={classes.title}>
              <strong>Episode:</strong> {film.episodeID}
            </p>
            <p className={classes.title}>
              <strong>Director:</strong> {film.director}
            </p>
            <p className={classes.title}>
              <strong>Release Date:</strong>{" "}
              {format(new Date(film.releaseDate), "MMMM dd, yyyy")}
            </p>
            <p className={classes.title}>
              <strong>Producers:</strong> {film.producers.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default FilmList;

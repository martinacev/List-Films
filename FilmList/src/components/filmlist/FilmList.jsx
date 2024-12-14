import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_FILMS } from "../graphlql/queries";
import { format } from "date-fns";
import classes from "./FilmList.module.css";

function FilmList({ language }) {
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

  const translate = (key) => {
    const translations = {
      en: {
        episode: "Episode",
        director: "Director",
        releaseDate: "Release Date",
        producers: "Producers",
      },
      de: {
        episode: "Episode",
        director: "Regisseur",
        releaseDate: "Veröffentlichungsdatum",
        producers: "Produzenten",
      },
    };
    return translations[language][key];
  };

  return (
    <div
      dataLength={data.allFilms.films.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<p>Loading more...</p>}
    >
      <div className={classes.FilmList}>
        {data.allFilms.films.map((film, index) => (
          <div
            key={film.id}
            className={classes.card}
            style={{ "--animation-delay": `${index * 0.2}s` }} 
          >
            <h2>{film.title}</h2>
            <p className={classes.title}>
              <strong>{translate("episode")}:</strong> {film.episodeID}
            </p>
            <p className={classes.title}>
              <strong>{translate("director")}:</strong> {film.director}
            </p>
            <p className={classes.title}>
              <strong>{translate("releaseDate")}:</strong>{" "}
              {format(new Date(film.releaseDate), "MMMM dd, yyyy")}
            </p>
            <p className={classes.title}>
              <strong>{translate("producers")}:</strong> {film.producers.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmList;

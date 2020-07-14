import React from "react";

/*  data response structure.....
adult: false
backdrop_path: "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg"
genre_ids: (3) [28, 12, 878]
id: 11
original_language: "en"
original_title: "Star Wars"
overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
popularity: 58.186
poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
release_date: "1977-05-25"
title: "Star Wars"
video: false
vote_average: 8.2
vote_count: 13931 */


const Card = ({ movieList }) => {
  return (
    <>
      {movieList &&
        movieList.map((movie) => {
          return (
            <div key={movieList.id} >
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title}
                />
              
              <div>
                <h3>{movie.title}</h3>
                <p>
                  <small>
                    <i>Release date: {movie.release_date}</i>
                  </small>
                </p>
                <p>{movie.overview}</p>
                <p>
                  <small>
                    <i>Rating: {movie.vote_average}</i>
                  </small>
                </p>
                <p>
                  <small>
                    <i>Original language: {movie.original_language}</i>
                  </small>
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;

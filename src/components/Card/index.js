import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import imgPlaceholder from "../../images/img-placeholder.png";



/**
 * Card component to render movie information of the search
 * @param {object} movieList with server response data of search
 */
const Card = ({ movieList }) => {
    console.log('loi', movieList)
  return (
    <>
      {movieList &&
        movieList.map((movie) => {
          return (
            <div key={movieList.id} className="cardWrap">
              <div className="poster">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <img src={imgPlaceholder} alt="not provided from server" />
                )}{" "}
              </div>
              <div>
                <h5>{movie.title}</h5>
                <p>
                  <small>
                    <i>Release date: {movie.release_date}</i>
                  </small>
                </p>
                <p>
                  <small>{movie.overview}</small>
                </p>
                <small>
                  <i>Original language: {movie.original_language}</i>
                </small>
                <p>
                  <small> Rating:</small>{" "}
                  <span className="average"> {movie.vote_average}</span>
                </p>
                <p></p>
              </div>
            </div>
          );
        })}
    </>
  );
};

Card.defaultProps = {
  movieList: undefined,
};

Card.propTypes = {
  movieList: PropTypes.shape({}),
};

export default Card;

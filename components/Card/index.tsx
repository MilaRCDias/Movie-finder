import React from 'react';
import imgPlaceholder from '../../public/images/img-placeholder.png';
import Image from 'next/image';
import { IMovie } from '../../pages';

/**
 * Card component to render movie information of the search
 */

interface ICard {
  movieList: IMovie[];
}

const Card = ({ movieList }: ICard): JSX.Element => {
  return (
    <>
      {movieList?.map((movie) => {
        return (
          <div
            key={movie.id}
            className="w-[320px] m-[10px] p-6 border-white border-2 rounded"
          >
            <div className="text-center w-[140px] mb-6">
              {movie.posterUrl ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.posterUrl}`}
                  alt={movie.title}
                />
              ) : (
                <Image
                  src={imgPlaceholder}
                  alt="image not provided from server"
                />
              )}{' '}
            </div>
            <div>
              <h5 className="text-xl py-4">{movie.title}</h5>
              <p>
                <small>
                  <i>Release date: {movie.releasedIn}</i>
                </small>
              </p>
              <p>
                {' '}
                {/* limit to see more it text to big */}
                <small>{movie.description}</small>
              </p>
              <small>
                <i>Original language: {movie.language}</i>
              </small>
              <p>
                <small> Rating:</small> <span className=""> {movie.votes}</span>
              </p>
              <p></p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;

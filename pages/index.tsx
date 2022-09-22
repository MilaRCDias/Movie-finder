import React, { FormEvent, useState, KeyboardEvent } from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Card from '../components/Card';
import imgLogo from '../public/images/movie-finder-logo.svg';

export interface IMovie {
  posterUrl: string;
  id: string;
  title: string;
  description: string;
  language: string;
  votes: number;
  releasedIn: string;
}

const Home = (): JSX.Element => {
  const [movieList, setMovieList] = useState<IMovie[] | null>(null);
  const [errors, setErrors] = useState<string | null>(null);

  const handleSearch = (
    e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLInputElement>,
    value: string
  ) => {
    e.preventDefault();
    if (!value) {
      setErrors('Input value must be provided');
      return;
    }
    setErrors(null);

    fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <main className="flex flex-col">
      <div className="flex flex-col ">
        <div className="p-40 w-auto  bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <section className="mb-10 mx-auto text-center">
            <Image src={imgLogo} alt="movie-app-logo" />
          </section>
          <section>
            <Search onClick={handleSearch} />
            {errors && (
              <p className="text-center  p-10 text-red-900">{errors}</p>
            )}
          </section>
        </div>
        <section className="my-[100px] mx-auto">
          <div>
            <div className="flex justify-center">
              <h4 className="white mb-20">
                {movieList ? 'search result:' : 'Top Rated:'}
              </h4>
            </div>
            <div className="flex flex-wrap justify-center">
              <Card movieList={movieList ? movieList : []} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Home;

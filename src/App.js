import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { apiFetch } from "./http/api";
import Card from "./components/Card";
import Footer from './components/Footer';
/**
 * App component page.
 * */

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [movieList, setMovieList] = useState();

  const handleSearch = (e) => {
    e.preventDefault();

    apiFetch(inputValue, setMovieList);
  };

  return (
    <>
    <div className="container">
      <section className="header">
        <h1>Movie Search</h1>
      </section>
      <section>
        <Search
          onClick={handleSearch}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      </section>
      <section className="resultWrap">
        {movieList && (
          <div className="result">
            <p> search result:</p>
          </div>
        )}
        <div className="wrapList">
          <Card movieList={movieList} />
        </div>
    
      </section>
    </div>
      <Footer />
    </>
  );
};

export default App;

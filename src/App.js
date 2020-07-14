import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import { apiFetch, apiFetchTopRated } from "./http/api";
import Card from "./components/Card";
import Footer from './components/Footer';
import imgLogo from './images/movie-finder-logo.svg'
/**
 * App component page.
 * */

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [movieList, setMovieList] = useState();
  const [topRated, setTopRated] = useState();
  const [page, setPage] = useState(1);


  const handleSearch = (e) => {
    e.preventDefault();

    apiFetch(inputValue, setMovieList);
  };


  useEffect(() => {
    apiFetchTopRated(setTopRated, page);
   
  }, [page])

const handleMore =()=>{
  let next = page +1;
  if(next > 3){
next = 3;
  }
  setPage(next);
}

  return (
    <>
      <div className="main">
        <div className="container">
          <section className="header">
            <img src={imgLogo} className="logo" />
          </section>
          <section>
            <Search
              onClick={handleSearch}
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
          </section>
          <section className="resultWrap">
            {movieList && (<>
              <div className="result">
                <h4> search result:</h4>
              </div>
               <div className="wrapList">
              <Card movieList={movieList} />
            </div></>
            )}
            {topRated && ( <>
              <div className="result">
                <h4> Top Rated:</h4>
              </div>
               <div className="wrapList">
              <Card movieList={topRated} />
            </div>
              <button onClick={handleMore} >Load More</button>
            </>
            )}
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;

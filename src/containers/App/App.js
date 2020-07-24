import React, { useState, useEffect } from "react";
import Paginate from 'react-paginate';
import "./App.css";
import Search from "../../components/Search";
import { apiFetch, apiFetchTopRated } from "../../http/api";
import Card from "../../components/Card";
import Footer from '../../components/Footer';
import imgLogo from '../../images/movie-finder-logo.svg';

/**
 * App component page.
 * */

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [movieList, setMovieList] = useState();
  const [topRated, setTopRated] = useState();
  const [page, setPage] = useState(1);
const [totalPage, setTotalPage] = useState();

  const handleSearch = (e) => {
    e.preventDefault();

    apiFetch(inputValue, setMovieList, setTotalPage);
  };


  useEffect(() => {
    apiFetchTopRated(setTopRated, page, setTotalPage);
   
  }, [page])

 const handlePageClick =(data)=>{
   const selectPage = data.selected+1;
  setPage(selectPage);
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
            {movieList && (
              <>
                <div className="result">
                  <h4> search result:</h4>
                </div>
                <div className="wrapList">
                  <Card movieList={movieList} />
                </div>
                <Paginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={totalPage}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  initialPage={page - 1}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages-pagination"}
                  activeClassName={"active"}
                />
              </>
            )}
            {topRated && !movieList ? (
              <>
                <div className="result">
                  <h4> Top Rated:</h4>
                </div>
                <div className="wrapList">
                  <Card movieList={topRated} />
                </div>
                <Paginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={totalPage}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  initialPage={page - 1}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages-pagination"}
                  activeClassName={"active"}
                />
              </>
            ):null}
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;

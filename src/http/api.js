
/**
 * Function with external api request
 * @param {string} query the input value of the search
 * @param {func} setMovieList set state with request response
 * @param {func} setTotalPage set state with total page numbers
 */
export const apiFetch = async (query, setMovieList, setTotalPage) => {
         const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_MOVIE_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
         try {
           const response = await fetch(url);
           const data = await response.json();
           //console.log(data.results)
           setMovieList(data.results);
           setTotalPage(data.total_pages);
         } catch (err) {
           console.log(err);
         }
       };
/**
 * Function with external api request
 * @param {string} setTopRated the input value of the search
 * @param {number} page number for page search
 * @param {func} setTotalPage set state with total page numbers
 */
export const apiFetchTopRated = async (setTopRated, page, setTotalPage) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_MOVIE_KEY}&language=en-US&page=${page}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    setTopRated(data.results);
    setTotalPage(data.total_pages)
  } catch (err) {
    console.log(err);
  }
};
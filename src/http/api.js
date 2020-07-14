
/**
 * Function with external api request
 * @param {string} query the input value of the search
 * @param {func} setMovieList set state with request response
 */
export const apiFetch = async (query, setMovieList) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_MOVIE_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.results)
    setMovieList(data.results);
  } catch (err) {
    console.log(err);
  }
};

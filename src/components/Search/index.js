import React from "react";
import "./Search.css";



const Search = ({ setInputValue, inputValue, onClick }) => {
  return (
    <>
      <form className="form">
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Type a movie name. i.e. Star Wars"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="submit" onClick={onClick}>
          search
        </button>
      </form>
    </>
  );
};





export default Search;

import React from "react";
import PropTypes from "prop-types";
import "./Search.css";

 /**  Search input field component
 * @param {func} setInputValue to set state with input value
 * @param {string} inputValue value of input
 * @param {func} onClick to handle submit button 
 *  */ 
 

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

Search.defaultProps = {
  inputValue: "",
};

Search.propTypes = {
  /* function to handle submit button */
  onClick: PropTypes.func.isRequired,
  /* value target input */
  inputValue: PropTypes.string,
  /* function to set state with value of input */
  setInputValue: PropTypes.func.isRequired,
};



export default Search;

import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'

const App =()=> {
const [inputValue , setInputValue] = useState('');
  const [movieList, setMovieList] = useState();


 const handleSearch = (e) => {
   e.preventDefault();

   apiFetch(inputValue, setMovieList);
 };


    <div className="container">
      <section className="header">
        <h1>Movie Search</h1>



      </section>
      <section > 

        <Search onClick={handleSearch} setInputValue={setInputValue} inputValue={inputValue} />
      </section>

      
    </div>
  );
}

export default App;

import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'

const App =()=> {
const [inputValue , setInputValue] = useState('');


 const handleSearch = (e) => {
   e.preventDefault();

   apiFetch(query);
 };

 
  return (
    <div className="App">
      Movie Search
      <Search inputValue={inputValue} setInputValue={setInputValue} onClick={handleSearch} />
    </div>
  );
}

export default App;

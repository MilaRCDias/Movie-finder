import React, { FormEvent, useState, KeyboardEvent } from 'react';

/* Search input field component
 */

interface ISearch {
  onClick: (
    e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLInputElement>,
    value: string
  ) => void;
}

const Search = ({ onClick }: ISearch): JSX.Element => {
  const [inputValues, setInputValues] = useState('');

  return (
    <form
      className="flex flex-col w-[40rem] mx-auto my-0"
      onSubmit={(e) => onClick(e, inputValues)}
    >
      <input
        type="text"
        name="query"
        className="h-[5rem] px-[2rem] my-[3rem] rounded-2xl	 outline-none"
        placeholder="Type a movie name. i.e. Star Wars"
        value={inputValues}
        onChange={(e) => setInputValues(e.target.value)}
        onKeyDown={(e) => (e.key === 'Enter' ? onClick(e, inputValues) : null)}
      />
      <button type="submit" className="bg-blue-700 white p-3 rounded-2xl	">
        search
      </button>
    </form>
  );
};

export default Search;

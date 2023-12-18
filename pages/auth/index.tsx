import React, { useState } from 'react';

const Signin = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <label htmlFor="firstname">Firstname *</label>
      <input
        id="firstname"
        placeholder="e.g. Jane"
        className="mb-4 border-b-2"
      />
      <label htmlFor="lastName">LastName</label>
      <input
        id="lastName"
        placeholder="e.g. Smith"
        className="mb-4 border-b-2"
      />
      <label htmlFor="age">Age *</label>
      <input
        id="age"
        placeholder="e.g. 44"
        type="number"
        className="mb-4 border-b-2"
      />
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Signin;

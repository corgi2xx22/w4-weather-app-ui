import React from 'react'

function FormInput({ handleSubmit, setSearchInput }) {
  return (
    <form className='form-input' onSubmit={handleSubmit}>
      <input
        className='search-input'
        type="text"
        placeholder="City"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className='submit-btn' type="submit">Search</button>
    </form>
  );
}

export default FormInput
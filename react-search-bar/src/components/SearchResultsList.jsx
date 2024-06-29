import React from 'react'
import './SearchResultsList.css'
import SearchResults from './SearchResults';

export const SearchResultsList =({results}) => {
  return (
    <div className='results-list'>
      {results.map((results, id) => {
        {
          return <SearchResults result={results} key={id}/>;
        }
      })}
    </div>
  );
}
export default SearchResultsList;



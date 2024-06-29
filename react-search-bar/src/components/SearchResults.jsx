import React from 'react';
import "./SearchResults.css";

const SearchResults = ({ result }) => {
  return (
    <div className="SearchResults">
      <div>
        {result.name}
      </div>
    </div>
  );
};

export default SearchResults;

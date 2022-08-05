import React from "react";
import { MdSearch } from "react-icons/md";

import debounce from "../framework/debounced";
{
  /*this is our search component
here am using the handleSearchNote as props and we are going to use this
as our onClick event function for searching (this actual function has been defined in App.js)*/
}
function Search({ handleSearch }) {
  const handleChange = debounce(handleSearch);
  return (
    <div className="search">
      {/*this is our search icon within our search bar and I have fixed it's size to 1.3em*/}
      <MdSearch className="search-icon" size="1.4em" />
      {/*this is the input tag for our search and here , I have used some onClick events for searching*/}
      <input
        type="text"
        placeholder="Search for your notes..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default Search;

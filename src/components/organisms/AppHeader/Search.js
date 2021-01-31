import React from 'react';

const Search = () => {
  return (
    <form className="navbar-search">
      <div className="rel">
        <span className="search-icon">
          <i className="ti-search"></i>
        </span>
        <input className="form-control" placeholder="Search here..." />
      </div>
    </form>
  );
};

export default React.memo(Search);

import React from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <div className="page-brand">
      <Link className="link" to="/">
        <span className="brand">
          Admin
          <span className="brand-tip">CAST</span>
        </span>
        <span className="brand-mini">AC</span>
      </Link>
    </div>
  );
};

export default React.memo(Brand);

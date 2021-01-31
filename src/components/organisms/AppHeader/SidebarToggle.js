import React from 'react';

const SidebarToggle = () => {
  return (
    <a className="nav-link sidebar-toggler js-sidebar-toggler" href="#">
      <i className="ti-menu"></i>
    </a>
  );
};

export default React.memo(SidebarToggle);

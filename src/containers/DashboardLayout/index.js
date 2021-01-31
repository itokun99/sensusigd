import React from 'react';
import PropTypes from 'prop-types';
import { AppHeader, AppSidebar, AppFooter } from 'components';

const DashboardLayout = ({ children }) => {
  return (
    <React.Fragment>
      <AppHeader />
      <AppSidebar />
      <div className="content-wrapper">
        {children}
        <AppFooter />
      </div>
    </React.Fragment>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};
DashboardLayout.defaultProps = {
  children: null
};

export default DashboardLayout;

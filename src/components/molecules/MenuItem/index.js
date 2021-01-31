import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/atoms';
import { Link } from 'react-router-dom';

const MenuItem = ({ label, icon, path, heading }) => {
  if (heading) {
    return <li className="heading">{label}</li>;
  }
  return (
    <li>
      <Link to={path}>
        <Icon className="sidebar-item-icon" icon={icon} />
        <span className="nav-label">{label}</span>
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  heading: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.string,
  path: PropTypes.string
};
MenuItem.defaultProps = {
  heading: false,
  label: '',
  icon: '',
  path: ''
};

export default React.memo(MenuItem);

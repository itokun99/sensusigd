import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Icon = ({ icon, className }) => {
  if (!icon) {
    return null;
  }
  const iconClass = cx('fa', icon, className);
  return <i className={iconClass}></i>;
};

Icon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
};
Icon.defaultProps = {
  icon: null,
  className: null
};

export default React.memo(Icon);

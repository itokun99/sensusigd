import React, { useState } from 'react';
import { MenuItem } from 'components/molecules';
import { imgAdminAvatar } from 'assets';

const AppSidebar = () => {
  const [menus] = useState([
    {
      label: 'Dashboard',
      icon: 'fa-th-large'
    },
    {
      label: 'MENU UTAMA',
      icon: null,
      heading: true
    },
    {
      label: 'Laporan',
      icon: 'fa-table',
      path: '/laporan'
    }
  ]);
  return (
    <nav className="page-sidebar" id="sidebar">
      <div id="sidebar-collapse">
        <div className="admin-block d-flex">
          <div>
            <img src={imgAdminAvatar} width={45} alt="" />
          </div>
          <div className="admin-info">
            <div className="font-strong">Indrawan Lisanto</div>
            <small>Programmer</small>
          </div>
        </div>
        <ul className="side-menu metismenu">
          {menus.map((menu, index) => (
            <MenuItem
              key={index}
              icon={menu.icon}
              label={menu.label}
              path={menu.path}
              heading={menu.heading}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(AppSidebar);

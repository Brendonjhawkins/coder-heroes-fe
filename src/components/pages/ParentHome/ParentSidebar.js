import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

import {
  HomeFilled,
  ThunderboltFilled,
  CalendarFilled,
  ToolFilled,
  ExportOutlined,
  HeartFilled,
} from '@ant-design/icons';

function ParentSidebar(props) {
  const { collapsed } = props;

  const handleClick = e => {
    console.log('click ', e);
  };

  return (
    <div>
      <Menu
        className="parent-dashboard-sidebar"
        onClick={handleClick}
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        style={{ height: '300vh' }}
        mode="inline"
        theme="light"
        color="orange"
        inlineCollapsed={collapsed}
      >
        <Menu.Item
          key="1"
          className="dashboard-logo"
          icon={<ThunderboltFilled />}
        >
          CoderHeroes
        </Menu.Item>
        <Menu.Item key="2" icon={<HomeFilled />}>
          <Link to="/parent" className="link">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<HeartFilled />}>
          <Link to="/" className="link">
            {' '}
            ** Family
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<CalendarFilled />}>
          <Link to="/parent-booking" className="link">
            Booking
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ToolFilled />}>
          <Link to="/settings" className="link">
            {' '}
            ** Settings
          </Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<ExportOutlined />}>
          <Link to="/logout" className="link">
            {' '}
            ** Logout
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default ParentSidebar;

// ** means that routes for "settings", "family (which is renders a list of children that belong to that parent. the endpoint might be localhost:3000/parent_id/child or something like that), Logout ( I know the logout functionality is working, I just dont know how to connect to it) are missing. Can we address that or let me know so I can remove.

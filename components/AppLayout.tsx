import React from 'react';
import { reveal as Menu } from 'react-burger-menu';
import SiteNav from './SiteNav';
import '../index.scss';

const AppLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Menu pageWrapId={'page-wrap'}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
      </Menu>
      <div id="page-wrap">
        <SiteNav />
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default AppLayout;

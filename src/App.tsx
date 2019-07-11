import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { reveal as Menu } from 'react-burger-menu';

import SiteNav from './components/SiteNav';
import MovieList from './views/MovieList';
import AddMovie from './views/AddMovie';
import Search from './views/Search';
import Settings from './views/Settings';
import Status from './views/Status';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Menu pageWrapId={'page-wrap'}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
      </Menu>
      <div id="page-wrap">
        <Router>
          <SiteNav />
          <Route path="/" exact component={Status} />
          <Route path="/add" exact component={AddMovie} />
          <Route path="/movie" component={MovieList} />
          <Route path="/search" exact component={Search} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/status" exact component={Status} />
        </Router>
      </div>
    </React.Fragment>
  );
};

export default App;

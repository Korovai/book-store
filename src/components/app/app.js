import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../header/header';
import HomePage from '../pages/home-page';
import BasketPage from '../pages/basket-page';
import PageNotFound from '../pages/page-not-found';

import './app.css';

const App = () => {
  return(
    <div className="wrApp">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/basket" component={BasketPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
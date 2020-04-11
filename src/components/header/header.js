import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';
import logo from './logo.png';
import shoppingBag from './shopping-bag.png';

const HeaderPage = () => {
  return(
    <div className="wrHeader">
      <Link to="/">
        <div className="wrLogo">
          <img src={logo} alt="Logo" />
          Book Store
        </div>
      </Link>
    
      <Link to="/basket">
        <div className="wrBasket">
          <img src={shoppingBag} alt="Shopping Bag" />
          <span>3 items (81$)</span>
        </div>
      </Link>
    </div>
  );
};

export default HeaderPage;
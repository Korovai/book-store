import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './header.css';
import logo from './logo.png';
import shoppingBag from './shopping-bag.png';

const HeaderPage = ({countCartItems, costCartItems}) => {
  return(
    <div className="wrHeader">
      <Link to="/">
        <div className="wrLogo">
          <img src={logo} alt="Logo" />
          Book Store
        </div>
      </Link>
    
      <Link to="/shoppingcart">
        <div className="wrBasket">
          <img src={shoppingBag} alt="Shopping Bag" />
          <span>{countCartItems} items ({costCartItems}$)</span>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: {countCartItems, costCartItems}}) => {
  return {
    countCartItems,
    costCartItems
  };
};

export default connect(mapStateToProps)(HeaderPage);
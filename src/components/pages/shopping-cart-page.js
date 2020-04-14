import React, {Component} from 'react';
import {connect} from 'react-redux';
import {cartItemsRequested} from '../../actions/index';

import './shopping-cart-page.css';

class ShoppingCartPage extends Component {
  
  componentDidMount() {
    const {cartItemsRequested} = this.props;
    cartItemsRequested();
  };
  
  render() {
    const {cartItems} = this.props;
    
    return( 
      <div className="wrShoppingCartPage">
        <div className="shoppingCartTable">
          <h2>Your Order</h2>
          <table className="table">
            <thead>
              <tr className="tableHeaders">
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                cartItems.map((item, idx) => {
                  const {id, title, count, total} = item;
                  return(
                    <tr key={id} className="tableRow">
                      <td>{idx + 1}</td>
                      <td>{title}</td>
                      <td>{count}</td>
                      <td>${total}</td>
                      <td className="wrActionButtons">
                        <button className="btnAddItem">
                          <i className="fa fa-plus-circle" />
                        </button>
                        <button className="btnDelItem">
                          <i className="fa fa-minus-circle" />
                        </button>
                        <button className="btnDelAllItems">
                          <i className="fa fa-trash-o" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>

          <div className="totalCost">Total: $201</div>
        </div>
      </div>
    );  
  };
};

const mapStateToProps = ({cartItems}) => {
  return {
    cartItems
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartItemsRequested: () => {
      dispatch(cartItemsRequested());
    } 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
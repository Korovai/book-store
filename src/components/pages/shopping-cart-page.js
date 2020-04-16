import React, {Component} from 'react';
import {connect} from 'react-redux';
import {cartItemsRequested, bookIncreased, bookDecreased, bookDeleted} from '../../actions/index';

import './shopping-cart-page.css';

class ShoppingCartPage extends Component {
  
  componentDidMount() {
    const {cartItemsRequested} = this.props;
    cartItemsRequested();
  };
  
  render() {
    const {cartItems, costCartItems, onIncrease, onDecrease, onDeleted} = this.props;
    
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
                        <button onClick={() => onIncrease(id)} className="btnAddItem">
                          <i className="fa fa-plus-circle" />
                        </button>
                        <button onClick={() => onDecrease(id)} className="btnDelItem">
                          <i className="fa fa-minus-circle" />
                        </button>
                        <button onClick={() => onDeleted(id)} className="btnDelAllItems">
                          <i className="fa fa-trash-o" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>

          <div className="totalCost">Total: ${costCartItems}</div>
        </div>
      </div>
    );  
  };
};

const mapStateToProps = ({cartItems, costCartItems}) => {
  return {
    cartItems,
    costCartItems
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartItemsRequested: () => {
      dispatch(cartItemsRequested());
    },
    onIncrease: (id) => {
      dispatch(bookIncreased(id));
    },
    onDecrease: (id) => {
      dispatch(bookDecreased(id));
    },
    onDeleted: (id) => {
      dispatch(bookDeleted(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
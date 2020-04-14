import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item/book-list-item';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import withBookstoreService from '../../hoc/with-bookstore-service';
import {booksLoaded, booksRequested, booksError, bookAddedToCart} from '../../actions/index';

import './book-list.css';

class BookList extends Component {
  
  componentDidMount() {
    const {bookstoreService, booksLoaded, booksRequested, booksError} = this.props;
    
    bookstoreService.getBooks()
      .then((data) => {
        booksLoaded(data);
      })
      .catch((err) => {
        booksError(err);
      });
    booksRequested();
  };

  render() {
    const {books, loading, error, onAddedToCart} = this.props;
    
    if(loading) {
      return <Spinner />
    }
      
    if(error) {
      return <ErrorIndicator />
    }
    
    return(
      <div className="wrBookList">
        <ul className="bookList">
          <BookListItem data={books} onAddedToCart={onAddedToCart} />
        </ul>
      </div>
    );
  };
};

const mapStateToProps = ({books, loading, error}) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => {
      dispatch(booksLoaded(newBooks));
      /*dispatch({
        type: 'BOOKS_LOADED',
        payload: newBooks
      });*/
    },
    booksRequested: () => {
      dispatch(booksRequested());
    },
    booksError: (error) => {
      dispatch(booksError(error));
    },
    onAddedToCart: (id) => {
      dispatch(bookAddedToCart(id));
    }
  };
};

export default withBookstoreService(connect(mapStateToProps, mapDispatchToProps)(BookList));
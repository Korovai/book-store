import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item/book-list-item';
import withBookstoreService from '../../hoc/with-bookstore-service';
import {booksLoaded} from '../../actions/index';

import './book-list.css';

class BookList extends Component {
  
  componentDidMount() {
    // 1. Receive data
    const {bookstoreService} = this.props;
    const data = bookstoreService.getBooks();
    
    // 2. Dispatch action to store
    this.props.booksLoaded(data);
  };

  render() {
    const data = this.props.books;
    
    return(
      <div className="wrBookList">
        <ul className="bookList">
          <BookListItem data={data} />
        </ul>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    books: state.books
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
    }
  };
};

export default withBookstoreService(connect(mapStateToProps, mapDispatchToProps)(BookList));
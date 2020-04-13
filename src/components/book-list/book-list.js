import React, {Component} from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item/book-list-item';
import Spinner from '../spinner/spinner';
import withBookstoreService from '../../hoc/with-bookstore-service';
import {booksLoaded, booksRequested} from '../../actions/index';

import './book-list.css';

class BookList extends Component {
  
  componentDidMount() {
    const {bookstoreService, booksLoaded, booksRequested} = this.props;
    
    bookstoreService.getBooks()
      .then((data) => {
        booksLoaded(data);
      });
    booksRequested();
  };

  render() {
    const {books, loading} = this.props;
    
    if(loading) {
      return <Spinner />
    }
    
    return(
      <div className="wrBookList">
        <ul className="bookList">
          <BookListItem data={books} />
        </ul>
      </div>
    );
  };
};

const mapStateToProps = ({books, loading}) => {
  return {
    books,
    loading
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
    }
  };
};

export default withBookstoreService(connect(mapStateToProps, mapDispatchToProps)(BookList));
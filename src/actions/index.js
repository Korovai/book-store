const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDEDE_TO_CART',
    payload: bookId
  }
};

const bookIncreased = (bookId) => {
  return {
    type: 'BOOK_INCREASED_FROM_CART',
    payload: bookId
  };
};

const bookDecreased = (bookId) => {
  return {
    type: 'BOOK_DECREASED_FROM_CART',
    payload: bookId
  };
};

const bookDeleted = (bookId) => {
  return {
    type: 'BOOK_DELETED_FROM_CART',
    payload: bookId
  };
};

export {
  booksLoaded,
  booksRequested,
  booksError,
  bookAddedToCart,
  bookIncreased,
  bookDecreased,
  bookDeleted
}
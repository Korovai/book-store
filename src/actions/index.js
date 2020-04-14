const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
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

const cartItemsRequested = () => {
  return {
    type: 'FETCH_CARTITEMS_REQUEST'
  };
};

export {
  booksLoaded,
  booksRequested,
  booksError,
  cartItemsRequested
}
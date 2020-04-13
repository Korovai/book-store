const initialState = {
  books: [],
  loading: true
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false
      };
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
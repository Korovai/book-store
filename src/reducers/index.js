const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      title: 'Learning React: Functional Web Development with React and Redux',
      count: 2,
      price: 56},
    {
      id: 2,
      title: 'React Explained: Your Step-by-Step Guide to React',
      count: 1,
      price: 36}
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
        error: null,
        cartItems: state.cartItems
      };
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        loading: true,
        error: null,
        cartItems: state.cartItems
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        loading: false,
        error: action.payload,
        cartItems: state.cartItems
      };
      case 'FETCH_CARTITEMS_REQUEST':
        return {
          books: [],
          loading: false,
          error: null,
          cartItems: state.cartItems
        };
    default:
      return state;
  }
};

export default reducer;
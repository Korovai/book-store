const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: []
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
    case 'BOOK_ADDEDE_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIdx = state.cartItems.findIndex(({id}) => id === bookId);
      const item = state.cartItems[itemIdx];
      
      let newItem;
      if(item) {
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price
        }; 
      } else {
        newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price
        };
      };
      
      if(itemIdx !== -1) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIdx),
            newItem,
            ...state.cartItems.slice(itemIdx + 1)
          ]
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            newItem
          ]
        };
      };
    default:
      return state;
  }
};

export default reducer;
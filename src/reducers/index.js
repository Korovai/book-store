const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  countCartItems: 0,
  costCartItems: 0
}

const updateCartItem = (book, item, ch) => {
  if(item) {
    return {
      ...item,
      count: item.count + ch,
      total: item.total + book.price*ch
    }; 
  } else {
    return {
      id: book.id,
      title: book.title,
      count: 1,
      total: book.price
    };
  }
};

const updateCartItems = (cartItems, item, idx) => {
  if(idx !== -1) {
    if(item.count === 0) {
      return [
        ...cartItems.slice(0, idx),
        ...cartItems.slice(idx + 1)
      ];
    } else {
      return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
      ];
    }
  } else {
    return [
      ...cartItems,
      item
    ];
  }
};

const updateOrder = (state, bookId, ch = 1) => {
  const {books, cartItems, countCartItems, costCartItems} = state;
  const book = books.find((book) => book.id === bookId);
  const itemIdx = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIdx];
  const newItem = updateCartItem(book, item, ch);
  let count = 0, cost = 0;
  
  count = countCartItems + ch;
  cost = costCartItems + book.price*ch;

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIdx),
    countCartItems: count,
    costCartItems: cost
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
        error: null,
        cartItems: state.cartItems,
        countCartItems: state.countCartItems,
        costCartItems: state.costCartItems
      };
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        loading: true,
        error: null,
        cartItems: state.cartItems,
        countCartItems: state.countCartItems,
        costCartItems: state.costCartItems
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        loading: false,
        error: action.payload,
        cartItems: state.cartItems,
        countCartItems: state.countCartItems,
        costCartItems: state.costCartItems
      };
    case 'FETCH_CARTITEMS_REQUEST':
      return {
        books: state.books,
        loading: false,
        error: null,
        cartItems: state.cartItems,
        countCartItems: state.countCartItems,
        costCartItems: state.costCartItems
      };
    case 'BOOK_ADDEDE_TO_CART':
      return updateOrder(state, action.payload);
    case 'BOOK_INCREASED':
      return updateOrder(state, action.payload);
    case 'BOOK_DECREASED':
      return updateOrder(state, action.payload, -1);
    case 'BOOK_DELETED':
      const bookId = state.cartItems.findIndex(({id}) => id === action.payload);
      const ch = state.cartItems[bookId].count;
      return updateOrder(state, action.payload, -ch);
    default:
      return state;
  }
};

export default reducer;
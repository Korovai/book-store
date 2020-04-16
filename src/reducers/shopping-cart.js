const updateCartItem = (book, item = {}, ch) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item;
  
  return {
    id,
    title,
    count: count + ch,
    total: total + book.price*ch
  };
};

const updateCartItems = (cartItems, item, idx) => {
  if(item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }
  
  if(idx !== -1) {
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1)
    ];
  } 
  
  return [
    ...cartItems,
    item
  ];
};

const updateOrder = (state, bookId, ch = 1) => {
  const {books} = state.bookList;
  const {cartItems, countCartItems, costCartItems} = state.shoppingCart;
  const book = books.find((book) => book.id === bookId);
  const itemIdx = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIdx];
  const newItem = updateCartItem(book, item, ch);
  let count = 0, cost = 0;
  
  count = countCartItems + ch;
  cost = costCartItems + book.price*ch;

  return {
    cartItems: updateCartItems(cartItems, newItem, itemIdx),
    countCartItems: count,
    costCartItems: cost
  };
};

const updateShoppingCart = (state, action) => {
  if(state === undefined) {
    return {
      cartItems: [],
      countCartItems: 0,
      costCartItems: 0
    }
  }
  
  switch(action.type) {
    case 'BOOK_ADDEDE_TO_CART':
      return updateOrder(state, action.payload);
    case 'BOOK_INCREASED_FROM_CART':
      return updateOrder(state, action.payload);
    case 'BOOK_DECREASED_FROM_CART':
      return updateOrder(state, action.payload, -1);
    case 'BOOK_DELETED_FROM_CART':
      const bookId = state.shoppingCart.cartItems.findIndex(({id}) => id === action.payload);
      const ch = state.shoppingCart.cartItems[bookId].count;
      return updateOrder(state, action.payload, -ch);
    default: 
      return state.shoppingCart;
  };
};

export default updateShoppingCart;
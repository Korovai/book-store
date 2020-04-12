const initialState = {
  books: [
    {
      id: 1,
      title: 'Learning React: Functional Web Development with React and Redux',
      author: 'Alex Banks & Eve Porcello',
      price: 28,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Q43WRXJzL._SX379_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'React Explained: Your Step-by-Step Guide to React',
      author: 'Zac Gordon',
      price: 25,
      coverImage: 'https://m.media-amazon.com/images/I/51PNQd7RIwL.jpg'}
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
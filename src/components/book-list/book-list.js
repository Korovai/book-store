import React from 'react';
import {connect} from 'react-redux';

import './book-list.css';

const BookList = (props) => {
  const data = props.books;
  const items = data.map((book) => {
    const {id, title, author, price, coverImage} = book;
    
    return(
      <li key={id} className="bookListItem">
        <div className="wrCoverBook">
          <img src={coverImage} alt="Cover" />
        </div>
      
        <div className="wrInfoBook">
          <span className="titleBook">{title}</span>
          <span className="authorBook">by {author}</span>
          <span className="priceBook">${price}</span>
          <button className="btnBuyBook"><i class="fas fa-cart-plus"></i>Add to Cart</button>
        </div>
      </li>
    );
  });

  return(
    <div className="wrBookList">
      <ul className="bookList">
        {items}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps)(BookList);
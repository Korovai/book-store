import React from 'react';

import './book-list-item.css';

const BookListItem = ({data, onAddedToCart}) => { 
  return(
    <React.Fragment>
      {
        data.map((book) => {
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
                <button onClick={() => onAddedToCart(id)} className="btnBuyBook"><i className="fas fa-cart-plus"></i>Add to Cart</button>
              </div>
            </li>
          );
        })
      }
    </React.Fragment>
  );
};

export default BookListItem;
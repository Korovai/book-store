import React from 'react';

import BookList from '../book-list/book-list';

import './home-page.css';

const HomePage = () => {
  return(
    <div className="wrHomePage">
      <BookList />
    </div>
  );
};

export default HomePage;
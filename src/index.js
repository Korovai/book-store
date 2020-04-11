import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import BookstoreService from './services/bookstore-service';
import {BookstoreProvider} from './bookstore-service-context/bookstore-service-context';
import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry';

import './index.css';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <ErrorBoundry>
    <BookstoreProvider value={bookstoreService}>
      <Router>
        <App />
      </Router>
    </BookstoreProvider>
  </ErrorBoundry>,
  document.getElementById('root')
);
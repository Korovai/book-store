import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import BookstoreService from './services/bookstore-service';
import {BookstoreProvider} from './bookstore-service-context/bookstore-service-context';
import store from './store';
import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry';

import './index.css';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
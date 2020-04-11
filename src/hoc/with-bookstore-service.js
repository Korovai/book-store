import React from 'react';
import {BookstoreConsumer} from '../bookstore-service-context/bookstore-service-context';

const withBookstoreService = (Wrapped) => {
  return () => {
    return(
      <BookstoreConsumer>
        {
          (bookstoreService) => {
            return(
              <Wrapped bookstoreService={bookstoreService} />
            );
          }
        }
      </BookstoreConsumer>
    );
  };
};

export default withBookstoreService;
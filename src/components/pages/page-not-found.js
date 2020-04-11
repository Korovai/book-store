import React from 'react';
import {Link} from 'react-router-dom';

import './page-not-found.css';
import pageNotFound from './404.png';

const PageNotFound = () => {
  return(
    <div className="wrPageNotFound">
      <img src={pageNotFound} alt="404" />
      <span className="pageNotFoundTitle">Page Not Found</span>
      <span className="pageNotFoundText">You seem to have clicked on a broken link or entered a URL that doesn't exist on this this site</span>
      <button className="btnGoHome">
        <Link to="/">Go back to site</Link>
      </button> 
    </div>      
  );
};

export default PageNotFound;
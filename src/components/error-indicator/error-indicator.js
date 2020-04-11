import React from 'react';

import './error-indicator.css';
import iconError from './maintenance.png';

const ErrorIndicator = () => {
  return(
    <div className="wrErrorIndicator">
      <img src={iconError} alt="Icon Error" />
      <span className="errorIndicatorTitle">Server Timeout</span>
      <span className="errorIndicatorText">information is temporarily unavailable</span>
      <span className="errorIndicatorText">(try again later)</span> 
    </div>
  );
};

export default ErrorIndicator;
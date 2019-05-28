import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';

const HeaderTitle = () => {
  return (
    <div className="header-title-div">
      <div className="header-title">
        <p>
          <strong>Lambda School</strong> @LambdaSchool <span className="time">{moment().format("MMM Do YYYY, h:mm a")}</span>
        </p>
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderTitle;

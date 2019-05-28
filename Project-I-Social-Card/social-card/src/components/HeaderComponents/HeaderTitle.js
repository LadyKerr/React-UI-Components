import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';


const HeaderTitle = () => {
  return (
    <div className="header-title-div">
      <div className="header-title">
        <p>
          <strong>Lambda School</strong> @LambdaSchool <span className="time">*8 Jan</span>
        </p>
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderTitle;

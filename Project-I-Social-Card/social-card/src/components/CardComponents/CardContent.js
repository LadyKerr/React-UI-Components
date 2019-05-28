import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <div className="card-section">
      <h4 className="card-content">Get Started with React</h4>
      <p className="card-content">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <a className="card-content react-link" href="https://reactjs.org/">reactjs.org</a>
    </div>
  );
};

export default CardContent;

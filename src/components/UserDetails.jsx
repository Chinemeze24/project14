import React from 'react';
import cat from "../assets/cat-with-clothe.jpg";
import "../App.css"

const UserDetails = () => {
  return (
    <div className="user-details">
      <img src={cat} alt="Cat-wearing-sweater" className="product-image" />
      <div className="tag">
        
        
        <div className="tag-button active"></div>
        <div className="tag-button"></div>
        <div className="tag-button"></div>
        <div className="tag-button"></div>
        <div className="tag-button"></div>
        
      </div>
    </div>
  );
}

export default UserDetails;
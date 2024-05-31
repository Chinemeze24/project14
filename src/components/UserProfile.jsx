import React from 'react';
import "../App.css"

const Profile = () => {
  return (
    <div className="profile">

    <div>
    <h1 className="text-Soft">Soft fleece</h1>
    <h1>Cat sweater</h1>
    </div>
      
      <div className="ratings-container">
          <div>
            <span className="ratings">&#9733;</span>
            <span className="ratings">&#9733;</span>
            <span className="ratings">&#9733;</span>
            <span className="ratings">&#9733;</span>
            <span className="ratings">&#9733;</span>
          </div>

          <div>
            <span className="rating345">345 ratings</span>
          </div>
      </div>

      <div className="color-options">
        <span className='color'>Color:</span>
        <div className="colors">
          <div className="color-grey"></div>
          <div className="color-black"></div>
          <div className="color-pink"></div>
          <div className="color-yellow"></div>
          <div className="color-green"></div>
        </div>
      </div>
      <div className="size-options">
        <span className='size-text'>Size:</span>

        <di className="size-container">
          <div id="size">S</div>
          <div className="size">M</div>
          <div className="size">L</div>
          <div className="size">XL</div>
        </di>
        
      </div>
      <div className="price">$14.99</div>
      <div className="buttons">
        <button className="order-btn">Order now</button>
        <button className="heart-btn">&#10084;</button>
        {/* <box-icon type='solid' name='heart' size="md"></box-icon> */}
      </div>
    </div>
  );
}

export default Profile;
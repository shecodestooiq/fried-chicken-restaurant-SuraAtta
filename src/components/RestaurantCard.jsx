import { Link } from "react-router-dom";
import Rating from 'react-rating';
import React, { useState } from 'react';


const RestaurantCard = ({ data, onUpdateRate }) => {
  const [newRate, setNewRate] = useState(data.rating);

  const handleChangeRate = () => {
    onUpdateRate(newRate);
  };

  return (<>
    <div className="rest-card">
      <Link to={`/restaurantDetails/${data.id}`} state={data}>
        <img className='rest-img' src={data.img} alt="Image"></img>
        <h1 data-testid='restaurant-name'>
          {data.name}
        </h1>
        <p data-testid='restaurant-location'>{data.location}</p></Link>
      <div className="rating-row">
        <p data-testid='restaurant-rating'>
          <Rating
            initialRating={newRate}
            emptySymbol={<i className="far fa-star"></i>}
            fullSymbol={<i className="fas fa-star"></i>}
            fractions={2}
            onChange={setNewRate}
          />
        </p>
        <button className='rate-edit' onClick={handleChangeRate}><i class="fas fa-edit"></i></button></div>

    </div>
  </>

  );
}

export default RestaurantCard;
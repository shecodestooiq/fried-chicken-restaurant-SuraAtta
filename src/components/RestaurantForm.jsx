import { ListOfRestaurants } from '../list'
import React, { useState } from 'react';
import Rating from 'react-rating';

const RestaurantForm = ({ handleAdd }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [rate, setRate] = useState(0);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleAdd(name, location, rate);
        setName('');
        setLocation('');
        setRate(0);
    };
    return (
        <div className='addRestaurant'>
            <form onSubmit={handleFormSubmit} id='addRestaurant' >
                <div className='inputs-row'>
                    <label className='lable'>Name</label>
                    <input
                        data-testid='restaurant-name-input'
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='inputs-row'>
                    <label className='lable'>Location</label>
                    <input
                        data-testid='restaurant-location-input'
                        type='text'
                        name='location'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className='inputs-row'>
                    <label className='lable'>Rating</label>
                    <Rating
                        data-testid='range-input'
                        className='add-rating'
                        initialRating={rate}
                        emptySymbol={<i className="far fa-star fa-lg"></i>}
                        fullSymbol={<i className="fas fa-star fa-lg"></i>}
                        fractions={2}
                        onChange={(value) => setRate(value)}
                    />
                </div>
                <div className='inputs-row'>
                    <button type='submit' className='add-rest'>Add</button>
                </div>
            </form>
        </div>

    );
}

export default RestaurantForm;
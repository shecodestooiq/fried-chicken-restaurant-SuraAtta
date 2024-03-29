import { ListOfRestaurants } from '../list'
import Hero from './Hero';
import RestaurantCard from './RestaurantCard';
import RestaurantForm from './RestaurantForm';
import { useState } from 'react';


const RestaurantList = () => {
    const [RestList, setRestList] = useState(ListOfRestaurants);



    const handleAdd = (name, location, rate) => {
        if (name != '' && location != '' && rate != null) {
            const newId = RestList.length + 1;
            const newRestList = [...RestList, { id: newId, name: name, location: location, rating: rate, img: "",map:"" }];
            setRestList(newRestList)
            console.log(newRestList);
        }
    }

    const handleUpdateRate = (index, newRate) => {
        const newRestList = [...RestList];
        newRestList[index].rating = newRate;
        setRestList(newRestList);
    };

    console.log(RestList);

    return (
        <div data-testid='restaurants-list'>
            <Hero />
            <div className="card-container">
                {
                    RestList.map((e, index) => (<RestaurantCard data={e} onUpdateRate={(newRate) => handleUpdateRate(index, newRate)}
                    />))
                }</div>
            <hr></hr>
            <div className='rest-container'>
                <h1>Add a restaurant to help Mohamed!</h1>
                <RestaurantForm handleAdd={handleAdd} />
            </div>
        </div>
    );
}

export default RestaurantList;
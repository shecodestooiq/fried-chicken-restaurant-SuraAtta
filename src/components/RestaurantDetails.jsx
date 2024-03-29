import { useLocation } from 'react-router-dom';
import Rating from 'react-rating';
import { Link } from "react-router-dom";

const RestaurantDetails = () => {
  const data = useLocation()

  return (
    <div className='details-container'>
      <div className='back'>
        <Link to='/'><i class="fa-solid fa-arrow-left"></i></Link>
      </div>
      <div className='details'>
        <div className='d1'>    <img className='details-img' src={data.state.img}></img>
        <h1>{data.state.name}</h1>
        <Rating
          readonly={true}
          initialRating={data.state.rating}
          emptySymbol={<i className="far fa-star"></i>}
          fullSymbol={<i className="fas fa-star"></i>}
          fractions={2}
        /> </div>
     
        <div className='map'>        <h2>Restourants location:</h2>
{
          data.state.map.length < 30 ?
            <h1>Location will be provided soon!</h1> :
            <iframe
              src={data.state.map}
              width="300px"
              height="300px"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        }</div>
        </div>        
      </div>

  );

}

export default RestaurantDetails;
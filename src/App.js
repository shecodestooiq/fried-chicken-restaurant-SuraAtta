import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
       <NavBar/>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/restaurantDetails/:id" element={<RestaurantDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

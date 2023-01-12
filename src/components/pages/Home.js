import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCityForm from '../homePageComponents/AddCityForm/AddCityForm'
import CityList from '../homePageComponents/CityList/CityList'
import CurrentDate from '../../utils/CurrentDate'

const Home = () => {
  return (
    <div className='container bg-white p-4 mt-5'>
      <h1 align="center">{CurrentDate(new Date())}</h1>
      <AddCityForm />
      <CityList />
    </div>
  );
};

export default Home;
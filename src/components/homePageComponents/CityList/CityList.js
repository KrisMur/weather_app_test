import React from 'react';
import CityItem from '../CityItem/CityItem'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCity } from '../../../redux/citySlice';
import Grid from '@mui/material/Grid';

const CityList = () => {

  const api = {
    key: 'b5fe7a6b601177cebe9479d2888cd303',
    baseUrl: 'https://api.openweathermap.org/data/2.5/'
  }

  const dispatchFunction = useDispatch();

  const GetDayWeather = (inputCity) => {
    fetch(`${api.baseUrl}weather?q=${inputCity}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        dispatchFunction(
          addCity({
            weather: result,
            title: inputCity,
          }),
        );
      })
  };

  const cities = useSelector((state) => state.cities)
  if (cities.length === 0) {
    const myStorage = Object.values(localStorage);
    myStorage.forEach(element => GetDayWeather(element));
  }
  

  return (
    <Grid container spacing={2}>
      {cities.map((city) =>
        <Grid item xs={3} key={city.id}>
          <CityItem key={city.id} id={city.id} title={city.title} weather={city.weather} />
        </Grid>
      )}
    </Grid>
  );
}

export default CityList;
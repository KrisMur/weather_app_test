import React from 'react';
import { useDispatch } from 'react-redux';
import { addWeather, deleteCity } from '../../../redux/citySlice';
import api from '../../../utils/apiInfo';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, IconButton, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './CityItem.css'


const CityItem = ({ id, title, weather }) => {
  const dispatchFunction = useDispatch();

  const GetDayWeather = (inputCity) => {
    fetch(`${api.baseUrl}weather?q=${inputCity}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        dispatchFunction(
          addWeather({
            weather: result,
          })
        );
      });
  };

  const handleDeleteClick = () => {
    dispatchFunction(deleteCity({ id }));
    localStorage.removeItem(title)
    // localStorage.clear()
  }

  const handleRefreshClick = () => {
    GetDayWeather(title)
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <div className="location">{title} {weather.sys.country}</div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className="temp">{weather.main.temp}°c</div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className="deskription">{weather.weather[0].main}</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='CardActions'>
          <Button size="small" color="primary" onClick={handleRefreshClick}>
            Refresh
          </Button>
          <IconButton aria-label="delete" onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
          <Link to={{
            pathname: "/detail",
            weatherDetail: weather
          }}>
            <Button variant="contained" disableElevation>detail</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default CityItem;
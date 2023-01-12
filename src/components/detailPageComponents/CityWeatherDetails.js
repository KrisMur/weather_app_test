import React from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './CityWeatherDetails.css'

const CityWeatherDetails = () => {
  const { weatherDetail } = useLocation();
  const moreDetails = weatherDetail.main
  const keys = Object.keys(moreDetails);

  return (
    <Card variant="outlined">
      <CardContent className='CardDetailInfo'>
        <h1>Weather details <br /> for city : {weatherDetail.name}</h1>
        <Typography variant="h5" component="div">
          <div>{weatherDetail.weather[0].description}</div>
        </Typography>
        {keys.map((key) => {
          return (
            <>
              <Typography variant="h5" component="div" key={key}>
                <div>{key} : {moreDetails[key]}</div>
              </Typography>
            </>
          )
        }
        )}
        <Link to={{
          pathname: "/",
        }}>
          <Button variant="contained" disableElevation>Home</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CityWeatherDetails;
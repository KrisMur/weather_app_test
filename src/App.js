import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/pages/Home';
import WeatherDetail from './components/pages/WeatherDetail';


const App = () => {
    return (
    <div>
      <Route exact path="/">
        <Home />
      </ Route>
      <Route path='/detail'>
        <WeatherDetail />
      </ Route>
    </div>
  );
};

export default App;

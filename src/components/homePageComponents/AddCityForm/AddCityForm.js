import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../../../redux/citySlice';
import api from '../../../utils/apiInfo';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './AddCityForm.css'

const AddCityForm = () => {
  const [value, setValue] = useState('');
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
          localStorage.setItem(inputCity, inputCity)
        );
      })

    setValue('')
  };

  const onChange = (event) => {
    setValue(event.target.value)
  }

 const onSubmit = (event) => {
    event.preventDefault()
    if (!value) {
      return window.confirm("Місто не введено")
    } else if (localStorage.getItem(value)) {
      setValue('')
      return window.confirm("Місто вже існує")
    } else {
      
      if (!localStorage.getItem(value)) {
        GetDayWeather(value);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className='FormActions'>
      <TextField
        type='text'
        id="fullWidth"
        variant="outlined"
        className='FormText'
        placeholder='Add city...'
        value={value}
        onChange = {onChange}
      />
      <Button
        variant="contained"
        type='submit'
      >
        Submit
      </Button>
    </form>
  );
};

export default AddCityForm;
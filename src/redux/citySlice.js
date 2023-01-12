import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const citySlice = createSlice({
  name: 'cities',
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      const city = {
        id: nanoid(),
        title: action.payload.title,
        deleted: false,
        weather: action.payload.weather,
      };
      state.push(city);
    },

    deleteCity: (state, action) => {
      return state.filter((city) => city.id !== action.payload.id);
    },

    addWeather: (state, action) => {
      state.map(city => {
        if (city.title === action.payload.title) {
          return ({
            ...city,
            weather: action.payload.weather
          })
        }
        else { return city }
      })
    },
  }
});

export const { addCity, deleteCity, addWeather } = citySlice.actions;
export default citySlice.reducer;

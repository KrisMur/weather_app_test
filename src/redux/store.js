import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './citySlice';

export default configureStore({
  reducer: {
    cities: cityReducer,
  },
});
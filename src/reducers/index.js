import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer
});


// reducer is a function that returns some amount of data

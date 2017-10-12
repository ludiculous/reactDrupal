import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux'
import {reducer as formReducer } from 'redux-form'
import eventReducer from './EventReducer'

export default combineReducers({
  //router: routerReducer,
  form:formReducer,
  Event:eventReducer
})
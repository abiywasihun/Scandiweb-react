import { combineReducers } from 'redux'
import {
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL,
    ADD_EVENT_FAIL,
    ADD_NEW_EVENT,
    ADD_TO_BASKET,
    UPDATE_EVENT_SUCCESS,
    UPDATE_EVENT_FAIL,
    DELETE_EVENT_SUCCESS,
    DELETE_FROM_BASKET,
    CHANGE_CURRENCY,
    CHANGE_BACKGROUND,
    DELETE_EVENT_FAIL,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
  } from "./actionTypes"
  
 
  const INIT_STATE = {
    basket: [],
    background:'homepage',
    currency: {
        label: 'USD',
        symbol: '$',
    }
  }
  
  const Cart = (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_EVENTS_SUCCESS:
        return {
          ...state,
          basket: action.payload,
        }
  
      case GET_EVENTS_FAIL:
        return {
          ...state,
          error: action.payload,
        }
  
      case ADD_NEW_EVENT:
        return {
          ...state,
          basket: [...state.basket, action.payload],
        }
      case ADD_TO_BASKET:
        return {
          ...state,
          basket: [...state.basket, action.payload],
        }
      case DELETE_FROM_BASKET:
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
          newBasket.splice(index, 1);
      } else {
          console.warn(
              `Cant remove product (id: ${action.payload.id}) as it is not in basket!`
          );
      }
      return {
          ...state,
          basket: newBasket
              // basket: state.basket.filter(item => item.id != action.id)
      }
      case CHANGE_BACKGROUND:
        return {
          ...state,
          background: action.payload,
        }
  
      case UPDATE_EVENT_SUCCESS:
        return {
          ...state,
          basket: state.basket.map(event =>
            event.id.toString() === action.payload.id.toString()
              ? { event, ...action.payload }
              : event
          ),
        }
  
      case CHANGE_CURRENCY:
        return {
          ...state,
          currency: action.payload,
        }
  
      case DELETE_EVENT_SUCCESS:
        return {
          ...state,
          events: state.events.filter(
            event => event.id.toString() !== action.payload.id.toString()
          ),
        }
  
      case DELETE_EVENT_FAIL:
        return {
          ...state,
          error: action.payload,
        }
  
      case GET_CATEGORIES_SUCCESS:
        return {
          ...state,
          categories: action.payload,
        }
  
      case GET_CATEGORIES_FAIL:
        return {
          ...state,
          error: action.payload,
        }
      default:
        return state
    }
  }
  
  const Calendar = (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_EVENTS_SUCCESS:
        return {
          ...state,
          basket: action.payload,
        }
  
      case GET_EVENTS_FAIL:
        return {
          ...state,
          error: action.payload,
        }
  
      case ADD_NEW_EVENT:
        return {
          ...state,
          basket: [...state.basket, action.payload],
        }
  
      case ADD_EVENT_FAIL:
        return {
          ...state,
          error: action.payload,
        }
  
      case UPDATE_EVENT_SUCCESS:
        return {
          ...state,
          basket: state.basket.map(event =>
            event.id.toString() === action.payload.id.toString()
              ? { event, ...action.payload }
              : event
          ),
        }
  
      case UPDATE_EVENT_FAIL:
        return {
          ...state,
          error: action.payload,
        }
  
      case DELETE_EVENT_SUCCESS:
        return {
          ...state,
          basket: state.basket.filter(
            event => event.id.toString() !== action.payload.id.toString()
          ),
        }
  
      case DELETE_EVENT_FAIL:
        return {
          ...state,
          error: action.payload,
        }
  
      case GET_CATEGORIES_SUCCESS:
        return {
          ...state,
          categories: action.payload,
        }
  
      case GET_CATEGORIES_FAIL:
        return {
          ...state,
          error: action.payload,
        }
      default:
        return state
    }
  }
  export default combineReducers({
    Calendar,
    Cart,
  }) 
  
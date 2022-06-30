import { combineReducers } from 'redux'
import {
    ADD_TO_BASKET,
    DELETE_FROM_BASKET,
    CHANGE_CURRENCY,
    CHANGE_BACKGROUND,
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
  
      case CHANGE_CURRENCY:
        return {
          ...state,
          currency: action.payload,
        }
      default:
        return state
    }
  }
  
  export default combineReducers({
    Cart,
  }) 
  
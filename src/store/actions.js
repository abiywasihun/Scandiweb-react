import {
    ADD_TO_BASKET,
    CHANGE_CURRENCY,
    CHANGE_BACKGROUND,
    DELETE_FROM_BASKET,
} from "./actionTypes"


export const addToBasket = event => ({
    type: ADD_TO_BASKET,
    payload: event,
})

export const changeCurrency = event => ({
    type: CHANGE_CURRENCY,
    payload: event,
})

export const changeBackground = event => ({
    type: CHANGE_BACKGROUND,
    payload: event,
})
export const removeFromBasket = event => ({
    type: DELETE_FROM_BASKET,
    payload: event,
})
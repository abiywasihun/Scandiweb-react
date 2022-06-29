import {
    GET_EVENTS,
    GET_EVENTS_FAIL,
    GET_EVENTS_SUCCESS,
    ADD_NEW_EVENT,
    ADD_TO_BASKET,
    ADD_EVENT_FAIL,
    CHANGE_CURRENCY,
    UPDATE_EVENT_SUCCESS,
    UPDATE_EVENT_FAIL,
    CHANGE_BACKGROUND,
    DELETE_FROM_BASKET,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAIL,
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
} from "./actionTypes"

export const getEvents = () => ({
    type: GET_EVENTS,
})

export const getEventsSuccess = events => ({
    type: GET_EVENTS_SUCCESS,
    payload: events,
})

export const getEventsFail = error => ({
    type: GET_EVENTS_FAIL,
    payload: error,
})

export const addNewEvent = event => ({
    type: ADD_NEW_EVENT,
    payload: event,
})

export const addToBasket = event => ({
    type: ADD_TO_BASKET,
    payload: event,
})

export const addEventFail = error => ({
    type: ADD_EVENT_FAIL,
    payload: error,
})

export const changeCurrency = event => ({
    type: CHANGE_CURRENCY,
    payload: event,
})

export const updateEventSuccess = event => ({
    type: UPDATE_EVENT_SUCCESS,
    payload: event,
})

export const updateEventFail = error => ({
    type: UPDATE_EVENT_FAIL,
    payload: error,
})

export const changeBackground = event => ({
    type: CHANGE_BACKGROUND,
    payload: event,
})
export const removeFromBasket = event => ({
    type: DELETE_FROM_BASKET,
    payload: event,
})

export const deleteEventSuccess = event => ({
    type: DELETE_EVENT_SUCCESS,
    payload: event,
})

export const deleteEventFail = error => ({
    type: DELETE_EVENT_FAIL,
    payload: error,
})

export const getCategories = () => ({
    type: GET_CATEGORIES,
})

export const getCategoriesSuccess = categories => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
})

export const getCategoriesFail = error => ({
    type: GET_CATEGORIES_FAIL,
    payload: error,
})
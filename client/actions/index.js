import { getActivityTypes, addNewActivityType } from '../apis/activityTypes'

export const SET_ACTIVITY_TYPE = 'SET_ACTIVITY_TYPE'
export const SET_ACTIVITY_TYPES_PENDING = 'SET_ACTIVITY_TYPES_PENDING'
export const SET_ACTIVITY_TYPES_SUCCESS = 'SET_ACTIVITY_TYPES_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

// simple action
export function setActivityTypesSuccess(activityType) {
  return {
    type: SET_ACTIVITY_TYPE,
    payload: activityType,
  }
}

// thunks - e.g. fetchactivitytype
export function fetchActivityType() {
  return (dispatch) => {
    return getActivityTypes().then((activityTypes) => {
      dispatch(setActivityTypesSuccess(activityTypes))
    })
  }
}

export function addActivityType(newActivityType) {
  return (dispatch) => {
    return addNewActivityType(newActivityType)
      .then((allActivityTypes) => {
        dispatch(setActivityTypesSuccess(allActivityTypes))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function setActivityTypesPending() {
  return {
    type: SET_ACTIVITY_TYPES_PENDING,
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

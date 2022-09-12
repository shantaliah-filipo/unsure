import { getActivityTypes } from '../apis/activityTypes'

export const SET_ACTIVITY_TYPE = 'SET_ACTIVITY_TYPE'

// simple action
export function setActivityType(activityType) {
  return {
    type: SET_ACTIVITY_TYPE,
    payload: activityType,
  }
}

// thunk - e.g. fetchactivitytype
export function fetchActivityType() {
  return (dispatch) => {
    return getActivityTypes().then((activityType) => {
      dispatch(setActivityType(activityType))
    })
  }
}

import { SET_ACTIVITY_TYPE } from '../actions'

const initialState = []

const activityTypeReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    // set_activity
    case SET_ACTIVITY_TYPE:
      return payload
    default:
      return state
  }
}

export default activityTypeReducer

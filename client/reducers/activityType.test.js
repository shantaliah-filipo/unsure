import activityTypeReducer from './activityType'
import { addActivityType, setActivityTypesSuccess } from '../actions'

// not working
describe('activityType reducer', () => {
  test('adds a new activity type', async () => {
    const action = setActivityTypesSuccess(['running', 'swimming'])
    const newState = activityTypeReducer([], action)
    // expect(newState).toHaveLength(2)
    expect(newState[0]).toBe('running')
  })
})

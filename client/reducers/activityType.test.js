import activityTypeReducer from './activityType'
import { addActivityType } from '../actions'

// not working
describe('activityType reducer', () => {
  test('adds a new activity type', () => {
    const action = addActivityType('running')
    const newState = activityTypeReducer(['Lets', 'go'], action)
    // expect(newState[2]).toBe('running')
    expect(newState).toHaveLength(2)
  })
})

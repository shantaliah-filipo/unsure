import { fetchActivityType, SET_ACTIVITY_TYPE } from './index'

import { getActivityTypes } from '../apis/activityTypes'

jest.mock('../apis/activityTypes')

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

// describe('fetchActivityType', () => {
//   it('dispatches setActivityType after api call', () => {
//     const thunkFn = fetchActivityType()
//     const fakeDispatch = jest.fn()
//     return thunkFn(fakeDispatch).then(() => {
//       const fakeDispatchFirstCallFirstArgument = fakeDispatch.mock.calls[0][0]
//       expect(fakeDispatchFirstCallFirstArgument.type).toBe(SET_ACTIVITY_TYPE)
//       return null
//     })
//   })
// })

describe('fetchActivity', () => {
  it('dispatches the right actions', () => {
    getActivityTypes.mockImplementation(() => {
      return Promise.resolve({
        activity: 'write a test',
      })
    })
    return fetchActivityType()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_ACTIVITY_TYPE,
        payload: {
          activity: 'write a test',
        },
      })
    })
  })
})

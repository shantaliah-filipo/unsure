// This is the apiClient
import request from 'superagent'

const rootUrl = '/api/v1'

export function getActivityTypes() {
  return request.get(rootUrl + '/act').then((res) => {
    return res.body.activityType
  })
}

export function addNewActivityType(newActivityType) {
  return request
    .post(rootUrl + '/act')
    .send({ newActivityType })
    .then((result) => {
      return result.body.activityType
    })
}

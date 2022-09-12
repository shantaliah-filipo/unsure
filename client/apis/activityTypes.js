import request from 'superagent'

const rootUrl = '/api/v1'

export function getActivityTypes() {
  return request.get(rootUrl + '/act').then((res) => {
    return res.body.activityType
  })
}

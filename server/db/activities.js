const connection = require('./connection')

function getActivityType(db = connection) {
  return db('activityType').select()
}

function getAllActivitiies(db = connection) {
  return db('activities')
    .join(
    'activityType',
    'activities.activityType_id',
    'activities.id'
  )
  .select()
}

module.exports = {
  getActivityType,
  getAllActivitiies,
}

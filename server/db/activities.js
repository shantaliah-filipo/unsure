const connection = require('./connection')

function getAllActivities(db = connection) {
  return db('activities')
    .join('activityType', 'activities.activityType_id', 'activities.id')
    .select()
}

module.exports = {
  getAllActivities,
}

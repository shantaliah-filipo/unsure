const connection = require('./connection')
// const activities = require('../../migrations/20220911052852_activities')

function getActivityType(db = connection) {
  return db('activities')
}

function getAllActivities(db = connection) {
  return db('activities')
    .join('activityType', 'activities.activityType_id', 'activities.id')
    .select()
}

module.exports = {
  getActivityType,
  getAllActivities,
}

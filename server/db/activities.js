const connection = require('./connection')

function getActivityType(db = connection) {
  return db('activityType').select()
}

console.log(getActivityType)

module.exports = {
  getActivityType,
}

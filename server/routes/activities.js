const express = require('express')

const db = require('../db/activities')

const router = express.Router()

router.get('/', (req, res) => {
  db.getActivityType()
    .then((results) => {
      res.json({ activityType: results })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const activityType = req.body.newActivityType
  console.log(activityType)
  // if (!activityType) {
  //   res.status(500).json({ message: 'New activity type is invalid' })
  //   return
  // }
  db.addActivityType(activityType)
    .then((results) => {
      res.json({ activityType: results })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router

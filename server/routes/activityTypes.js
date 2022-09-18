const express = require('express')

const db = require('../db/activityTypes')

const router = express.Router()

// GET /api/v1/act
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

// POST /api/v1/act
router.post('/', (req, res) => {
  const activityType = req.body.newActivityType
  console.log(activityType)
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

// GET /api/v1/all-activities
router.get('/all-activities', (req, res) => {
  db.getAllActivities()
    .then((results) => {
      console.log(results)
      // res.json({ activity: results })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router

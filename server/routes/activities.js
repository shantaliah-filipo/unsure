const express = require('express')

const db = require('../db/activities')

const router = express.Router()

router.get('/', (req, res) => {
  db.getActivityType()
    .then((results) => {
      res.json({ activities: results.map((activity) => activity.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
}


module.exports = router

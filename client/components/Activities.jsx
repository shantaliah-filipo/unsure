import React from 'react'
import { useSelector } from 'react-redux'
// import { getAllActivitiies } from '../../server/db/activities'

function Activities() {
  // const initialState = [
  //   {
  //     id: 1,
  //     name: 'Snorkelling',
  //     price: 25,
  //     activityType_id: 1,
  //   },
  // ]
  // console.log(initialState)

  const activities = useSelector((state) => state.activities)
  return <></>
}

export default Activities

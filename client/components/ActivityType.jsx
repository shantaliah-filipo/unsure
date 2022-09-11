import React, { useState } from 'react'
import { activities } from '../utils/activities'

function ActivityType() {
  const [checkedState, setCheckedState] = useState()

  return (
    <div>
      <h3>Select the Activity Type</h3>
      <input type="checkbox" id="water-activities" />
      Water-Based Activtities
      <>
        {activities.map(({ type }, index) => {
          return (
            <li key={index}>
              <input type="checkbox" />
              {type}
            </li>
          )
        })}
      </>
    </div>
  )
}

export default ActivityType

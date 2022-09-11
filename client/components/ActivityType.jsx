import React, { useState } from 'react'


function ActivityType() {
  const [checkedState, setCheckedState] = useState()


  return (
    <div>
      <h3>Select the Activity Type</h3>
      <input type="checkbox" id="water-activities" />
      Water-Based Activtities
    </div>
  )
}

export default ActivityType

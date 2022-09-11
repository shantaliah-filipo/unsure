import React, { useState } from 'react'
import { activities } from '../utils/activities'

function ActivityType() {
  const [checkedState, setCheckedState] = useState()

  return (
    <div>
      <h3>Which Activities Interest You?</h3>
      {/* <input type="checkbox" id="water-activities" />
      Water-Based Activtities */}
      <>
        <form>
          <ul className="activities-list">
            {/* <div className="inputActivities "> */}
            {activities.map(({ type }, index) => {
              return (
                <li key={index}>
                  <div className="main">
                    <div className="activities-list-item">
                      <div className="left-section">
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={name}
                          value={name}
                        />
                        {type}
                        {/* <div className="right-section"></div> */}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
            {/* </div> */}
          </ul>
        </form>
      </>
    </div>
  )
}

export default ActivityType

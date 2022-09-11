import React, { useState } from 'react'
import { activities } from '../utils/activities'

function ActivityType() {
  const [checkedState, setCheckedState] = useState()

  return (
    <div>
      <h3>Which Activities Interest You?</h3>
      <>
        <form className="card-body">
          <ul className="activities-list">
            {activities.map(({ type }, index) => {
              return (
                <li key={index}>
                  <div className="card-body">
                    <div className="main">
                      <div className="activities-list-item">
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={name}
                          value={name}
                        />
                        {type}
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

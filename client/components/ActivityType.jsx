import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchActivityType } from '../actions'
// import { activities } from '../utils/activities'
// useEffect
// dispatch a think - e.g. fetchActivities
// useSelector - looking for the activitiy types

function ActivityType() {
  const activityTypes = useSelector((state) => state.activityTypes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchActivityType())
  }, [])

  return (
    <div>
      <h3>Which Activities Interest You?</h3>
      <>
        <form className="card">
          <ul className="activities-list">
            {activityTypes.map(({ type }, index) => {
              return (
                <li key={index}>
                  <div className="card">
                    <div className="main">
                      <div className="activities-list-item">
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={type}
                          // value={name}
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

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchActivityType, addActivityType } from '../actions'
// import { addNewActivityType } from '../apis/activityTypes'
// import { activities } from '../utils/activities'
// useEffect
// dispatch a think - e.g. fetchActivities
// useSelector - looking for the activitiy types

function ActivityType() {
  const [newActivityType, setNewActivityType] = useState('')
  const activityTypes = useSelector((state) => state.activityTypes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchActivityType())
  }, [])

  function handleChange(e) {
    setNewActivityType(e.target.value)
  }

  function handleClick() {
    dispatch(addActivityType(newActivityType))
    setNewActivityType('')
  }

  return (
    <div>
      <h3>Which Activities Interest You?</h3>
      <>
        <div className="card">
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
        </div>
      </>
      <form>
        <input onChange={handleChange} value={newActivityType} />
        <button onClick={handleClick}>Add new activity type</button>
      </form>
    </div>
  )
}

export default ActivityType

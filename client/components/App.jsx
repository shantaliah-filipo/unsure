import React from 'react'
import DateRangeSelector from './DateRangeSelector'
import ActivityType from './ActivityType'

function App() {
  return (
    <>
      <div className="App">
        <h1>Plan your trip to Rarotonga!</h1>
        <DateRangeSelector />
        <ActivityType />
      </div>
    </>
  )
}

export default App

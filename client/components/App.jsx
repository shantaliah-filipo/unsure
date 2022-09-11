import React from 'react'
import DateRangeSelector from './DateRangeSelector'
import ActivityType from './ActivityType'
import Submit from './Submit'

function App() {
  return (
    <>
      <div className="App">
        <DateRangeSelector />
        <ActivityType />
        <Submit />
      </div>
    </>
  )
}

export default App

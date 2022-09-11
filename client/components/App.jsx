import React from 'react'
import Header from './Header'
import DateRangeSelector from './DateRangeSelector'
import ActivityType from './ActivityType'
import Submit from './Submit'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <DateRangeSelector />
        <ActivityType />
        <Submit />
      </div>
    </>
  )
}

export default App

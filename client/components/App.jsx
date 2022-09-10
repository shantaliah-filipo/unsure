import React from 'react'
import DateRangeSelector from './DateRangeSelector'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

function App() {
  return (
    <>
      <div className="App">
        <h1>Plan your trip to Rarotonga!</h1>

        <DateRangeSelector />
      </div>
    </>
  )
}

export default App

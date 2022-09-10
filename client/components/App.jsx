import React from 'react'
import DateRangeSelector from './DateRangeSelector'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

function App() {
  return (
    <>
      <div className="App">
        <h1>Fullstack Boilerplate - with Fruits!</h1>

        <DateRangeSelector />
      </div>
    </>
  )
}

export default App

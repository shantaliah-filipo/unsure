import React, { useEffect, useRef, useState } from 'react'
import { Calendar, DateRange } from 'react-date-range'
import format from 'date-fns/format'

import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

function DateRangeSelector() {
  // date date
  const [calendar, setCalendar] = useState('')

  // open and close the calendar on click
  const [open, setOpen] = useState(true)

  useEffect(() => {
    setCalendar(format(new Date(), 'dd/MM/yyyy'))
  }, [])

  // on date change, store date in state
  const handleSelect = (date) => {
    // console.log(date)
    console.log(format(date, 'dd/MM/yyyy'))
    setCalendar(format(date, 'dd/MM/yyyy'))
  }

  return (
    <div className="calendarWrap">
      {/* use the value from state */}
      <input value={calendar} readOnly className="inputBox" />

      {open && (
        <Calendar
          date={new Date()}
          onChange={handleSelect}
          className="calendarElement"
          onClick={() => setOpen((open) => !open)}
        />
      )}

      <h3>Hi</h3>
    </div>
  )
}

export default DateRangeSelector

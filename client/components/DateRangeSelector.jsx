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
  const [open, setOpen] = useState(false)

  const refOne = useRef(null)

  useEffect(() => {
    setCalendar(format(new Date(), 'dd/MM/yyyy'))
    document.addEventListener('keydown', hideOnEscape, true)
    document.addEventListener('click', hideOnClickOutside, true)
  }, [])

  const hideOnEscape = (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  // on date change, store date in state
  const handleSelect = (date) => {
    // console.log(date)
    console.log(format(date, 'dd/MM/yyyy'))
    setCalendar(format(date, 'dd/MM/yyyy'))
  }

  return (
    <div className="calendarWrap">
      {/* use the value from state */}
      <input
        value={calendar}
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />

      <div ref={refOne}>
        {open && (
          <Calendar
            date={new Date()}
            onChange={handleSelect}
            className="calendarElement"
          />
        )}
      </div>

      <h3>Hi</h3>
    </div>
  )
}

export default DateRangeSelector

import React, { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'

import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

function DateRangeSelector() {
  // date
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  // open and close the calendar on click
  const [open, setOpen] = useState(false)

  const refOne = useRef(null)

  useEffect(() => {
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

  return (
    <div className="calendarWrap">
      {/* use the value from state */}
      <input
        value={` ${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(
          range[0].endDate,
          'dd/MM/yyyy'
        )} `}
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />

      {/* need to sort out the divs (and I think CSS) */}
      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>

      <h3>Hi</h3>
    </div>
  )
}

export default DateRangeSelector

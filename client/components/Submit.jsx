import React from 'react'

function Submit() {
  function handleClick() {
    console.log('leshgoooo')
  }
  return (
    <div>
      <button className="button" onClick={handleClick}>
        Leshgoooo
      </button>
    </div>
  )
}

export default Submit

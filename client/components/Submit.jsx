import React, { useState } from 'react'

function Submit() {
  const [submit, setSubmit] = useState()

  function handleClick(e) {
    setSubmit(e.target.value)
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

// from Bor3d of Directors - randomiser
// function onSubmit(e) {
//   e.preventDefault()
//   const newId = () =>
//     Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36)
//   const action = addNewTask({ id: newId(), text: newTask })
//   dispatch(action)
// }

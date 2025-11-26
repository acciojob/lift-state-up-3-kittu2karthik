import React from 'react'

function ChildComponent1({onSelectedOption}) {
  return (
    <div>
      <h1>Child Component 1</h1>

      <button onClick={() => {onSelectedOption('Option 1')}}>Option 1</button>
    </div>
  )
}

export default ChildComponent1
import React from 'react'
import './Style.css';

const FunctionComp = () => {

  const lastcolor = {
    color: "blue"
  }

  return (
    <div className='box1'>
      <h1>This is created using Functional Component</h1>
      <p>This is done using external CSS</p>
      <p style={lastcolor}>This is done using inline CSS</p>

    </div>
  )
}

export default FunctionComp
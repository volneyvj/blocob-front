import React from 'react'

const Button = (props) => {
  return (
      <div style={{border: '1px solid black' , color: 'white'}}>
        {props.name}
      </div>
  )
}

export default  Button
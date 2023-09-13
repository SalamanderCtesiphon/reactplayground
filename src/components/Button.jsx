import React from 'react'

function Button({ text, color, fontSize}) {

  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  }

  Button.defaultProps = {
    text: "Click Me!",
    color: "blue",
    fonstSize: 12
  }

  return (
    <button style={buttonStyle}>{text}</button>
  )
}

export default Button
import React from 'react'

Button.defaultProps = {
  text: "Click Me!",
  color: "blue",
  fontSize: 12
}

function Button({ text, color, fontSize }) {

  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  }

  return (
    <button style={buttonStyle}>{text}</button>
  )
}

export default Button
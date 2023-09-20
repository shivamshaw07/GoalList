import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} type={props.submit}>{props.children}</button>
    </div>
  )
}

export default Button

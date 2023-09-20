import React from 'react'
import './CourseItem.css'
const CourseItem = (props) => {
    const deleted =()=>{
        props.deleteItem(props.id)
    }
  return (
   
      <li onClick={deleted}>  
        {props.children}
      </li>
    
  )
}

export default CourseItem

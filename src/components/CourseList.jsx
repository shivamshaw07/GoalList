
import React from 'react'
import CourseItem from './CourseItem'
import './CourseItem.css'
const CourseList = (props) => {

  return (
    <ul >
     {props.items.map(goal => (
        <CourseItem key={goal.id} id={goal.id} deleteItem={props.onDelete}>{goal.text} </CourseItem>
       
     ))}
    </ul>
  )
}

export default CourseList

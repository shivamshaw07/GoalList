import React, { useState } from 'react'
import Button from './Button'
import "./InputGoals.css"
const InputGoals = (props) => {
    const [text,setText] = useState("");
    const enteredGoalHandler=(event)=>{
       if(event.target.value != ""){
           setText(
            event.target.value
        )
       }
        
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        if(text !==""){
            props.enteredText(text);
        }
        
        
    }
  return (
    <div className='formContainer'>
    <form onSubmit={submitHandler} className='forms'>
      <label className='lables'>Enter your Goals</label>
      <input type="text" onChange={enteredGoalHandler}/>
      <Button type='submit'>Add goal</Button>
    </form></div>
  )
}

export default InputGoals

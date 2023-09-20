import { useState } from "react";
import "./App.css";
import InputGoals from "./components/InputGoals";
import CourseList from "./components/CourseList";


function App() {
  const [goals, setGoals] = useState([
    { text: "Add krlo kuch", id: Math.random() },
    { text: "Add krlo kuch bhi bhai", id: Math.random() },
  ]);
  const addGoals = (enteredText) => {
    setGoals((prevGoals) => {
      let tempGoals = [...prevGoals];
      tempGoals.unshift({ text: enteredText, id: Math.random() });
      return tempGoals;
    });
  };

const deleteHandler = (id) =>{
  setGoals(prevGoals => {
    let updateGoals = prevGoals.filter(goal => id !== goal.id);
    return updateGoals
  }
  
  )
}
let content = <p>Enter Your Goals</p>

if(goals.length> 0){
  content = 
 ( <CourseList items = {goals} onDelete = {deleteHandler}/>)
}
  return (
    <div className="App">
      <InputGoals enteredText={addGoals} />
      {content}
    </div>
  );
}

export default App;

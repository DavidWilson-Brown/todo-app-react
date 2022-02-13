// require the React JavaScript Library
import React from 'react';
// require the WeeklyTasks.css file
import './WeeklyTasks.css';

// create a function called WeeklyTasks
// this function will return
function WeeklyTasks(props) {
  const {title, clickDelete, index} = props;

  return (
    <div className="listItem">
      <li>{title}</li>
      <button onClick={() => {clickDelete(index)}} className="deleteItem">X</button>
    </div>
  )
}

export default WeeklyTasks;
import React from 'react';
import WeeklyTasks from './WeeklyTasks';
import '../src/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: "",
      todos: [],
      isClicked: false
    }
  }

  handleClick = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: ""
    })
  }


  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  deleteItem = (index) => {
    let copyOfTodos = this.state.todos;
    copyOfTodos.splice(index, 1);

    this.setState({ todos: [...copyOfTodos] });
  }


  // handleSubmit = (event) => {
  //   // this method must be entered or else data will disappear
  //   event.preventDefault()
  //   this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
  //   this.setState({inputValue: ""})
  // }


  // if written in curly braces, content is recognized as JavaScript
  render() {
    return (
      <div className="App">
        <h1>Weekly Tasks</h1>
        <div className="inputTodo">
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
          <button type="submit" onClick={this.handleClick} className="addItemBtn">Add Task</button>
        </div>
        <ol>
          {this.state.todos.map((todo, index) => {
          return <WeeklyTasks 
              key={index} 
              index={index} 
              title={todo} 
              clickDelete={this.deleteItem}
            />
          })}
        </ol>
      </div>
    );
  }  
}

export default App;
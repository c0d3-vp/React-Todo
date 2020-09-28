import React from 'react';
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo.css"
  
  const todoList = [
    {
      task: "Attend mentor training",
      id: 123,
      completed: false
    },
    {
      task: "Feed the pups",
      id: 1234,
      completed: false
    },
    {
      task: "Cook dinner",
      id: 12345,
      completed: false
    },
    {
      task: "Learn Redux",
      id: 123456,
      completed: false
    },
    {
      task: "Call the bank",
      id: 1234567,
      completed: false
    },
    {
      task: "Clean the house",
      id: 12345678,
      completed: false
    }
  ];

  class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        todoList // same as === todoList: todoList
      };
    }

    addItem = (e, item) => {
      e.preventDefault();
      const newItem = {
        task: item,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todoList: [...this.state.todoList, newItem]
      });
    };

    toggleItem = (itemId) => {
      console.log(itemId);
      // map over array
      // when we find the item we clicked, toggle the purchased field
      // otherwise return the item untouched
      this.setState({
        todoList: this.state.todoList.map((item) => {
          if (itemId === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      });
    };


  clearCompleted = (e) => {
    e.preventDefault();
    // if item is purchased (item.purchased is true) then filter out
    this.setState({
      todoList: this.state.todoList.filter((item) => !item.completed)
    });
  };
  
  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Virginia's Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todoList={this.state.todoList}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
        <br />
        <br />
        <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_2164,w_3845,x_0,y_259/v1554918405/shape/mentalfloss/94735-istock-863607936.jpg?itok=ZYfiTd6J" />
      </div>
      
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


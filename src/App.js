import React, { Component } from 'react';
import './style/index.scss';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], idx: 0};
    this.todoListinsert = this.todoListinsert.bind(this);
  }
  todoListinsert (e) {
    e.preventDefault();
    const newTodo = {
      id: this.state.idx,
      text: e.target[0].value
    };
    if(!newTodo.text) return
    this.setState((state) =>({
      todos: [...state.todos, newTodo],
      idx: state.idx + 1
    }));
  }
  render() { 
    return (
      <div className="content">
        <form onSubmit={this.todoListinsert}>
          <input/>
          <button>입력</button>  
        </form>
        {this.state.todos.map((todo) => (
          <div
          key={todo.id}
          className={todo.id}
          >
            {todo.text}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
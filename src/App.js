import React, { Component } from 'react';
import './style/core/index.scss'
import Header from './component/Header';
import Listitem from './component/Listitem';
class App extends Component {
  constructor() {
    super();
    const list = JSON.parse(localStorage.getItem('list'))
    this.state = { todos: [], idx: 0}
    if (list) this.state = { todos: list, idx: list.length};
    this.todoListinsert = this.todoListinsert.bind(this);
    this.listcheck = this.listcheck.bind(this);
  }
  todoListinsert (e) {
    e.preventDefault();
    const newTodo = {
      id: this.state.idx,
      text: e.target[0].value,
      check: false
    };
    if(!newTodo.text) return
    this.setState((state) =>({
      todos: [...state.todos, newTodo],
      idx: state.idx + 1,
      check: false
    }));
    const list = [...this.state.todos, newTodo]
    localStorage.setItem('list', JSON.stringify(list))
  }
  async listcheck (e) {
    const list = this.state.todos[e]
    if (list.check === false) {
      list.check = true
    }
    else {
      list.check = false
    }
    localStorage.setItem('list', JSON.stringify(this.state.todos))
    this.setState(() => ({
      ...JSON.parse(localStorage.getItem('list'))
    }));
  }
  render() { 
    return (
      <div className="content">
        <Listitem/>
        <div>
        <Header
          todoListinsert={this.todoListinsert}
          />
        </div>
        <ul className='list'>
          {this.state.todos.map((todo) => (
            <li
            key={todo.id}
            onClick={() => this.listcheck(todo.id)}
            >
              {todo.check && (
                <div className='data data--check'><p>{todo.text}</p><span>o</span></div>
              )}
              {todo.check || (
                <div className='data'><p>{todo.text}</p><span>x</span></div>
              )} 
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
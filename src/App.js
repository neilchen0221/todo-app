import React, { Component } from 'react';
import TodoInput from './Components/TodoInput';
import uuid from 'uuid';
import TodoList from './Components/TodoList';
import TodoFilter from './Components/TodoFilter';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      todoList: [
        {
          id: uuid.v4(),
          content: 'Item 1',
          complete: false
        },
        {
          id: uuid.v4(),
          content: 'Item 2',
          complete: false
        },
        {
          id: uuid.v4(),
          content: 'Item 3',
          complete: false
        }
      ],
      todo: {
        content: '',
        complete: false
      },
      inputError: false,
      filterValue: 'all'
    };
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ ...this.state, todo: { ...this.state.todo, content: e.target.value } });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { todoList, todo } = this.state;
    if (!todo.content) {
      this.setState({ inputError: true });
    } else {
      todo.id = uuid.v4();
      this.setState({ todoList: [...todoList, todo], todo: { content: '', complete: false }, inputError: false });
    }
  };

  handleDelete = id => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter(todo => todo.id !== id);
    this.setState({ todoList: newTodoList });
  };

  handleToggleComplete = id => {
    const { todoList } = this.state;
    const newTodoList = todoList.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.setState({ todoList: newTodoList });
  };

  handleFilterChange = e => {
    this.setState({ filterValue: e.target.value });
  };

  getFilteredTodoList = () => {
    const { todoList, filterValue } = this.state;
    if (filterValue === 'completed') {
      return todoList.filter(todo => todo.complete === true);
    } else if (filterValue === 'uncompleted') {
      return todoList.filter(todo => todo.complete !== true);
    } else {
      return todoList;
    }
  };

  render() {
    const { todo, inputError, filterValue } = this.state;
    return (
      <React.Fragment>
        <h1 className="title">ToDo App</h1>
        <div className="container">
          <TodoInput
            todo={todo}
            inputError={inputError}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
          <TodoFilter filterValue={filterValue} handleFilterChange={this.handleFilterChange} />
          <TodoList
            todoList={this.getFilteredTodoList()}
            handleDelete={this.handleDelete}
            handleToggleComplete={this.handleToggleComplete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

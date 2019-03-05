import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

export default class TodoInput extends Component {
  render() {
    const { todo, handleInputChange, handleSubmit, inputError } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="todo-header">
          <div className="todo-header__input">
            <TextField
              label="New Todo Item"
              placeholder="Enter what to do"
              fullWidth
              margin="normal"
              variant="outlined"
              value={todo.content}
              onChange={handleInputChange}
              error={inputError}
              helperText={inputError ? 'Please enter what to do' : ''}
            />
          </div>
          <div className="todo-header__submit">
            <Button variant="contained" color="primary" size="large" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

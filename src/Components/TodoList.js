import React, { Component } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, Check } from '@material-ui/icons';

export default class TodoList extends Component {
  render() {
    const { todoList, handleDelete, handleToggleComplete } = this.props;
    return (
      <div className="todo-list">
        <List>
          {todoList.map(todo => (
            <ListItem key={todo.id} button divider>
              <ListItemText
                primary={todo.content}
                secondary={todo.complete ? 'completed' : ''}
                primaryTypographyProps={
                  todo.complete ? { color: 'primary', variant: 'h5' } : { color: 'default', variant: 'h5' }
                }
                secondaryTypographyProps={todo.complete ? { color: 'primary' } : { color: 'default' }}
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Complete"
                  onClick={handleToggleComplete.bind(this, todo.id)}
                  color={todo.complete ? 'primary' : 'default'}
                >
                  <Check />
                </IconButton>
                <IconButton aria-label="Delete" onClick={handleDelete.bind(this, todo.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

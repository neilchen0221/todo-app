import React, { Component } from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export default class TodoFilter extends Component {
  render() {
    const { filterValue, handleFilterChange } = this.props;
    return (
      <div className="todo-filter">
        <RadioGroup
          aria-label="todoFilter"
          name="todoFilter"
          row={true}
          value={filterValue}
          onChange={handleFilterChange}
          classes={{ root: 'todo-filter__radio-group' }}
        >
          <FormControlLabel value="completed" control={<Radio />} label="Completed" />
          <FormControlLabel value="uncompleted" control={<Radio />} label="Uncompleted" />
          <FormControlLabel value="all" control={<Radio />} label="All" />
        </RadioGroup>
      </div>
    );
  }
}

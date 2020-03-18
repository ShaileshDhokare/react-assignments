import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center py-2">
         <div className="form-group"style={this.getStyle()}>
            <div className="form-check">
               <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} className="form-check-input" /> {' '}
               <span className="h4">{ title }</span>
            </div>
         </div>
         <span className="badge badge-danger badge-pill" onClick={this.props.delTodo.bind(this, id)}>X</span>
      </li>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default TodoItem;
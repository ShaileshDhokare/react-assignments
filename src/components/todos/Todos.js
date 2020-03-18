import React, { Component } from "react";
// import './todos.css';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";


export class Todos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
            {
               id: 1,
               title: 'gym',
               completed: false
            },
            {
               id: 2,
               title: 'cricket',
               completed: false
            }
         ]
		};
	}
	markComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	// Delete Todo
	delTodo = id => {
      this.setState({
         todos: [...this.state.todos.filter(todo => todo.id !== id)]
      });
	};

	// Add Todo
	addTodo = title => {
      const newTodo = {
         id: this.state.todos.length + 1,
         title: title,
         completed: false
      }
      this.setState({ todos: [...this.state.todos, newTodo] });
	};
	render() {
		return (
			<div className="container p-4">
				<AddTodo addTodo={this.addTodo} />
				<TodoList
					todos={this.state.todos}
					markComplete={this.markComplete}
					delTodo={this.delTodo}
				/>
			</div>
		);
	}
}

export default Todos;

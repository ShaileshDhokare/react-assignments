import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
	state = {
		title: ""
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: "" });
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: "flex" }}>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
                  name="title"
                  placeholder="Add Todo ..."
                  value={this.state.title}
                  onChange={this.onChange}
					/>
					<div className="input-group-append">
						<button
							className="btn btn-secondary"
							type="submit"
						>
							Add
						</button>
					</div>
				</div>
			</form>
		);
	}
}

// PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};

export default AddTodo;

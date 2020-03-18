import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUsers, addUser } from "../../actions/userActions";
import User from "./User";
import UserProfile from "./UserProfile";
import Loading from "../layout/Loading";

class UserListing extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: ""
		};
	}

	componentDidMount() {
		this.props.getUsers();
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addUser = e => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email
		};
		this.props.addUser(newUser);
		this.setState({ name: "", email: "" });
		toast.success("New User Added!", {
			position: toast.POSITION.TOP_RIGHT
		});
	};

	render() {
		const { users, userDetails, loading } = this.props.user;

		let userList = "";
		if (loading) {
			userList = <Loading />;
		} else if (users.length === 0) {
			userList = (
				<div className="text-center mt-4">
					<p>No Users Available.</p>
				</div>
			);
		} else {
			userList = users.map(user => <User key={user.id} userData={user} />);
		}

		let userProfile = "";
		if (Object.keys(userDetails).length !== 0) {
			userProfile = <UserProfile userDetails={userDetails} />;
		}
		const { name, email } = this.state;
		return (
			<div className="container my-3">
				<ToastContainer autoClose={8000} />
				<div className="row">
					<div className="col-md-6">
						<div className="card my-2">
							<div className="card-header">
								<h5 className="card-title">Add New User</h5>
							</div>
							<div className="card-body">
								<form onSubmit={this.addUser}>
									<div className="form-group">
										<input
											type="text"
											name="name"
											autoFocus
											className="form-control user-name"
											placeholder="Enter name"
											value={name}
											onChange={this.onChange}
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											name="email"
											className="form-control user-email"
											placeholder="Enter Email"
											value={email}
											onChange={this.onChange}
											required
										/>
									</div>
									<button className="btn btn-primary add-user" type="submit">
										Add User
									</button>
								</form>
							</div>
						</div>
						{userProfile}
					</div>

					<div className="col-md-6">
						<h3 className="display-4 mb-3">Users List</h3>
						{userList}
					</div>
				</div>
			</div>
		);
	}
}

UserListing.propTypes = {
	getUsers: PropTypes.func.isRequired,
	addUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	user: state.user,
	userDetails: state.userDetails
});

export default connect(mapStateToProps, { getUsers, addUser })(UserListing);

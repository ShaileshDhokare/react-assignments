import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { deleteUser, showUserDetails } from "../../actions/userActions";

const User = ({ userData, showUserDetails, deleteUser }) => {
	const showUserProfile = () => {
		showUserDetails(userData.id);
	};
	const removeUser = () => {
		deleteUser(userData.id);
		toast.error("User has been removed!", {
			position: toast.POSITION.TOP_RIGHT
		});
	};
	return (
		<div className="card my-2">
			<div className="card-header">
				<h5 className="card-title">
					{userData.id}. {userData.name}
					<button
						className="btn btn-sm btn-secondary float-right"
						onClick={showUserProfile}
					>
						View Details
					</button>
				</h5>
			</div>
			<div className="card-body py-2">
				<p className="mb-1">{userData.email}</p>
			</div>
			<div className="card-footer">
				<button className="btn btn-sm btn-danger remove-user" onClick={removeUser}>
					Delete
				</button>
			</div>
		</div>
	);
};

// User.propTypes = {
// 	deleteUser: PropTypes.func.isRequired,
// 	showUserDetails: PropTypes.func.isRequired,
// 	user: PropTypes.object.isRequired,
// 	userData: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
	user: state.user
});
export default connect(mapStateToProps, { deleteUser, showUserDetails })(User);

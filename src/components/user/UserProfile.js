import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({userDetails}) => {
    return (
        <div className="card my-4">
            <div className="card-header">
            <h5 className="card-title">
                User Profile
            </h5>
            </div>
            <div className="card-body">
                <p><b>Name:</b> {userDetails.name}</p>
                <p><b>UserName:</b> {userDetails.username}</p>
                <p><b>Email:</b> {userDetails.email}</p>
                <p><b>Phone:</b> {userDetails.phone}</p>
                <p><b>Website:</b> {userDetails.website}</p>
                <p><b>Company:</b> {userDetails.company.name}</p>
            </div>    
        </div>
    )
}

// UserProfile.propTypes = {
//     userDetails: PropTypes.object.isRequired
// };

export default UserProfile;

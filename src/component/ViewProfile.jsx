import React from 'react';
import styles from './Profile.css';
import Profile from './Profile';
import EditProfile from './EditProfile';
import {Link} from 'react-router-dom';

const ViewProfile = ({profileData}) => {

    return(
        <div>
            <h2>Profile</h2>
            <p><span class="headers">Name:</span> {profileData.name}</p>
            <p><span class="headers">Email:</span> {profileData.email}</p>
            <p><span class="headers">Contact number:</span> {profileData.contactNumber}</p>
            <p><span class="headers">Profile Photo: </span></p><img id="image" src={profileData.profileImage} alt='' /><br></br>

            <Link to="/EditProfile">
                <button>Edit</button>
            </Link>
        </div>
    )
}

export default ViewProfile;
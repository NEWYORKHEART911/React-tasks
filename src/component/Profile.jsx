import React, {Component} from 'react';
import styles from './Profile.css';

class Profile extends Component {

    state = {
        name: 'Name',
        email: 'email@example.com',
        contact: '1234567890',
        profileImage: '',
        isEditing: false,
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleImageChange = (event) => {
        const file = event.target.files[0];
        this.setState({profileImage: URL.createObjectURL(file)})
    }

    toggleEditMode = () => {
        this.setState((prevState) => ({ isEditing: !prevState.isEditing}));
    }

    handleSave = () => {
        this.setState({isEditing:false});
    }

    render() {

        const { name, email, contact, profileImage, isEditing } = this.state;

        return (
            <div>
                <h2>Profile</h2>

                {isEditing ? (
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={name} onChange={this.handleInputChange} /><br></br>
                        <label>Email: </label>
                        <input type="text" name="email" value={email} onChange={this.handleInputChange} /><br></br>
                        <label>Contact: </label>
                        <input type="text" name="contact" value={contact} onChange={this.handleInputChange} /><br></br>

                        <input type="file" name="profileImage" onChange={this.handleImageChange} /><br></br>
                        <button class="savebtn" onClick={this.handleSave}>Save</button>
                    </div>
                ) : (
                    <div>
                        <p><span class="headers">Name:</span> {name}</p>
                        <p><span class="headers">Email:</span> {email}</p>
                        <p><span class="headers">Contact number:</span> {contact}</p>
                        <p><span class="headers">Profile Photo: </span></p><img id="image" src={profileImage} alt='' /><br></br>
                    </div>
                )}

                <button class="profbtn" onClick={this.toggleEditMode}>
                    {isEditing ? 'Cancel' : 'EditProfile'}
                </button>
            </div>
        )
    }
}

export default Profile;
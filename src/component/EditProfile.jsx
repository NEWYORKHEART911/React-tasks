import React, {useState,useEffect} from 'react';
import Profile from './Profile';
import ViewProfile from './ViewProfile';
import {useHistory} from 'react-router-dom';

const EditProfile = ({profileData, setProfileData}) => {

    const [formData, setFormData] = useState(profileData);

    //get access to the history object
    const history = useHistory();

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSaveClick = () => {
        setProfileData(formData);
        history.push('/Profile');
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if(file) {
            setFormData({
                ...formData,
                profileImage: URL.createObjectURL(file),
            });
        }
    }

    return(
        <div>
            <form>
                <div>
                    Name: 
                    <input type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                    /><br></br>
                    Email: 
                    <input type="text"
                        value={formData.email}
                        onChange={handleInputChange}
                    /><br></br>
                    Contact Number: 
                    <input type="text"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                    /><br></br>
                </div>
            </form>
            <input type="file" accept="image/*" onChange={handleImageChange} /><br></br>
            <button onClick={handleSaveClick}>Save</button><br></br>
        </div>
    )
}

export default EditProfile;
import React, {useState} from 'react';
import styles from './FormValidation.css';

function FormValidation() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: 'male',
        hobbies: []
    })
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [hobbiesError, setHobbiesError] = useState('');

    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        
        if(inputName === 'name') {
            setNameError('');
        } else if(inputName === 'email') {
            setEmailError('');
        } else if(inputName === 'age') {
            setAgeError('');
        }

        setFormData({
            ...formData,
            [inputName]: inputValue,
        })
        console.log(formData);
    }

    const handleHobbyChange = (event) => {
        const {value, checked} = event.target;
        setHobbiesError('');
        const updatedHobbies = [...formData.hobbies];

        if(checked) {
            updatedHobbies.push(value);
        } else {
            const index = updatedHobbies.indexOf(value);
            if(index !== -1) {
                updatedHobbies.splice(index, 1);
            }
        }

        setFormData({
            ...formData,
            hobbies: updatedHobbies,
        })
    }

    const handleSubmit = (event) => {
        console.log('submit');
        event.preventDefault();

        let errorCount = 0;

        if(formData.name.trim() === '') {
            setNameError('Please enter a name.');
            alert('Please enter a name.');
            errorCount++;
        }
        if(formData.email.trim() === '') {
            setEmailError('Please enter an email.');
            alert('Please enter an email.');
            errorCount++;
        }
        if(formData.age.trim() === '' || isNaN(formData.age)) {
            setAgeError('Please enter a valid age.');
            alert('Please enter a valid age.');
            errorCount++;
        }
        if(formData.hobbies.length === 0) {
            setHobbiesError('Please select at least one hobby.');
            alert('Please select at least one hobby.');
            errorCount++;
        }

        if(errorCount > 0) {
            return;
        }

        console.log(formData.name);
        console.log(formData.email);
        console.log(formData.age);
        console.log(formData.hobbies);
        alert('Form successfully submitted with values:\nName: ' + formData.name
            + '\nEmail: ' + formData.email + '\nAge: ' + formData.age + '\nHobbies: '
            + formData.hobbies);
        setFormData({
            name: '',
            email: '',
            age: '',
            gender: 'male',
            hobbies: []
        })
    }

    return(
        <div>
            <h2>Form Validation Task</h2>
            <form onSubmit={handleSubmit} class="form">
                <div>
                    <label class="formLabel">Name: </label><br></br>
                    <input type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <div class="error">{nameError}</div>
                </div>
                <div>
                    <label class="formLabel">Email: </label><br></br>
                    <input type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <div class="error">{emailError}</div>
                </div>
                <div>
                    <label class="formLabel">Age: </label><br></br>
                    <input type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                    />
                    <div class="error">{ageError}</div>
                </div>
                <div>
                    <label class="formLabel">Gender: </label><br></br>
                    <select name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="alien">Alien</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label class="formLabel">Hobbies: </label><br></br>
                    <label>
                        <input type="checkbox"
                            value="reading"
                            checked={formData.hobbies.includes('reading')}
                            onChange={handleHobbyChange}
                        />{' '}
                        Reading
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox"
                            value="sports"
                            checked={formData.hobbies.includes('sports')}
                            onChange={handleHobbyChange}
                        />{' '}
                        Sports
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox"
                            value="cooking"
                            checked={formData.hobbies.includes('cooking')}
                            onChange={handleHobbyChange}
                        />{' '}
                        Cooking
                    </label>
                </div>
                <div class="error">{hobbiesError}</div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormValidation;
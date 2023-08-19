// src/components/PersonalInformation.js
import React, { useState } from 'react';
import '../styles/PersonalInformation.css'; // Import the CSS file for styling

import { Link } from 'react-router-dom';

const PersonalInformation = ({ onNext , surveyForm }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    gender: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleNext = () => {
    // Save the user's responses and move to the next page
    // For this example, we'll just log the data to the console
    // surveyForm.personalInfo = personalInfo;
    // console.log('At Personal Information Page:', personalInfo);

    // onNext();
  };

  return (
    <div className="personal-info-container">
      <h2>Personal Information</h2>
      <label>
        First Name:
        <input type="text" name="firstName" value={personalInfo.firstName} onChange={handleChange} />
      </label>
      <label>
        Middle Name:
        <input type="text" name="middleName" value={personalInfo.middleName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={personalInfo.lastName} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={personalInfo.age} onChange={handleChange} />
      </label>
      <label>
        Gender:
        <select name="gender" value={personalInfo.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Country of Residence:
        <select name="country" value={personalInfo.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="ind">India</option>
          {/* Add more country options as needed */}
        </select>
      </label>
      <Link to='/planning' state={{personalInfo}}  className="next-button" ><button  onClick={handleNext} >Next</button></Link>
    </div>
  );
};

export default PersonalInformation;

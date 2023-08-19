// src/components/AdditionalComments.js
import React, { useState } from 'react';
import '../styles/AdditionalComments.css';

import { Link, useLocation } from 'react-router-dom';

// const axios = require('axios');
import axios from 'axios';
const AdditionalComments = ({ onPrevious ,surveyForm}) => {
  const [additionalComments, setAdditionalComments] = useState('');

  const handleChange = (e) => {
    setAdditionalComments(e.target.value);
  };
  const location = useLocation();
  const {personalInfo,travelPlanning,travelHabits,travelDestinations}  =location.state||{};
  const handleSubmit = async() => {
      try {
      const response = await axios.post('http://localhost:5000/', {personalInfo,travelPlanning,travelHabits,travelDestinations,additionalComments});

      if (response.status === 201) {
      console.log("Personal Information", personalInfo);
      console.log("Travel Planning", travelPlanning);
      console.log("Travel Habits", travelHabits);
      console.log("Travel Destinations", travelDestinations);
      console.log("Additional Comments", additionalComments);

      alert("Your data has been submitted successfully");
      } else {
        console.error('Error:', response.status);
         
      }
    } catch (error) {
        console.error('Error:', error);
         alert("Your data has been rejected");
    }
    
  };

  return (
    <div>
      <h2>Additional Comments</h2>
      <label>
        Do you have any additional comments or suggestions regarding our travel services?
        <textarea
          name="additionalComments"
          value={additionalComments}
          onChange={handleChange}
          rows={5}
          cols={40}
        />
      </label>
      {/* <button onClick={onPrevious}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
       */}
      <Link to="/destinations"><button>Previous</button></Link>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AdditionalComments;

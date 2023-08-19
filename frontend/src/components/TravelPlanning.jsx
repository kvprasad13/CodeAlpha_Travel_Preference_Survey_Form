// src/components/TravelPlanning.js
import React, { useState} from 'react';
import { Link  } from 'react-router-dom';
import '../styles/TravelPlanning.css';
import { useLocation } from 'react-router-dom';


const TravelPlanning = ({ onPrevious, onSubmit,surveyForm }) => {
  const [travelPlanning, setTravelPlanning] = useState({
    planningMethods: [],
    ecoFriendlyImportance: '',
  });

  const planningMethods = ['Online Travel Agencies', 'Travel Websites', 'Travel Agencies', 'DIY (Do It Yourself)'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedMethods = checked
        ? [...travelPlanning.planningMethods, value]
        : travelPlanning.planningMethods.filter((method) => method !== value);
      setTravelPlanning((prevPlanning) => ({ ...prevPlanning, planningMethods: updatedMethods }));
    } else {
      setTravelPlanning((prevPlanning) => ({ ...prevPlanning, [name]: value }));
    }
  };
  const location = useLocation();
  const personalInfo = location.state || {};

  const handleNext = () => {
    // Save the user's responses and submit the data
    // For this example, we'll just log the data to the console
    // console.log("At Travel Planning Page : Personal Information is", location.state || {});
    // console.log('Travel Planning:', travelPlanning);
    // localStorage.setItem('TravelPlanning', JSON.stringify(travelPlanning));
   
    // onSubmit();
  };

  return (
    <div className='travel-planning-container'>
      <h2 className='travel-planning-title'>Travel Planning</h2>
      <div>
        <p>How do you typically plan your trips? (Select all that apply)</p>
        {planningMethods.map((method) => (
          <label key={method}>
            <input
              type="checkbox"
              name="planningMethods"
              value={method}
              checked={travelPlanning.planningMethods.includes(method)}
              onChange={handleChange}
            />
            {method}
          </label>
        ))}
      </div>
      <label>
        How important is sustainable and eco-friendly tourism to you?
        <input
          type="text"
          name="ecoFriendlyImportance"
          value={travelPlanning.ecoFriendlyImportance}
          onChange={handleChange}
        />
      </label>
      {/* <button onClick={onPrevious}>Previous</button> */}
       <Link to='/' className='previous-button-link'><button>Previous</button> </Link>
      <Link to='/habits' state = {{personalInfo,travelPlanning}} className='next-button-link'><button  onClick={handleNext} >Next</button> </Link>
     
      {/* <button onClick={handleSubmit}>Submit</button> */}
        </div>
  );
};

export default TravelPlanning;






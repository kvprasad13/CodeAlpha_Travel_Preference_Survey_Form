// src/components/TravelDestinations.js
import React, { useState } from 'react';
import '../styles/TravelDestinations.css';
import { Link, useLocation } from 'react-router-dom';


const TravelDestinations = ({ onNext, onPrevious,surveyForm }) => {
  const [travelDestinations, setTravelDestinations] = useState({
    preferredDestinations: [],
    mostInterestedDestination: '',
  });

  const destinations = ['Beach', 'Mountains', 'Cities', 'Historical Sites', 'Nature', 'Adventure'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedDestinations = checked
        ? [...travelDestinations.preferredDestinations, value]
        : travelDestinations.preferredDestinations.filter((destination) => destination !== value);
      setTravelDestinations((prevDestinations) => ({
        ...prevDestinations,
        preferredDestinations: updatedDestinations,
      }));
    } else {
      setTravelDestinations((prevDestinations) => ({ ...prevDestinations, [name]: value }));
    }
  };

  const location = useLocation();
  const { personalInfo, travelPlanning, travelHabits } = location.state || {};
  const handleNext = () => {
    // Save the user's responses and move to the next page
    // For this example, we'll just log the data to the console
    // surveyForm = {...surveyForm , travelDestinations};
    // console.log('Travel Destinations:', travelDestinations);
    // onNext();
  };

  return (
    <div>
      <h2>Travel Destinations</h2>
      <div>
        <p>What type of destinations do you prefer? (Select all that apply)</p>
        {destinations.map((destination) => (
          <label key={destination}>
            <input
              type="checkbox"
              name="preferredDestinations"
              value={destination}
              checked={travelDestinations.preferredDestinations.includes(destination)}
              onChange={handleChange}
            />
            {destination}
          </label>
        ))}
      </div>
      <label>
        Which destination interests you the most?
        <input
          type="text"
          name="mostInterestedDestination"
          value={travelDestinations.mostInterestedDestination}
          onChange={handleChange}
        />
      </label>
      {/* <button onClick={onPrevious}>Previous</button>
      <button onClick={handleNext}>Next</button> */}
     <Link to='/habits' onClick={onPrevious}> <button >Previous</button></Link>  
      <Link to='/comments' state={{personalInfo,travelPlanning,travelHabits,travelDestinations}} onClick={handleNext}><button >Next</button></Link> 

    </div>
  );
};

export default TravelDestinations;

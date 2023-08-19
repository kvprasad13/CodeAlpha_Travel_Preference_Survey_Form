// src/components/TravelHabits.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/TravelHabits.css';
const TravelHabits = ({ onNext, onPrevious,surveyForm }) => {
  const [travelHabits, setTravelHabits] = useState({
    leisureFrequency: '',
    preferredTravelTypes: [],
  });

  const leisureFrequencies = ['0-1', '2-4', '5-8', '9+'];
  const travelTypes = ['Solo', 'Family', 'Friends', 'Group', 'Romantic'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedTypes = checked
        ? [...travelHabits.preferredTravelTypes, value]
        : travelHabits.preferredTravelTypes.filter((type) => type !== value);
      setTravelHabits((prevHabits) => ({ ...prevHabits, preferredTravelTypes: updatedTypes }));
    } else {
      setTravelHabits((prevHabits) => ({ ...prevHabits, [name]: value }));
    }
  };
  const location = useLocation();

  const { personalInfo, travelPlanning } = location.state||{} ;
  const handleNext = () => {
    // Save the user's responses and move to the next page
    // For this example, we'll just log the data to the console
    // console.log(personalInfo, travelPlanning);
    // console.log('Travel Habits:', travelHabits);
    // surveyForm.travelHabits = travelHabits;
    // onNext();
  };


  return (
   <div className="travel-habits-container">
  <h2 className="travel-habits-header">Travel Habits</h2>
  <label className="travel-habits-label">
    How often do you travel for leisure each year?
    <select className="travel-habits-select" name="leisureFrequency" value={travelHabits.leisureFrequency} onChange={handleChange}>
          {/* ...options */}
           <option value="">Select an option</option>
          {leisureFrequencies.map((frequency) => (
            <option key={frequency} value={frequency}>
              {frequency}
                
            </option>
        ))}
    </select>
  </label>
  <div className="travel-habits-checkbox-group">
    <p>What type of travel do you prefer? (Select all that apply)</p>
        {/* ...checkboxes */}
          {travelTypes.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              name="preferredTravelTypes"
              value={type}
              checked={travelHabits.preferredTravelTypes.includes(type)}
              onChange={handleChange}
            />
            {type}
          </label>
        ))}
      </div>

     <Link to='/planning'>   <button className="travel-habits-button" >Previous</button></Link>   

 <Link to='/destinations' state={{personalInfo,travelPlanning,travelHabits}}>    <button className="travel-habits-button"  onClick={handleNext} >Next</button></Link>   
</div>

  );
};

export default TravelHabits;







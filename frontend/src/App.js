import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch ,Routes} from 'react-router-dom';

import PersonalInformation from './components/PersonalInformation.jsx';
import TravelHabits from './components/TravelHabits.jsx';
import TravelDestinations from './components/TravelDestinations.jsx';
import TravelPlanning from './components/TravelPlanning.jsx';
import AdditionalComments from './components/AdditionalComments.jsx';

const App = () => {


  return (


    <Router>

      <Routes>
        {/* <Route path='/personal-information' element={<PersonalInformation />}></Route> */}
        <Route path="/habits" element={<TravelHabits />}>

        </Route>
        <Route path="/destinations" element={<TravelDestinations />}>

        </Route>
        <Route path="/planning" element={<TravelPlanning />}>

        </Route>
        <Route path="/comments" element={<AdditionalComments />}>

        </Route>
        <Route path='/' element={<PersonalInformation />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

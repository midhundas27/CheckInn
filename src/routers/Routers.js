import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Checkinnlaunch from './../pages/checkinnlaunch';
import Checkinnhome from './../pages/checkinnhome';
import Checkinnsignin from './../pages/checkinnsignin';
import Checkinnstudenthome from './../pages/checkinnstudenthome';
import Checkinnstudentmesscut from '../pages/checkinnstudentmesscut';
import Checkinnstudentmessbill from '../pages/checkinnstudentmessbill';

/*import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'*/


const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/checkinnlaunch'/>} />
        <Route path='/checkinnlaunch' element={<Checkinnlaunch/>} />
        <Route path='/checkinnhome' element={<Checkinnhome/>} />

        <Route path='/checkinnsignin' element={<Checkinnsignin/>} />
        <Route path='/checkinnstudenthome' element={<Checkinnstudenthome/>} />
        <Route path='/checkinnstudentmesscut' element={<Checkinnstudentmesscut/>} />
        <Route path='/checkinnstudentmessbill' element={<Checkinnstudentmessbill/>} />
        {/* <Route path='/settings' element={<Settings/>} /> */}

      </Routes>
    </div>
  )
}

export default Routers
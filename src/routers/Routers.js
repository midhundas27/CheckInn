import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Checkinnlaunch from '../pages/launch';
import Checkinnhome from '../pages/home';
import Checkinnsignin from '../pages/signin';
import Checkinnstudenthome from '../pages/stdnthome';
import Checkinnstudentmesscut from '../pages/stdntmesscut';
import Checkinnstudentmessbill from '../pages/stdntmessbill';
import Checkinnstudentmessmenu from '../pages/stdntmessmenu';
import Stdntconnect from '../pages/stdntconnect';
import Stdntcnctmsg from '../pages/stdntcnctmsg';
import Stdntcnctcall from '../pages/stdntcnctcall';
import Stdntnotify from '../pages/stdntnotify';
import Stdntbillpay from '../pages/stdntbillpay';
import Stdntpayhis from '../pages/stdntpayhis';
import Stdntreg from '../pages/stdntreg';

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
        <Route path='/checkinnstudentmessmenu' element={<Checkinnstudentmessmenu/>} />
        <Route path='/stdntconnect' element={<Stdntconnect/>} />
        <Route path='/stdntcnctcall' element={<Stdntcnctcall/>} />
        <Route path='/stdntcnctmsg' element={<Stdntcnctmsg/>} />
        <Route path='/stdntnotify' element={<Stdntnotify/>} />
        <Route path='/stdntbillpay' element={<Stdntbillpay/>} />
        <Route path='/stdntpayhis' element={<Stdntpayhis/>} />
        <Route path='/stdntreg' element={<Stdntreg/>} />
      </Routes>
    </div>
  )
}

export default Routers
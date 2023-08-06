import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Checkinnlaunch from '../pages/launch';
import Checkinnhome from '../pages/home';
import Signin from '../pages/signin';
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
import Stdntqueries from '../pages/stdntqueries';
import Stdntappaprov from '../pages/stdntappaprov';
import Stdntsettings from '../pages/stdntsettings';
import Stdntnotifysettings from '../pages/stdntnotifysettings';
import Stdntabout from '../pages/stdntabout';
import Stdntsettingsmore from '../pages/stdntsettingsmore';
import Stdntrules from '../pages/stdntrules';
import Stdntsgstmenu from '../pages/stdntsgstmenu';



const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/checkinnlaunch'/>} />
        <Route path='/checkinnlaunch' element={<Checkinnlaunch/>} />
        <Route path='/checkinnhome' element={<Checkinnhome/>} />

        <Route path='/signin' element={<Signin/>} />
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
        <Route path='/stdntqueries' element={<Stdntqueries/>} />
        <Route path='/stdntappaprov' element={<Stdntappaprov/>} />
        <Route path='/stdntsettings' element={<Stdntsettings/>} />
        <Route path='/stdntnotifysettings' element={<Stdntnotifysettings/>} />
        <Route path='/stdntabout' element={<Stdntabout/>} />
        <Route path='/stdntsettingsmore' element={<Stdntsettingsmore/>} />
        <Route path='/stdntrules' element={<Stdntrules/>} />
        <Route path='/stdntsgstmenu' element={<Stdntsgstmenu/>} />
      </Routes>
    </div>
  )
}

export default Routers
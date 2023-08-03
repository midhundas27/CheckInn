import React from 'react';

import '../styles/stdntcnctcall.css';
import { FaHome, FaCog, FaBell, FaQuestionCircle } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';


  const Stdntcnctcall = () => {

  return (
    <div className='stdntconnect-group1'>
        <h1> Connect Us</h1>
    <div className='stdntconnect-sidebarbox1'>   
    <div className="stdntconnect-contents1">    
    <div className="connect-navigation1">
      <ul className="connect-sidebar1">
        <li>
          <NavLink to="/checkinnstudenthome"className={"active1-11"} exact activeClassName="active">
            <FaHome className="icon1-11" />
            <span className="menu-text1-11">home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntsettings" className={"active2-22"} activeClassName="active">
            <FaCog className="icon2-22" />
            <span className="menu-text2-22">settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntnotify" className={"active3-33"} activeClassName="active">
            <FaBell className="icon3-33"/>
            <span className="menu-text3-33">notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntconnect" className={"active4-44"} activeClassName="active">
            <FaQuestionCircle className="icon4-44"/>
            <span className="menu-text4-44">help</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
    </div>
    <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="stdntconnect-logopic1"
            />
  <div className='cnct-container1'>
    <div className='cnct-1'>
      <span className='warden1'>Warden</span>
      <span className='warden2'>Warden-Name</span>
      <span className='warden3'>+9100000000000</span>
      

    </div>
    <div className='cnct-2'>  
    
    <span className='clerk1'>Clerk</span>
      <span className='clerk2'>Clerk-Name</span>
      <span className='clerk3'>+9100000000000</span>
     
      
    </div>
    <div className='cnct-3'>
    <span className='security1'>Security</span>
    <span className='security2'>Security-Name</span>
      <span className='security3'>+9100000000000</span>
    </div>
    <div className='cnct-4'>
    <span className='hstlsecr1'>Hostel Secretary</span>
    <span className='hstlsecr2'>HS-Name</span>
    <span className='hstlsecr3'>+910000000000</span>
    </div>
    <div className='cnct-5'>
    <span className='messsecr1'>Mess Secretary</span>
    <span className='messsecr2'>MS-Name</span>
    <span className='messsecr3'>+910000000000</span>
    </div>
    <div className='cnct-6'>
    <span className='cabdr-11'>Cab Driver 1</span>
    <span className='cabdr-12'>CD1-Name</span>
    <span className='cabdr-13'>+910000000000</span>
    </div>
    <div className='cnct-7'>
    <span className='cabdr-21'>Cab Driver 2</span>
    <span className='cabdr-22'>CD2-Name</span>
    <span className='cabdr-23'>+910000000000</span>
    </div>

  </div>        




    </div>
  );
};

export default Stdntcnctcall;

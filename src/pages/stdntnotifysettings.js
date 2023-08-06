import React from 'react';
import '../styles/stdntnotifysettings.css';
import { FaHome, FaCog, FaBell, FaQuestionCircle } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';


  const Stdntnotifysettings = () => {



  return (
    <div className='stdntnotifysettings-group'>
    <div className='stdntnotifysettings-sidebarbox'>   
    <div className="stdntnotifysettings-contents">    
    <div className="notifysettings-navigation">
      <ul className="notifysettings-sidebar">
        <li>
          <NavLink to="/checkinnstudenthome"className={"notifysettings-1"} exact activeClassName="active">
            <FaHome className="notifysettingsicon-1" />
            <span className="notifysettingstext-1">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntsettings" className={"notifysettings-2"} activeClassName="active">
            <FaCog className="notifysettingsicon-2" />
            <span className="notifysettingstext-2">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntnotify" className={"notifysettings-3"} activeClassName="active">
            <FaBell className="notifysettingsicon-3"/>
            <span className="notifysettingstext-3">Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntconnect" className={"notifysettings-4"} activeClassName="active">
            <FaQuestionCircle className="notifysettingsicon-4"/>
            <span className="notifysettingstext-4">Help</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
    </div>
    <div className="stdntnotifysettings-headerbox">
    <NavLink to="/stdntsettings"> <span className="notifysettingstext-5">Account</span></NavLink> 
    <NavLink to="/stdntnotifysettings"><span className="notifysettingstext-6">Notifications</span></NavLink>

    <NavLink to="/stdntabout"><span className="notifysettingstext-7">About</span></NavLink>

    <img className='notifysettingspic' alt='selection marker' src='./images/settings-indicator.png'/>
    </div>
    <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="stdntnotifysettings-logopic"
            />
    </div>
  );
};

export default Stdntnotifysettings;

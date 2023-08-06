import React from 'react';
import '../styles/stdntnotify.css';
import { FaHome, FaCog, FaBell, FaQuestionCircle } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';


  const Stdntnotify = () => {
   
  return (
    <div className='stdntnotify-group'>
        <h1> Notifications</h1>
    <div className='stdntnotify-sidebarbox'>   
    <div className="stdntnotify-contents">    
    <div className="notify-navigation">
      <ul className="notify-sidebar">
        <li>
          <NavLink to="/checkinnstudenthome"className={"notify-1"} exact activeClassName="active">
            <FaHome className="notifyicon-1" />
            <span className="notifytext-1">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntsettings" className={"notify-2"} activeClassName="active">
            <FaCog className="notifyicon-2" />
            <span className="notifytext-2">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntnotify" className={"notify-3"} activeClassName="active">
            <FaBell className="notifyicon-3"/>
            <span className="notifytext-3">Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntconnect" className={"notify-4"} activeClassName="active">
            <FaQuestionCircle className="notifyicon-4"/>
            <span className="notifytext-4">Help</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
    </div>
    <div className='notify-container1'>
            <img className='notifypic-1' alt='No new notifications' src='./images/notifypic.png'/>
            <h2>No new notification!</h2>
    </div>
    <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="stdntnotify-logopic"
            />
    </div>
  );
};

export default Stdntnotify;

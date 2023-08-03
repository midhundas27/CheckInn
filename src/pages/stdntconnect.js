import React, { useState } from 'react';
import Switch from 'react-switch';
import '../styles/stdntconnect.css';
import { FaHome, FaCog, FaBell, FaEnvelope,FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';

  const location = {
    name: 'Sample Location',
    latitude: 10.9004834, // Replace with your desired latitude
    longitude: 76.4354072, // Replace with your desired longitude
  };

  const Stdntconnect = () => {
    const [callButtonState, setCallButtonState] = useState(false);
    const [messageButtonState, setMessageButtonState] = useState(false);
  
    const handleMapClick = () => {
      const googleMapsLink = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
      window.open(googleMapsLink, '_blank');
    };
  
    const handleCallButtonClick = () => {
      setCallButtonState(!callButtonState);
      // Add navigation based on the state of the button
      if (callButtonState) {
       <NavLink to="/stdntcnctcall"></NavLink>// Replace 'callPage' with the desired path for the call page
      }
    };
  
    const handleMessageButtonClick = () => {
      setMessageButtonState(!messageButtonState);
      // Add navigation based on the state of the button
      if (messageButtonState) {
        <NavLink to="/stdntcnctmsg"></NavLink> // Replace 'messagePage' with the desired path for the message page
      }
    };

  return (
    <div className='stdntconnect-group'>
        <h1> Connect Us</h1>
    <div className='stdntconnect-sidebarbox'>   
    <div className="stdntconnect-contents">    
    <div className="connect-navigation">
      <ul className="connect-sidebar">
        <li>
          <NavLink to="/checkinnstudenthome"className={"active1-1"} exact activeClassName="active">
            <FaHome className="icon1-1" />
            <span className="menu-text1-1">home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntsettings" className={"active2-2"} activeClassName="active">
            <FaCog className="icon2-2" />
            <span className="menu-text2-2">settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntnotify" className={"active3-3"} activeClassName="active">
            <FaBell className="icon3-3"/>
            <span className="menu-text3-3">notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntconnect" className={"active4-4"} activeClassName="active">
            <FaQuestionCircle className="icon4-4"/>
            <span className="menu-text4-4">help</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
    </div>
    <div className="stdntconnect-switch">
      <div className='cnct-switch1'>
        <FaPhoneAlt className="cnct-icon1" />
        <span className="cnct-text1">Call</span>
        
        <div className="cnct-button1">
            <Switch
                    checked={callButtonState}
                onChange={handleCallButtonClick}
                    onColor="#266221"
                    offColor="#b7b7b7"
                    onHandleColor="#fff"
                    offHandleColor="#fff"
                    uncheckedIcon={false}
                    checkedIcon={false}  
                />
        </div>    
      </div> 
      <div className='cnct-switch2'>
        <FaEnvelope className="cnct-icon2" />
        <span className="cnct-text2">Message</span>
        
        <div className="cnct-button2">
            <Switch
                    checked={messageButtonState}
                onChange={handleMessageButtonClick}
                    onColor="#266221"
                    offColor="#b7b7b7"
                    onHandleColor="#fff"
                    offHandleColor="#fff"
                    uncheckedIcon={false}
                    checkedIcon={false}  
                />
        </div> 
      </div>   
    </div>


    <div className="map-container" onClick={handleMapClick}>
      <img
        src="./images/map.png"
        alt="Map"
        className="map-image" 
      />
      <img src='./images/spotpath.png' className='spotpath' alt="marker"/>
    </div>
    <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="stdntconnect-logopic"
            />
                <h3>Men's Hostel,Government Engineering College,<br></br>Mannampatta P.O. Palakkad,<br></br>Kerala,India - 678633
            </h3>
    </div>
  );
};

export default Stdntconnect;

import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Switch from 'react-switch';
import '../styles/stdntconnect.css';
import { FaHome, FaCog, FaBell, FaEnvelope, FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

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
  };

  const handleMessageButtonClick = () => {
    setMessageButtonState(!messageButtonState);
  };

  return (
    <div className='stdntconnect-group'>
      <h1> Connect Us</h1>
      {/* ... rest of the component code remains the same ... */}
      <div className="stdntconnect-switch">
        <div className="cnct-button1">
          <FaPhoneAlt className="icon" />
          <span className="button-text">Call</span>
          <Switch
            id="Breakfast"
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
        <div className="cnct-button2">
          <FaEnvelope className="icon" />
          <span className="button-text">Message</span>
          <Switch
            id="Breakfast"
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
  );
};

export default Stdntconnect;

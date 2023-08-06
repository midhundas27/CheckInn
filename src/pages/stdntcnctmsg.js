import React, { useState, useEffect } from 'react';
import '../styles/stdntcnctmsg.css';
import { FaHome, FaCog, FaBell, FaQuestionCircle } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';


  const Stdntcnctmsg = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [fullname, setFullname] = useState('');
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Limit the input to a maximum of 10 digits
    if (value.length <= 13) {
      // Add "+91" only when the user starts typing
      setPhoneNumber(value.startsWith('+91') ? value : '+91' + value);
    }
  };
  const capitalizeFirstLetter = (e) => {
    const value = e.target.value;
    setFullname(value.replace(/\b\w/g, (match) => match.toUpperCase()));
  };
  
  const handleMessageChange = (e) => {
    const value = e.target.value;
    // Capitalize the first letter of every sentence
    setMessage(value.replace(/(^\w|\.\s*\w)/g, (match) => match.toUpperCase()));
  };
  useEffect(() => {
    // Add event listener to the input field to disable Backspace, Delete, and Spacebar keys when the input is empty
    const handleKeyDown = (e) => {
      if (phoneNumber === '+91' && (e.key === 'Backspace' || e.key === 'Delete' || e.key === ' ')) {
        e.preventDefault();
      }
    };
    const handleKeyDown1 = (e) => {
      if (e.target.classList.contains('stdntcnctmsg-input3') && e.key === ' ') {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown1);

    // Cleanup the event listener when the component unmounts
  
  
    document.querySelector('.stdntcnctmsg-input3').addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown1);
      document.querySelector('.stdntcnctmsg-input3').removeEventListener('keydown', handleKeyDown);
    };
  }, [phoneNumber]);
  
  return (
    <div className='stdntconnect-group2'>
        <h1> Connect Us</h1>
    <div className='stdntconnect-sidebarbox2'>   
    <div className="stdntconnect-contents2">    
    <div className="connect-navigation2">
      <ul className="connect-sidebar2">
        <li>
          <NavLink to="/checkinnstudenthome"className={"active1-111"} exact activeClassName="active">
            <FaHome className="icon1-111" />
            <span className="menu-text1-111">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntsettings" className={"active2-222"} activeClassName="active">
            <FaCog className="icon2-222" />
            <span className="menu-text2-222">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntnotify" className={"active3-333"} activeClassName="active">
            <FaBell className="icon3-333"/>
            <span className="menu-text3-333">Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntconnect" className={"active4-444"} activeClassName="active">
            <FaQuestionCircle className="icon4-444"/>
            <span className="menu-text4-444">Help</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
    </div>

    <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="stdntconnect-logopic2"
            />
    <div className='cnct-container2'>
      <div className='textinput12'>
    <input
        type="text"
        required
        placeholder="Full Name"
        value={fullname}
        onChange={capitalizeFirstLetter}
        className='stdntcnctmsg-input1'
      />
      <input
        type="text"
        required
        placeholder="Admission No"
        className='stdntcnctmsg-input2'
      />
      </div>

      <div className='textinput34'>
      <input
      country="IN"
      pattern="^\+91[789]\d{9}$"
      defaultValue="+91"
      onChange={handlePhoneNumberChange}
      value={phoneNumber}
      maxLength="13"
      type="tel"
      placeholder="Phone"
      required
      className='stdntcnctmsg-input3'
    />
    <input
        type="email"
        required
        placeholder="Email"
        
        className='stdntcnctmsg-input4'
      />
      </div>

      <textarea
        type="text"
        required
        placeholder="Message"
        value={message}
        onChange={handleMessageChange}
        className='stdntcnctmsg-input5'
      />
       <button
                    type='submit'
                    className="submit-button1"
                  >
                    Submit
                  </button>

    </div>        
    </div>
  );
};

export default Stdntcnctmsg;

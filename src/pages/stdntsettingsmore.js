import React, { useState} from 'react';
import '../styles/stdntsettingsmore.css';
import { FaHome, FaCog, FaBell, FaQuestionCircle, FaCircle, FaAngleLeft } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';


  const Stdntsettingsmore = () => {
    const [address, setAddress] = useState('');
    const handleAddressChange = (e) => {
        const value = e.target.value;
        // Capitalize the first letter of every sentence
        setAddress(value.replace(/(^\w|\.\s*\w)/g, (match) => match.toUpperCase()));
      };

  return (
    <div className='stdntsettingsmore-group'>
    <div className='stdntsettingsmore-sidebarbox'>   
    <div className="stdntsettingsmore-contents">    
    <div className="settingsmore-navigation">
      <ul className="settingsmore-sidebar">
        <li>
          <NavLink to="/checkinnstudenthome"className={"settingsmore-1"} exact activeClassName="active">
            <FaHome className="settingsmoreicon-1" />
            <span className="settingsmoretext-1">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntsettings" className={"settingsmore-2"} activeClassName="active">
            <FaCog className="settingsmoreicon-2" />
            <span className="settingsmoretext-2">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntnotify" className={"settingsmore-3"} activeClassName="active">
            <FaBell className="settingsmoreicon-3"/>
            <span className="settingsmoretext-3">Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntconnect" className={"settingsmore-4"} activeClassName="active">
            <FaQuestionCircle className="settingsmoreicon-4"/>
            <span className="settingsmoretext-4">Help</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
    </div>
    <div className="stdntsettingsmore-headerbox">
    <NavLink to="/stdntsettingsmore"> <span className="settingsmoretext-5">Account</span></NavLink> 
    <NavLink to="/stdntnotifysettings"><span className="settingsmoretext-6">Notifications</span></NavLink>

    <NavLink to="/stdntabout"><span className="settingsmoretext-7">About</span></NavLink>

    <img className='settingsmorepic' alt='selection marker' src='./images/settings-indicator.png'/>
    </div>
    <form className="stdntsettingsmore-form">
    <span className="settingsmore-username1">Username</span>
          <input type="text" id="settingsmore-username" name="settingsmore-username" defaultValue="pqrstuv123" readOnly required />

          <span className="settingsmore-password1">Password</span>
          <input type="password" id="settingsmore-password" name="settingsmore-password" defaultValue="001122334455" readOnly required />

          <span className="settingsmore-parntname1">Parent's name</span>
          <input id="settingsmore-parntname" type="text" name="settingsmore-parntname" defaultValue="Lmnopqr Efghijk" readOnly required>
          </input>

          <span className="settingsmore-income1">Income (INR)</span>
          <input id="settingsmore-income" type="number" name="settingsmore-income" defaultValue="250000" readOnly required>
          </input>

          <span className="settingsmore-disfrmhome1">Distance from home (in km)</span>
          <input type="number" id="settingsmore-disfrmhome" name="settingsmore-disfrmhome" defaultValue="10000" readOnly required />

          <span className="settingsmore-parntphno1">Parent's phone number</span>
          <input type="tel" id="settingsmore-parntphno" country="IN" 
           defaultValue="+910000000000" readOnly required />

          <span className="settingsmore-address1">Address</span>
            <textarea
        type="text"
        required
        value={address}
        onChange={handleAddressChange}
        className='settingsmore-address'
      />
      <NavLink to="/stdntsettings">
           <button type="button" className="moremore-button" >
            Less Details <FaCircle className="moremoreicon1" /><FaAngleLeft className="moremoreicon2" />
           </button>
           </NavLink>
    </form>
    <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="stdntsettingsmore-logopic"
            />
    </div>
  );
};

export default Stdntsettingsmore;

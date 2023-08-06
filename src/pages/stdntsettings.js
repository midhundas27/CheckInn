import React from 'react';
import '../styles/stdntsettings.css';
import { FaHome, FaCog, FaBell, FaQuestionCircle, FaCircle, FaAngleRight } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';


  const Stdntsettings = () => {

    const handleLogout = () => {
      // Add your logout logic here
      // For example, clear authentication tokens, update user session, or redirect to logout page
      console.log("Logging out...");
      // For the sake of this example, let's assume we are redirecting to the login page
      window.location.href = '/signin'; // Change to your actual logout route
    };


  return (
    <div className='stdntsettings-group'>
    <div className='stdntsettings-sidebarbox'>   
    <div className="stdntsettings-contents">    
    <div className="settings-navigation">
      <ul className="settings-sidebar">
        <li>
          <NavLink to="/checkinnstudenthome"className={"settings-1"} exact activeClassName="active">
            <FaHome className="settingsicon-1" />
            <span className="settingstext-1">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntsettings" className={"settings-2"} activeClassName="active">
            <FaCog className="settingsicon-2" />
            <span className="settingstext-2">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntnotify" className={"settings-3"} activeClassName="active">
            <FaBell className="settingsicon-3"/>
            <span className="settingstext-3">Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntconnect" className={"settings-4"} activeClassName="active">
            <FaQuestionCircle className="settingsicon-4"/>
            <span className="settingstext-4">Help</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
    </div>
    <div className="stdntsettings-headerbox">
    <NavLink to="/stdntsettings"> <span className="settingstext-5">Account</span></NavLink> 
    <NavLink to="/stdntnotifysettings"><span className="settingstext-6">Notifications</span></NavLink>

    <NavLink to="/stdntabout"><span className="settingstext-7">About</span></NavLink>

    <img className='settingspic' alt='selection marker' src='./images/settings-indicator.png'/>
    </div>
    <form className="stdntsettings-form">
    <span className="settings-name1">Full name</span>
          <input type="text" id="settings-name" name="settings-name" defaultValue="Abcd Xyz" readOnly required />

          <span className="settings-admissionNo1">Admission number</span>
          <input type="text" id="settings-admissionNo" name="settings-admissionNo" defaultValue="00BB00" readOnly required />

          <span className="settings-year1">Year of study</span>
          <input id="settings-year" name="settings-year" defaultValue="4" readOnly required>
          </input>

          <span className="settings-department1">Department</span>
          <input id="settings-department" name="settings-department" defaultValue="CSE" readOnly required>
          </input>

          <span className="settings-email1">Email</span>
          <input type="settings-email" id="settings-email" name="settings-email" defaultValue="abcd@gecskp.ac.in" readOnly required />

          <span className="settings-phno1">Phone number</span>
          <input type="tel" id="settings-phno" country="IN" 
           defaultValue="+910000000000" readOnly required />
           <NavLink to="/signin">
           <button type="button" className="logout-button" onClick={handleLogout}>
            Logout
           </button>
           </NavLink>
           <NavLink to="/stdntsettingsmore">
           <button type="button" className="more-button" >
            More Details <FaCircle className="moreicon1" /><FaAngleRight className="moreicon2" />
           </button>
           </NavLink>
    </form>
    <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="stdntsettings-logopic"
            />
    </div>
  );
};

export default Stdntsettings;

import React from 'react';
import '../styles/stdntabout.css';
import { FaHome, FaCog, FaBell, FaQuestionCircle, FaCircle, FaAngleRight } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';


  const Stdntabout = () => {



  return (
    <div className='stdntabout-group'>
    <div className='stdntabout-sidebarbox'>   
    <div className="stdntabout-contents">    
    <div className="about-navigation">
      <ul className="about-sidebar">
        <li>
          <NavLink to="/checkinnstudenthome"className={"about-1"} exact activeClassName="active">
            <FaHome className="abouticon-1" />
            <span className="abouttext-1">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntsettings" className={"about-2"} activeClassName="active">
            <FaCog className="abouticon-2" />
            <span className="abouttext-2">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntnotify" className={"about-3"} activeClassName="active">
            <FaBell className="abouticon-3"/>
            <span className="abouttext-3">Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntconnect" className={"about-4"} activeClassName="active">
            <FaQuestionCircle className="abouticon-4"/>
            <span className="abouttext-4">Help</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
    </div>
    <div className="stdntabout-headerbox">
    <NavLink to="/stdntsettings"> <span className="abouttext-5">Account</span></NavLink> 
    <NavLink to="/stdntnotifysettings"><span className="abouttext-6">Notifications</span></NavLink>

    <NavLink to="/stdntabout"><span className="abouttext-7">About</span></NavLink>

    <img className='aboutpic' alt='selection marker' src='./images/settings-indicator.png'/>
    </div>
    <div className='stdntabout-contents'>
      <h1>
        Welcome to Check Inn
      </h1>
      <p> 
      We take pride in providing exceptional accommodation facilities for our students.
      Our hostels are thoughtfully designed to offer a comfortable and conducive living environment, promoting both academic and personal growth.
      Located within the college campus, students enjoy easy access to academic buildings and other facilities.<br></br>
      Safety is of utmost importance to us, and we have implemented strict security measures to ensure a secure stay for all residents.
      Our dedicated staff members are available round-the-clock to cater to students' needs and ensure a smooth living experience.<br></br><br></br>
      We believe in fostering a sense of community among our students, and our hostels serve as vibrant spaces for social interactions and cultural exchange.
      Hygiene and cleanliness are diligently maintained to create a healthy living atmosphere.<br></br>
      Through our website, students can conveniently apply for hostel accommodation and access essential information.
      Join us to embark on a fulfilling college journey enriched by comfortable, safe, and memorable hostel living.
      </p>
      <NavLink to="/stdntrules">
           <button type="button" className="rules-button" >
            Rules and regulations <FaCircle className="rulesicon1" /><FaAngleRight className="rulesicon2" />
           </button>
           </NavLink>
    </div>
    <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="stdntabout-logopic"
            />
    </div>
  );
};

export default Stdntabout;

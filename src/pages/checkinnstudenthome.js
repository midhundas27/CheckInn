import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/checkinnstudenthome.css';
import { FaHome, FaCog, FaBell, FaQuestionCircle } from 'react-icons/fa';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom';


/*function Home() {
  return <h1>Home Page</h1>;
}

function Settings() {
  return <h1>Settings Page</h1>;
}

function Notifications() {
  return <h1>Notifications Page</h1>;
}

function Help() {
  return <h1>Help Page</h1>;
}

function Checkinnstudenthome (props) {
  const [profilePic, setProfilePic] = useState('./images/profilepic.png');
  const [profileName, setProfileName] = useState('#profile123');

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setProfilePic(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }; 

  const handleProfileNameChange = (event) => {
    setProfileName(event.target.value); 
  };
  const handleClick = () => {
    // Handle button click event
    console.log('Button clicked!');
  };*/
  function Checkinnstudenthome (props) {
  return (
    // <Router>
    <div className="checkinnstudenthome-container">
      <div className="checkinnstudenthome-studenthome">
        <div className="checkinnstudenthome-group">
          < div className="checkinnstudenthome-frame">
            <div className='checkinnstudenthome-sidebarbox'>
        
          <div className="checkinnstudenthome-contents">
              
          <div className="navigation">
            <ul className="sidebar-menu">
          <li>
                <NavLink to="/checkinnstudenthome"className={"active1"} exact activeClassName="active">
                  <FaHome className="icon1" />
                  <span className="menu-text1">home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings" className={"active2"} activeClassName="active">
                  <FaCog className="icon2" />
                  <span className="menu-text2">settings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/notifications" className={"active3"} activeClassName="active">
                  <FaBell className="icon3"/>
                  <span className="menu-text3">notifications</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/help" className={"active4"} activeClassName="active">
                  <FaQuestionCircle className="icon4"/>
                  <span className="menu-text4">help</span>
                </NavLink>
              </li>
          </ul>
          </div>
          </div>
          </div>
          <div>
     
    
   
      
    </div>
            <div className="checkinnstudenthome-buttons">
              
    <NavLink to="/checkinnstudentbillpayment" className={"text10"} activeClassName="active">
      <img src="./images/studenthomebillpaymentbuttondesign.png" alt="Button Image" className='checkinnstudenthome-studenthomebillpaymentbuttondesign1'/>
              <span>Bill Payment</span>
                </NavLink>
                
                
                <NavLink to="/checkinnstudentqueriessubmission" className={"text12"} activeClassName="active">
      <img src="./images/studenthomequeriessubmissionbuttondesign.png" alt="Button Image"className='checkinnstudenthome-studenthomequeriessubmissionbuttondesign1' />
              <span>Queries Submission</span>
                </NavLink>
                
                <NavLink to="/checkinnstudentnewregistration" className={"text14"} activeClassName="active">
      <img src="./images/studenthomestudentregistrationbuttondesign.png" alt="Button Image" className='checkinnstudenthome-studenthomestudentregistrationbuttondesign1' />
      <span>New Registration</span>
    </NavLink>
               
                <NavLink to="/checkinnstudentmesscut" className={"text16"} activeClassName="active">
      <img src="./images/studenthomemessmanagementbuttondesign.png" alt="Button Image" className='checkinnstudenthome-studenthomemessmanagementbuttondesign1'/>
      <span>Mess Management</span>
    </NavLink>
  
   </div>
            <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="checkinnstudenthome-logopicstudenthome"
            />
            <div className="content">
          <ul>
            <li>
            </li>
          </ul> 
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkinnstudenthome

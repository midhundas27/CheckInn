import React from 'react';
import '../styles/stdnthome.css';
import { FaHome, FaCog, FaBell, FaQuestionCircle } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

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
                <NavLink to="/stdntnotify" className={"active3"} activeClassName="active">
                  <FaBell className="icon3"/>
                  <span className="menu-text3">notifications</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/stdntconnect" className={"active4"} activeClassName="active">
                  <FaQuestionCircle className="icon4"/>
                  <span className="menu-text4">help</span>
                </NavLink>
              </li>
          </ul>
          </div>
          </div>
          </div>
       
            <div className="checkinnstudenthome-buttons">
              
    <NavLink to="/stdntbillpay" className={"text10"} activeClassName="active">
      <img src="./images/studenthomebillpaymentbuttondesign.png" alt="billpayment-button" className='checkinnstudenthome-studenthomebillpaymentbuttondesign1'/>
              <span>Bill Payment</span>
                </NavLink>
                
                
                <NavLink to="/checkinnstudentqueriessubmission" className={"text12"} activeClassName="active">
      <img src="./images/studenthomequeriessubmissionbuttondesign.png" alt="queriessubmission-button"className='checkinnstudenthome-studenthomequeriessubmissionbuttondesign1' />
              <span>Queries Submission</span>
                </NavLink>
                
                <NavLink to="/stdntreg" className={"text14"} activeClassName="active">
      <img src="./images/studenthomestudentregistrationbuttondesign.png" alt="studentregistration-button" className='checkinnstudenthome-studenthomestudentregistrationbuttondesign1' />
      <span>New Registration</span>
    </NavLink>
               
                <NavLink to="/checkinnstudentmesscut" className={"text16"} activeClassName="active">
      <img src="./images/studenthomemessmanagementbuttondesign.png" alt="messmanagement-button" className='checkinnstudenthome-studenthomemessmanagementbuttondesign1'/>
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

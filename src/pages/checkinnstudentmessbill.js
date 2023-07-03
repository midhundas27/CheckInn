import React from 'react';

import '../styles/checkinnstudentmessbill.css';
import { FaRegCalendarCheck, FaWpforms, FaFileInvoice } from 'react-icons/fa';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom';

const Checkinnstudentmessbill = () => {


  return (
    <div className="checkinnstudentmessbill-container">
      <div className="checkinnstudentmessbill-sidebarbox">
      <h1> Mess Bill</h1>
      <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="checkinnstudenthome-logopicstudenthome" />
      
          <div className="messbill-navigation">
            <ul className="messbill-sidebarmenu">
              <li>
                <NavLink to="/checkinnstudentmesscut" className={"messbill-active11"} exact activeClassName="active">
                  <FaRegCalendarCheck className="messbill-icon11" />
                  <span className="messbillmenu-text11">mess cut</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessmenu" className={"messbill-active22"} activeClassName="active">
                  <FaWpforms className="messbill-icon22" />
                  <span className="messbillmenu-text22">mess menu</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessbill" className={"messbill-active33"} activeClassName="active">
                  <FaFileInvoice className="messbill-icon33" />
                  <span className="messbillmenu-text33">mess bill</span>
                </NavLink>
              </li>
            </ul>
          </div>
          </div>
          </div>
  );
};

export default Checkinnstudentmessbill;
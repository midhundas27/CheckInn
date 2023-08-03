import React from 'react';
import '../styles/stdntmessbill.css';
import { FaRegCalendarCheck, FaWpforms, FaFileInvoice } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

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
                  <span className="messbillmenu-text11">mess calender</span>
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

          <div className="form-container">
        <form>
          <label htmlFor="year">Select Year:</label>
          <select id="year" name="year">
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            {/* Add more year options as needed */}
          </select>

          <label htmlFor="month">Select Month:</label>
          <select id="month" name="month">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>

          <button type="submit">Mess Bill</button>
        </form>
      </div>
          </div>
          </div>
  );
};

export default Checkinnstudentmessbill;
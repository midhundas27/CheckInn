import React from 'react';
import '../styles/stdntbillpay.css';
import {FaCreditCard, FaHistory} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Stdntbillpay = () => {


  return (
    <div className="stdntbillpay-container">
        <h1> Pay Bill</h1>
      <div className="stdntbillpay-sidebarbox">
      
      <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstdntbillpay"
              className="logopic-stdntbillpay" />
      
          <div className="stdntbillpay-navigation">
            <ul className="stdntbillpay-sidebarmenu">
              <li>
                <NavLink to="/stdntbillpay" className={"stdntbillpay-active11"} exact activeClassName="active">
                  <FaCreditCard className="stdntbillpay-icon11" />
                  <span className="stdntbillpaymenu-text11">Pay bill</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/stdntpayhis" className={"stdntbillpay-active22"} activeClassName="active">
                  <FaHistory className="stdntbillpay-icon22" />
                  <span className="stdntbillpaymenu-text22">History</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="stdntbillpay-container2">
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

          <button type="submit">Pay Bill</button>
        </form>
      </div>
          </div>
          </div>
  );
};

export default Stdntbillpay;
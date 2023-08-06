import React from 'react';
import '../styles/stdntpayhis.css';
import {FaCreditCard, FaHistory} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Stdntpayhis = () => {


  return (
    <div className="stdntpayhis-container">
        <h1> Payment History</h1>
      <div className="stdntpayhis-sidebarbox">
      
      <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstdntpayhis"
              className="logopic-stdntpayhis" />
      
          <div className="stdntpayhis-navigation">
            <ul className="stdntpayhis-sidebarmenu">
              <li>
                <NavLink to="/stdntbillpay" className={"stdntpayhis-active11"} exact activeClassName="active">
                  <FaCreditCard className="stdntpayhis-icon11" />
                  <span className="stdntpayhismenu-text11">Pay bill</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/stdntpayhis" className={"stdntpayhis-active22"} activeClassName="active">
                  <FaHistory className="stdntpayhis-icon22" />
                  <span className="stdntpayhismenu-text22">History</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="stdntpayhis-container2">
        <table className="payhis-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Generated On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>December</td>
              <td>2000</td>
              <td>Jan 5</td>
              <td> Not Paid</td>
            </tr>
            <tr>
            <td>November</td>
              <td>2600</td>
              <td>Dec 5</td>
              <td>Paid</td>
            </tr>
            <tr>
            <td>October</td>
              <td>2400</td>
              <td>Nov 5</td>
              <td>Paid</td>
            </tr>
            <tr>
            <td>September</td>
              <td>2900</td>
              <td>Oct 5</td>
              <td>Paid</td>
            </tr>
            <tr>
            <td>August</td>
              <td>2000</td>
              <td>Sep 5</td>
              <td>Paid</td>
            </tr>
            <tr>
            <td>July</td>
              <td>2500</td>
              <td>Aug 5</td>
              <td>Paid</td>
            </tr>
            <tr>
            <td>June</td>
              <td>2750</td>
              <td>Jul 5</td>
              <td>Paid</td>
            </tr><tr>
            <td>May</td>
              <td>2650</td>
              <td>Jun 5</td>
              <td>Paid</td>
            </tr><tr>
            <td>April</td>
              <td>2950</td>
              <td>May 5</td>
              <td>Paid</td>
            </tr><tr>
            <td>March</td>
              <td>2450</td>
              <td>Apr 5</td>
              <td>Paid</td>
            </tr>
            <tr>
            <td>February</td>
              <td>2200</td>
              <td>Mar 5</td>
              <td>Paid</td>
            </tr><tr>
            <td>January</td>
              <td>2850</td>
              <td>Feb 5</td>
              <td>Paid</td>
            </tr>
          </tbody>
        </table>
      </div>

          </div>
          </div>
  );
};

export default Stdntpayhis;
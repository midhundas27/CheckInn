import React from 'react';
import '../styles/stdntmessmenu.css';
import { FaRegCalendarCheck, FaWpforms, FaFileInvoice } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Checkinnstudentmessmenu = () => {
  return (
    <div className="checkinnstudentmessmenu-container">
      <div className="checkinnstudentmessmenu-sidebarbox">
      <h1> Mess Menu</h1>
      <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="checkinnstudenthome-logopicstudenthome" />
               <NavLink to="/stdntsgstmenu" className={"checkinnstudentmessmenu-submit1"} activeClassName="active">
      <button
                    type="button"
                    className="checkinnstudentmessmenu-submit"
                  >
                    Suggest Menu
                  </button>
                  </NavLink>
          <div className="messmenu-navigation">
            <ul className="messmenu-sidebarmenu">
              <li>
                <NavLink to="/checkinnstudentmesscut" className={"messmenu-active11"} exact activeClassName="active">
                  <FaRegCalendarCheck className="messmenu-icon11" />
                  <span className="messmenumenu-text11">Mess calendar</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessmenu" className={"messmenu-active22"} activeClassName="active">
                  <FaWpforms className="messmenu-icon22" />
                  <span className="messmenumenu-text22">Mess menu</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessbill" className={"messmenu-active33"} activeClassName="active">
                  <FaFileInvoice className="messmenu-icon33" />
                  <span className="messmenumenu-text33">Mess bill</span>
                </NavLink>
              </li>
            </ul>
          </div>
          </div>


          <div className="table-container">
        <table className="menu-table">
          <thead>
            <tr>
              <th>Meals</th>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
            </tr>
            <tr>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
            </tr>
            <tr>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
            </tr>
          </tbody>
        </table>
      </div>



          </div>

  );
};

export default Checkinnstudentmessmenu;
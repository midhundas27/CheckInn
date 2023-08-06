import React, {useState} from 'react';
import '../styles/stdntsgstmenu.css';
import { FaRegCalendarCheck, FaWpforms, FaFileInvoice } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Stdntsgstmenu = () => { 
    
    const [selectedBreakfast, setSelectedBreakfast] = useState([]);
    const [selectedLunch, setSelectedLunch] = useState([]);
    const [selectedSnack, setSelectedSnack] = useState([]);
    const [selectedDinner, setSelectedDinner] = useState([]);
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you can save the selected values to your desired storage or API
      console.log('Selected Breakfast:', selectedBreakfast);
      console.log('Selected Lunch:', selectedLunch);
      console.log('Selected Snack:', selectedSnack);
      console.log('Selected Dinner:', selectedDinner);
    };

  return (
    <div className="stdntsgstmenu-container">
        <h1>Menu Suggestions</h1>
      <div className="stdntsgstmenu-sidebarbox">
      
      <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstdntsgstmenu"
              className="logopic-stdntsgstmenu" />
          <div className="stdntsgstmenu-navigation">
            <ul className="stdntsgstmenu-sidebarmenu">
            <li>
                <NavLink to="/checkinnstudentmesscut" className={"stdntsgstmenu-active11"} exact activeClassName="active">
                  <FaRegCalendarCheck className="stdntsgstmenu-icon11" />
                  <span className="stdntsgstmenumenu-text11">Mess calendar</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/stdntsgstmenu" className={"stdntsgstmenu-active22"} activeClassName="active">
                  <FaWpforms className="stdntsgstmenu-icon22" />
                  <span className="stdntsgstmenumenu-text22">Mess menu</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessbill" className={"stdntsgstmenu-active33"} activeClassName="active">
                  <FaFileInvoice className="stdntsgstmenu-icon33" />
                  <span className="stdntsgstmenumenu-text33">Mess bill</span>
                </NavLink>
              </li>
            </ul>
          </div>
          </div>


      <div className="stdntsgstmenu-form-container">
 

      <form className="stdntsgstmenu-form" onSubmit={handleSubmit}>
          <div>
            <label>Breakfast:</label>
            <div>
              <label>
                Option 1
                <input
                  type="checkbox"
                  value="Option 1"
                  checked={selectedBreakfast.includes('Option 1')}
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 2"
                  checked={selectedBreakfast.includes('Option 2')}
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 3"
                  checked={selectedBreakfast.includes('Option 2')}
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 4"
                  checked={selectedBreakfast.includes('Option 2')}
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 5"
                  checked={selectedBreakfast.includes('Option 2')}
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 6"
                  checked={selectedBreakfast.includes('Option 2')}
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 7"
                  checked={selectedBreakfast.includes('Option 2')}
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 8"
                  checked={selectedBreakfast.includes('Option 2')}
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 9"
                  checked={selectedBreakfast.includes('Option 2')}
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 10"
                  checked={selectedBreakfast.includes('Option 2')}
                />
              </label>
            </div>



            <div>
            <label>Lunch:</label>
            <div>
              <label>
                Option 1
                <input
                  type="checkbox"
                  value="Option 1"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 2"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 3"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 4"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 5"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 6"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 7"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 8"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 9"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 10"
                />
              </label>
            </div>
            </div>



            <div>
            <label>Snack:</label>
            <div>
              <label>
                Option 1
                <input
                  type="checkbox"
                  value="Option 1"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 2"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 3"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 4"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 5"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 6"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 7"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 8"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 9"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 10"
                />
              </label>
            </div>
            </div>

            <div>
            <label>Dinner:</label>
            <div>
              <label>
                Option 1
                <input
                  type="checkbox"
                  value="Option 1"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 2"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 3"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 4"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 5"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 6"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 7"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 8"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 9"
                />
              </label>
            </div>
            <div>
              <label>
                Option 2
                <input
                  type="checkbox"
                  value="Option 10"
                />
              </label>
            </div>
            </div>


            {/* Add more options as needed */}
          </div>
     
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
  );
};

export default Stdntsgstmenu;
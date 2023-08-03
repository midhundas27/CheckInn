import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Switch from 'react-switch';
import '../styles/stdntmesscut.css';
import { FaRegCalendarCheck, FaWpforms, FaFileInvoice } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Checkinnstudentmesscut = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMeals, setSelectedMeals] = useState(['None']);
  const [selectedDatee, setSelectedDatee] = useState(['None']);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDateChangee = (date) => {
    setSelectedDatee(date);
    setSelectedMeals(['']);
  };


  const handleMealChangee = (meal) => {
    if (selectedMeals.includes(meal)) {
      setSelectedMeals(selectedMeals.filter((selectedMeal) => selectedMeal !== meal));
    } else {
      setSelectedMeals([...selectedMeals, meal]);
    }
  };

  return (
    <div className="checkinnstudentmesscut-container">
      <div className="checkinnstudentmesscut-sidebarbox">
      <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="checkinnstudenthome-logopicstudenthome"
            />
            
        <div className="calendar-container">
          <h1> Mess Calendar</h1>
          <div className="current-date">
            <span className="day">{selectedDate.toLocaleString('en-GB', { weekday: 'long' })}</span>
            <span className="date" onChange={togglePopup}>{selectedDate.getDate()}</span>
            <span className="month-year">{selectedDate.toLocaleString('en-GB', { month: 'long', year: 'numeric' })}</span>
          </div>

          <div className="calendar-grid">
            {/* Render calendar days */}
            {/* Replace this part with your calendar implementation */}
            <div>
              <Calendar onChange={() => handleDateChange(new Date())} />

            </div>
            <div className="react-calender"></div>
            
          </div>
          <Calendar onChange={handleDateChangee} />
          <button
                    type="button"
                    className="checkinnstudentmesscut-generate"
                  >
                    Get My Details
                  </button>
          
          <div
            className="toggle-container">
          
            <div className="toggle-switch1">
              <Switch
                id="Breakfast"
                checked={selectedMeals.includes('Breakfast')}
                onChange={() => handleMealChangee('Breakfast')}
                onColor="#266221"
                offColor="#b7b7b7"
                onHandleColor="#fff"
                offHandleColor="#fff"
                uncheckedIcon={false}
                checkedIcon={false}
                
              />
              </div>
             <span className="toggle-text1">Breakfast</span>  
            


            <div className="toggle-switch2">
              <Switch
                id="Lunch"
                checked={selectedMeals.includes('Lunch')}
                onChange={() => handleMealChangee('Lunch')}
                onColor="#266221"
                offColor="#b7b7b7"
                onHandleColor="#fff"
                offHandleColor="#fff"
                uncheckedIcon={false}
                checkedIcon={false}
              />
               </div>
                <span className="toggle-text2">Lunch</span>             
           


            <div className="toggle-switch3">
              <Switch
                id="Dinner"
                checked={selectedMeals.includes('Dinner')}
                onChange={() => handleMealChangee('Dinner')}
                onColor="#266221"
                offColor="#b7b7b7"
                onHandleColor="#fff"
                offHandleColor="#fff"
                uncheckedIcon={false}
                checkedIcon={false}
              />
              
              </div>
                <span className="toggle-text3">Dinner</span>              
            
          
          <div className="selected-meal">
            Selected Meals:<br></br> {selectedMeals.length > 0 ? selectedMeals.join(' ') : 'None'}
          </div>
          <span className="selected-date">Selected Date: {selectedDatee.toLocaleString('en-GB', { month: 'short', day: 'numeric', weekday: 'short' })}</span> <br></br>
          <button
                    type="button"
                    className="submit-button"
                  >
                    Submit
                  </button>
          </div>
         

          
          <div className="navigation">
            <ul className="sidebar-menu">
              <li>
                <NavLink to="/checkinnstudentmesscut" className={"active11"} exact activeClassName="active">
                  <FaRegCalendarCheck className="icon11" />
                  <span className="menu-text11">mess calender</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessmenu" className={"active22"} activeClassName="active">
                  <FaWpforms className="icon22" />
                  <span className="menu-text22">mess menu</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessbill" className={"active33"} activeClassName="active">
                  <FaFileInvoice className="icon33" />
                  <span className="menu-text33">mess bill</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkinnstudentmesscut;
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Switch from 'react-switch';
import '../styles/stdntmesscut.css';
import { FaRegCalendarCheck, FaWpforms, FaFileInvoice } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

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
    const currentDate = new Date();
    const nextWeek = new Date(currentDate.getTime() + 8 * 24 * 60 * 60 * 1000); // 7 days in milliseconds

    if (date >= currentDate && date <= nextWeek) {
      setSelectedDatee(date);
      setSelectedMeals(['']);

    }// Check if the selected date is today and set the class name accordingl
  };

  const handleMealChangee = (meal) => {
    if (selectedMeals.includes(meal)) {
      setSelectedMeals(selectedMeals.filter((selectedMeal) => selectedMeal !== meal));
    } else {
      setSelectedMeals([...selectedMeals, meal]);
    }
  };
  const handleFormSubmit = () => {
    // Process the form submission
    // ...

    // Reset values after submission
    setSelectedMeals(['None']);
    setSelectedDatee(['None']);
  };

const tileDisabled = ({ activeStartDate, date, view }) => {
  const currentDate = new Date();
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(currentDate.getTime() + 8 * 24 * 60 * 60 * 1000); // 7 days in milliseconds

  // Disable dates outside the range of today's date and next 7 days
  if (view === 'month') {
    return date < currentDate || date > nextWeek || date < activeStartDate || date < tomorrow;
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
            <div className="react-calendar"></div>
            
          </div>
          <Calendar
            onChange={handleDateChangee}
           tileDisabled={tileDisabled}
           maxDetail="month"
          />
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
                    onClick={handleFormSubmit}
                  >
                    Submit
                  </button>
          </div>
         

          
          <div className="navigation">
            <ul className="sidebar-menu">
              <li>
                <NavLink to="/checkinnstudentmesscut" className={"active11"} exact activeClassName="active">
                  <FaRegCalendarCheck className="icon11" />
                  <span className="menu-text11">Mess calendar</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessmenu" className={"active22"} activeClassName="active">
                  <FaWpforms className="icon22" />
                  <span className="menu-text22">Mess Menu</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessbill" className={"active33"} activeClassName="active">
                  <FaFileInvoice className="icon33" />
                  <span className="menu-text33">Mess bill</span>
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
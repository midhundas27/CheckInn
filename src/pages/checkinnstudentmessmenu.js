import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './styles.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMeal, setSelectedMeal] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedMeal('');
  };

  const handleMealChange = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="container">
      <h1>Calendar</h1>
      <Calendar className="calendar" onChange={handleDateChange} value={selectedDate} />
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${selectedMeal === 'breakfast' ? 'active' : ''}`}
          onClick={() => handleMealChange('breakfast')}
        >
          Breakfast
        </button>
        <button
          className={`toggle-button ${selectedMeal === 'lunch' ? 'active' : ''}`}
          onClick={() => handleMealChange('lunch')}
        >
          Lunch
        </button>
        <button
          className={`toggle-button ${selectedMeal === 'dinner' ? 'active' : ''}`}
          onClick={() => handleMealChange('dinner')}
        >
          Dinner
        </button>
      </div>
      <div className="selected-meal">
        Selected Date: {selectedDate.toLocaleDateString()} | Selected Meal: {selectedMeal}
      </div>
    </div>
  );
};

export default App;


















  {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>{selectedDate.toLocaleDateString()}</h2>
              <p>{selectedDate.toLocaleString('en-US', { weekday: 'long' })}</p>
              <div className="toggle-switches">
                <label>
                  <input
                    type="radio"
                    value="Breakfast"
                    checked={selectedMeal === 'Breakfast'}
                    onChange={handleMealChange}
                  />
                  Breakfast
                </label>
                <label>
                  <input
                    type="radio"
                    value="Lunch"
                    checked={selectedMeal === 'Lunch'}
                    onChange={handleMealChange}
                  />
                  Lunch
                </label>
                <label>
                  <input
                    type="radio"
                    value="Dinner"
                    checked={selectedMeal === 'Dinner'}
                    onChange={handleMealChange}
                  />
                  Dinner
                </label>
              </div>
              <button onClick={togglePopup}>Submit</button>
              
            </div>
          </div>
        )}
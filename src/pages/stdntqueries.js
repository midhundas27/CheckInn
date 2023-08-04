import React, { useState, useEffect } from 'react';
import '../styles/stdntqueries.css';
import { FaEnvelopeOpenText, FaRegAddressCard } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';


  const Stdntqueries = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [fullname, setFullname] = useState('');
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Limit the input to a maximum of 10 digits
    if (value.length <= 13) {
      // Add "+91" only when the user starts typing
      setPhoneNumber(value.startsWith('+91') ? value : '+91' + value);
    }
  };
  const capitalizeFirstLetter = (e) => {
    const value = e.target.value;
    setFullname(value.replace(/\b\w/g, (match) => match.toUpperCase()));
  };
  
  const handleMessageChange = (e) => {
    const value = e.target.value;
    // Capitalize the first letter of every sentence
    setMessage(value.replace(/(^\w|\.\s*\w)/g, (match) => match.toUpperCase()));
  };
  useEffect(() => {
    // Add event listener to the input field to disable Backspace, Delete, and Spacebar keys when the input is empty
    const handleKeyDown = (e) => {
      if (phoneNumber === '+91' && (e.key === 'Backspace' || e.key === 'Delete' || e.key === ' ')) {
        e.preventDefault();
      }
    };
    const handleKeyDown1 = (e) => {
      if (e.target.classList.contains('stdntqueries-input3') && e.key === ' ') {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown1);

    // Cleanup the event listener when the component unmounts
  
  
    document.querySelector('.stdntqueries-input3').addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown1);
      document.querySelector('.stdntqueries-input3').removeEventListener('keydown', handleKeyDown);
    };
  }, [phoneNumber]);
  
  return (
    <div className='stdntqueries-group2'>
        <h1> Queries Submission</h1>
    <div className='stdntqueries-sidebarbox2'>   
    <div className="stdntqueries-contents2">    
    <div className="queries-navigation2">
      <ul className="queries-sidebar2">
        <li>
          <NavLink to="/stdntqueries"className={"queriesactive1-111"} exact activeClassName="active">
            <FaEnvelopeOpenText className="queriesicon1-111" />
            <span className="queriesmenu-text1-111">queries</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntappaprov" className={"queriesactive2-222"} activeClassName="active">
            <FaRegAddressCard className="queriesicon2-222" />
            <span className="queriesmenu-text2-222">approvals</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
    </div>

    <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="stdntqueries-logopic2"
            />
    <div className='queries-container2'>
    

      <div className='queriestextinput12'>
    <input
        type="text"
        required
        placeholder="Full Name"
        value={fullname}
        onChange={capitalizeFirstLetter}
        className='stdntqueries-input1'
      />
      <input
        type="text"
        required
        placeholder="Admission No"
        className='stdntqueries-input2'
      />
      </div>

      <div className='queriestextinput34'>
      <input
      country="IN"
      pattern="^\+91[789]\d{9}$"
      defaultValue="+91"
      onChange={handlePhoneNumberChange}
      value={phoneNumber}
      maxLength="13"
      type="tel"
      placeholder="Phone"
      required
      className='stdntqueries-input3'
    />
    <input
        type="email"
        required
        placeholder="Email"
        
        className='stdntqueries-input4'
      />
      </div>
      <span className="complainttype">Complaint type:</span><br></br>
          <select id="complainttype" name="complainttype" required>
            <option value="">Select Category</option><br></br>
            <option value="inventory">Inventory</option>
            <option value="mess">Mess</option>
            <option value="safety-security">Safety and Security</option>
            <option value="health-medical">Health and Medical</option>
            <option value="administrative-management">Administrative and Management</option>
            <option value="internet-technology">Internet and Technology</option>
            <option value="others">Others</option>
          </select>

          <span className="complaintfile1">Upload complaint files / images (if any):</span>
          <input type="file" id="complaintfile" name="complaintfile" accept=".pdf, .jpg, .png"  />

      <textarea
        type="text"
        required
        placeholder="Message"
        value={message}
        onChange={handleMessageChange}
        className='stdntqueries-input5'
      />
      
       <button
                    type='submit'
                    className="submit-button2"
                  >
                    Submit
                  </button>

    </div>        
    </div>
  );
};

export default Stdntqueries;

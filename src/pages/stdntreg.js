import React, { useState, useEffect } from 'react';
import '../styles/stdntreg.css';
import {FaRegIdBadge} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const Stdntreg = () => {
    const [stdntPhoneNumber2, setStudentPhoneNumber2] = useState('');
    const [parntPhoneNumber2, setParentPhoneNumber2] = useState('');
    const [fullname2, setFullname2] = useState('');
    const handleStudentPhoneNumberChange2 = (e) => {
        const value = e.target.value;
        // Limit the input to a maximum of 10 digits
        if (value.length <= 13) {
          // Add "+91" only when the user starts typing
          setStudentPhoneNumber2(value.startsWith('+91') ? value : '+91' + value);
        }
      };
      const handleParentPhoneNumberChange2 = (e) => {
        const value = e.target.value;
        // Limit the input to a maximum of 10 digits
        if (value.length <= 13) {
          // Add "+91" only when the user starts typing
          setParentPhoneNumber2(value.startsWith('+91') ? value : '+91' + value);
        }
      };

      const capitalizeFirstLetter2 = (e) => {
        const value = e.target.value;
        setFullname2(value.replace(/\b\w/g, (match) => match.toUpperCase()));
      };
      useEffect(() => {
        // Add event listener to the input field to disable Backspace, Delete, and Spacebar keys when the input is empty
        const handleKeyDown11 = (e) => {
          if (stdntPhoneNumber2 === '+91' && (e.key === 'Backspace' || e.key === 'Delete' || e.key === ' ')) {
            e.preventDefault();
          }
        };
          const handleKeyDown22 = (e) => {
      if (e.target.classList.contains('stdnt-phno') && e.key === ' ') {
        e.preventDefault();
      }
    };
        const stdntInput2 = document.getElementById('stdnt-phno');
        stdntInput2.addEventListener('keydown', handleKeyDown22);
        const stdntInput1 = document.getElementById('stdnt-phno');
        stdntInput1.addEventListener('keydown', handleKeyDown11);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          stdntInput2.removeEventListener('keydown', handleKeyDown22);
          stdntInput1.removeEventListener('keydown', handleKeyDown11);
        };
      }, [stdntPhoneNumber2]);

      useEffect(() => {
        // Add event listener to the input field to disable Backspace, Delete, and Spacebar keys when the input is empty
        const handleKeyDown111 = (e) => {
          if (parntPhoneNumber2 === '+91' && (e.key === 'Backspace' || e.key === 'Delete' || e.key === ' ')) {
            e.preventDefault();
          }
        };
          const handleKeyDown222 = (e) => {
      if (e.target.classList.contains('parnt-phno') && e.key === ' ') {
        e.preventDefault();
      }
    };
        const parntInput22 = document.getElementById('parnt-phno');
        parntInput22.addEventListener('keydown', handleKeyDown222);
        const parntInput11 = document.getElementById('parnt-phno');
        parntInput11.addEventListener('keydown', handleKeyDown111);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          parntInput22.removeEventListener('keydown', handleKeyDown222);
          parntInput11.removeEventListener('keydown', handleKeyDown111);
        };
      }, [parntPhoneNumber2]);
    

   
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ') {
        e.preventDefault();
      }
    };

    const stdntInput = document.getElementById('stdnt-phno');
    const parntInput = document.getElementById('parnt-phno');

    stdntInput.addEventListener('keypress', handleKeyPress);
    parntInput.addEventListener('keypress', handleKeyPress);

    // Cleanup the event listener when the component unmounts
    return () => {
      stdntInput.removeEventListener('keypress', handleKeyPress);
      parntInput.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
      
      

  return (
    <div className="stdntreg-container">
        <h1>Student Registration</h1>
      <div className="stdntreg-sidebarbox">
      
      <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstdntreg"
              className="logopic-stdntreg" />
      
          <div className="stdntreg-navigation">
            <ul className="stdntreg-sidebarmenu">
              <li>
                <NavLink to="/stdntreg" className={"stdntreg-active11"} exact activeClassName="active">
                  <FaRegIdBadge className="stdntreg-icon11" />
                  <span className="stdntregmenu-text11">Registration</span>
                </NavLink>
              </li>
            </ul>
          </div>
          </div>



                {/* Student Registration Form */}
                <div className='stdntreg-form-contents'>
      <div className="stdntreg-form-container">
        <h2>Registration Form</h2>
        <p>Rules and regulations:</p>
        <ol>
          <li> All the students belonging to the categories viz. OTHER STATE / GOVERNMENT OF INDIA NOMINEE should be considered for admission to hostel.</li><br></br>
          <li> Out of the remaining seats, 30% should be earmarked for reservation categories such as SC / ST / PH etc of UG / PG students.</li><br></br>
          <li> From the remaining, 10% should be reserved for PG students.</li><br></br>
          <li> While considering application from general candidates, Distance and Annual income (based on the attestaion of concerned authorities) should be considered for allocation of hostel facility.</li><br></br>
          {/* Add more rules as needed */}
        </ol>

        <form className="stdntreg-form">
          <span className="name">Name:</span>
          <input type="text" id="name" name="name" value={fullname2} onChange={capitalizeFirstLetter2} required />

          <span className="admissionNo">Admission No:</span>
          <input type="text" id="admissionNo" name="admissionNo" required />

          <span className="year">Year:</span>
          <select id="year" name="year" required>
            <option value="">Select Year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <span className="department">Department:</span>
          <select id="department" name="department" required>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="MECH">MECH</option>
            <option value="IT">IT</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="CIVIL">CIVIL</option>
          </select>
          <span className="email">Email</span>
          <input type="email" id="email" name="email" required />
          <span className="sphno">Phone Number:</span>
          <input type="tel" id="stdnt-phno" country="IN" 
          pattern="^\+91[789]\d{9}$" defaultValue="+91" onChange={handleStudentPhoneNumberChange2} 
          value={stdntPhoneNumber2} required />

          <span className="parentsName">Parent's Name:</span>
          <input type="text" id="parentsName" name="parentsName" value={fullname2} onChange={capitalizeFirstLetter2} required />

          <span className="pphno">Parent's Phone Number:</span>
          <input type="tel" id="parnt-phno" country="IN" 
          pattern="^\+91[789]\d{9}$" defaultValue="+91" onChange={handleParentPhoneNumberChange2} 
          value={parntPhoneNumber2} required />

          <span className="distanceFromHome">Distance from home:</span>
          <input type="number" id="distanceFromHome" name="distanceFromHome" step="0.1" required />     

          <span className="income">Income:</span>
          <input type="number" id="income" name="income" step="1000"  required />

          <span className="lastSemesterSGPA">Last Semester SGPA:</span>
          <input type="number" id="lastSemesterSGPA" name="lastSemesterSGPA" step="0.01" required />

          <label>Whether belongs to SC/ST?</label>
          <div>
            <input type="radio" className="scstYes" name="scst" value="Yes" required />
            <label className="scstYes1">Yes</label><br></br><br></br>
            <input type="radio" className="scstNo" name="scst" value="No" required />
            <label className="scstNo1">No</label><br></br><br></br>
          </div>

          <label>Whether belongs to BPL or lower?</label>
          <div>
            <input type="radio" className="bplYes" name="bpl" value="Yes" required />
            <label className="bplYes1">Yes</label><br></br><br></br>
            <input type="radio" className="bplNo" name="bpl" value="No" required />
            <label className="bplNo1">No</label><br></br><br></br>
          </div>

          <label>Whether Physically handicapped or not?</label>
          <div>
            <input type="radio" className="handicapYes" name="handicap" value="Yes" required />
            <label className="handicapYes1">Yes</label><br></br><br></br>
            <input type="radio" className="handicapNo" name="handicap" value="No" required />
            <label className="handicapNo1">No</label><br></br><br></br>
          </div>



          <span className="incomeCertificate">Upload a copy of income certificate:</span>
          <input type="file" id="incomeCertificate" name="incomeCertificate" accept=".pdf, .jpg, .png" required />

          <span className="casteCertificate">Upload a copy of caste certificate(if applicable):</span>
          <input type="file" id="casteCertificate" name="casteCertificate" accept=".pdf, .jpg, .png" />

          <span className="handicapCertificate">Upload a copy of physically handicapped certificate(if applicable):</span>
          <input type="file" id="handicapCertificate" name="handicapCertificate" accept=".pdf, .jpg, .png" />

          <span className="rationCard">Upload a copy of ration card(if applicable):</span>
          <input type="file" id="rationCard" name="rationCard" accept=".pdf, .jpg, .png" />

          <span className="markList">Upload a copy of marklist:</span>
          <input type="file" id="markList" name="markList" accept=".pdf, .jpg, .png" required />

          <span className="addressProof">Upload a copy of aadhar / passport / license / voter's id:</span>
          <input type="file" id="addressProof" name="addressProof" accept=".pdf, .jpg, .png" required />

          {/* Add more file upload inputs for other certificates and documents */}
          {/* <label>...</label> */}

          <div className="declaration">
          <input type="checkbox" className="declarationCheckbox" required />
            <span className="declarationCheck">I have read all those guidelines and have given all original details and proof.</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Stdntreg;
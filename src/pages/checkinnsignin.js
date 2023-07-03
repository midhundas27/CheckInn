import React, { useState } from 'react';
/*import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import {  useNavigate } from "react-router-dom";*/
import '../styles/checkinnsignin.css';
/*import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";*/

const Checkinnsignin = () => {
        const [signInAs, setSignInAs] = useState("admin");
        
        const handleSignInAsChange = (event) => {
          setSignInAs(event.target.value);
        };
      
        const handleSignInFormSubmit = (event) => {
          event.preventDefault();
          // Handle sign-in logic
          
          console.log('Sign In Form Submitted');
          console.log('Sign In As:', signInAs);
          
        };


         /* const { dispatch } = useContext(AuthContext);
          const navigate = useNavigate();
        
            dispatch({ type: "LOGIN_START" });
        
            try {
              const res = await fetch(`${BASE_URL}/auth/login`, {
                method: "post",
                headers: {
                  "content-type": "application/json",
                },
                signInAs: "include",
                body: JSON.stringify(signInAs),
              });
        
              const result = await res.json();
              if (!res.ok) alert(result.message);
        
              console.log(result.data);
        
              dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
              navigate("/");
            } catch (err) {
              dispatch({ type: "LOGIN_FAILURE", payload: err.message });
            }*/
          


  return (
    <div className="checkinnsignin-container">
      <div className="checkinnsignin-checkinnsignin">
        <div className="checkinnsignin-group">
          <div className="checkinnsignin-frame">
            
            <img
              alt="checkinnsigninpic1110"
              src="./images/checkinnsigninpic.png"
              className="checkinnsignin-checkinnsigninpic"
            />
          </div>
          <div className="checkinnsignin-contents">
            <div className="checkinnsignin-signin">
              <div className="checkinnsignin-signincontents">
                <div className="checkinnsignin-container1">
                <form onSubmit={handleSignInFormSubmit}> 
                <div className="form-group">
                  <div className="checkinnsignin-help">
                    <div className="checkinnsignin-rememberme">
                      <span className="checkinnsignin-text">Remember me</span>
                    </div>
                  </div>
                  <span className="checkinnsignin-text1">
                    <span>Sign In</span>
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Username"
                    id='username'
                    onChange={handleSignInAsChange}
                    className="checkinnsignin-textinput input"
                  />
                  <input
                    type="text"
                    
                    required
                    placeholder="Password"
                    id='password'
                    onChange={handleSignInAsChange}
                    className="checkinnsignin-textinput1 input"
                  />
                  <input type="checkbox" className="checkinnsignin-checkbox" />
                  <button
                    type="button"
                    className="checkinnsignin-button"
                  >
                    Sign In
                  </button>
                </div>
                </form>
          
              </div>
              
              <select
              id="sign-in-as" value={signInAs} onChange={handleSignInAsChange}
                required
                className="checkinnsignin-select1"
               
              >
            

                <option value="usertype-admin" selected>
                  Admin
                
                   </option>
                <option value="usertype-student">Student</option>
                <option value="usertype-messsecretary">Mess Secretary</option>
               
              </select>
              <button type="button" className="checkinnsignin-button1">
                Need Help?
              </button>
             
            </div>
            
      </div>
            <img
              alt="checkinnsigninlogo2824"
              src="./images/checkinnsigninlogo.png"
              className="checkinnsignin-checkinnsigninlogo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Checkinnsignin



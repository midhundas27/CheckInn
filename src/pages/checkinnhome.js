import React from 'react';

import '../styles/checkinnhome.css';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaCircle } from 'react-icons/fa';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom';

const Checkinnhome = (props) => {
  return (
    <div className="checkinnhome-container">
      <div className="checkinnhome-checkinnhome">
        <div className="checkinnhome-group">
          <div className="checkinnhome-frame">
            <img
              src="./images/checkinnhomepic.png"
              alt="checkinnhomepic156"
              className="checkinnhome-checkinnhomepic"
            />
          </div>
          <div className="checkinnhome-contents">
            <div className="checkinnhome-title">
              <div className="checkinnhome-check-inn">
                <span className="checkinnhome-text">
                  <span>
                    Check
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="checkinnhome-text2">
                  <span>Inn</span>
                </span>
              </div>
              <span className="checkinnhome-text4">
                <span>manage your hostel here!</span>
              </span>
            </div>
            <div className="checkinnhome-titlebar">
              <img
                src="./images/checkinnhomelogo.png"
                alt="checkinnhomelogo2824"
                className="checkinnhome-checkinnhomelogo"
              />
              <Link to={"/checkinnsignin"}>
              <button type="button" className="checkinnhome-button">
                Sign In
              </button>
              </Link>
             
            </div>
            <div className="checkinnhome-container1">
            <li>
                <NavLink to="/checkinnstudentconnectus" className={"checkinnhome-button1"} exact activeClassName="active">
                <FaCircle className="icon111" />
                <FaAngleRight className="icon222" />
                  <span className="text111">Connect Us</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentaboutus" className={"checkinnhome-button2"} exact activeClassName="active">
                <FaCircle className="icon333" />
                <FaAngleRight className="icon444" />
                  <span className="text222">About Us</span>
                </NavLink>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkinnhome


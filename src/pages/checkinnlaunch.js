import React from 'react';

import '../styles/checkinnlaunch.css';

const Checkinnlaunch = (props) => {
  return (
    <div className="checkinnlaunch-container">
      <div className="checkinnlaunch-checkinnlaunch">
        <div className="checkinnlaunch-group">
          <div className="checkinnlaunch-frame">
            <img
              alt="pic113"
              src="./images/checkinnlaunchbg.png"
              className="checkinnlaunch-pic"
            />
          </div>
          <div className="checkinnlaunch-contents">
            <div className="checkinnlaunch-checkinn">
              <span className="checkinnlaunch-text">
                <span>Inn</span>
              </span>
              <span className="checkinnlaunch-text2">
                <span>
                  Check
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <img
              alt="logopiclaunch2821"
              src="./images/checkinnlaunchlogo.png"
              className="checkinnlaunch-logopiclaunch"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkinnlaunch

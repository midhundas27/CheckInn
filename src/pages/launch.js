import React, { useEffect } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import '../styles/launch.css';

const Checkinnlaunch = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/checkinnhome');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="checkinnlaunch-container fade-out">
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
      <NavLink to="/checkinnhome" className="hidden-navlink" />
    </div>
  )
}

export default Checkinnlaunch

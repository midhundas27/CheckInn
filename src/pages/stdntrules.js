import React from 'react';
import '../styles/stdntrules.css';
import { FaHome, FaCog, FaBell, FaQuestionCircle} from 'react-icons/fa';
import { NavLink} from 'react-router-dom';


  const Stdntrules = () => {



  return (
    <div className='stdntrules-group'>
    <div className='stdntrules-sidebarbox'>      
    <div className="rules-navigation">
      <ul className="rules-sidebar">
        <li>
          <NavLink to="/checkinnstudenthome"className={"rules-1"} exact activeClassName="active">
            <FaHome className="rulesicon-1" />
            <span className="rulestext-1">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntsettings" className={"rules-2"} activeClassName="active">
            <FaCog className="rulesicon-2" />
            <span className="rulestext-2">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntnotify" className={"rules-3"} activeClassName="active">
            <FaBell className="rulesicon-3"/>
            <span className="rulestext-3">Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stdntconnect" className={"rules-4"} activeClassName="active">
            <FaQuestionCircle className="rulesicon-4"/>
            <span className="rulestext-4">Help</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
    <div className="stdntrules-headerbox">
    <NavLink to="/stdntsettings"> <span className="rulestext-5">Account</span></NavLink> 
    <NavLink to="/stdntnotifysettings"><span className="rulestext-6">Notifications</span></NavLink>

    <NavLink to="/stdntrules"><span className="rulestext-7">About</span></NavLink>

    <img className='rulespic' alt='selection marker' src='./images/settings-indicator.png'/>
    </div>
    <h1>
        Rules and Regulations
      </h1>
    <div className='stdntrules-contents'>
      
      <h2 className='allocation1'>
        Allotment of rooms:
      </h2>
      <ol className='allocation'>
        <li>
            Allotment of rooms is the discretion of the warden.
             Inmates should stay only in rooms allotted for them.
             Relocating to other rooms without permission will be treated as a serious violation
        </li>
        <li>
            Each student will be responsible for the furniture available in the rooms.
        </li>
        <li>
            Inmates should bring their own beddings, buckets, mug, plate, glass and cutleries (if required).
        </li>
        <li>
            Rooms are provided with power supply.
             Electrical installation provided in the rooms should not be tampered with.
              Any infringement will be dealt with stern action and loss will be recovered from the concerned.
        </li>
        <li>
            Students should see that the light and fans are switched off while they are leaving the rooms.
             Reducing electricity and water consumption is a collective responsibility.
        </li>
        <li>
            Inmates are not allowed to bring guests into the hostel without permission of the warden.
        </li>
        <li>
        If you want to vacate from the hostel, a written request should be submitted to the warden.
         If you just leave without any intimation, you will be treated as an inmate and expenses will be billed against your name as usual.
        </li>
        <li>
        Students are not permitted to have other electrical equipment such as heaters, kettles and iron boxes inside their rooms.
         If such electrical equipment is found to be in someone’s possession, a fine will be levied immediately.
        </li>
      </ol>
      <h2 className='catering1'>
        Mess:
      </h2>
      <ol className='catering'>
        <li>
        All inmates are automatically members of Hostel mess and they have to register their names in the mess.
         No request to stay in the hostel without availing the mess facility will be entertained.
        </li>
        <li>
        Vegetarian and non-vegetarian foods will be available in the mess.
        </li>
        <li>
        Under no circumstances, inmates should bring outsiders into the mess hall.
         Such misconduct will result in expulsion from the hostel.
          If hostel staff tries to ascertain your identity in the mess hall, inmates have to comply with it.
        </li>
        <li>
        The hostel mess committee will be formed each year and the mess committee members will be responsible for the proper functioning of the mess for the month.
        </li>
        <li>
        Students have to take food in the mess hall and they are not permitted to carry food items, plates or spoons from the mess hall to rooms for their personal use.
        </li>
        <li>
        Be mindful about the waste of food you take on your platter.
        </li>
        <li>
        Minimum allowable mess reduction period at a time will be two days.
         Those who wish to avail mess cuts should note it down in the mess register maintained in the hostel office at least 2 days before the start of the mess reduction period.
        </li>
        <li>
        At the end of every month the list of boarders attendance and the monthly bill will be published. Any discrepancy can be pointed out for correction.
        </li>
      </ol>
      <h2 className='discipline1'>
        General discipline:
      </h2>
      <ol className='discipline'>
        <li>
        At night, a security staff will be on duty.
         In/out movement from/to hostel will be strictly under his supervision.
        </li>
        <li>
        Inmates should keep their rooms scrupulously clean.
         Discarded rags and papers should not be thrown about in the room, terrace and premises.
          The doors, rooms, walls etc. should not be disfigured by writing, sticking hand bills, posters etc.
        </li>
        <li>
        They should behave with restraint and decorum.
         Shouting, reading aloud, playing music/ movies aloud and any acts likely to disturb other inmates should be avoided.
        </li>
        <li>
        All members are expected to be in the hostel before 9.30 p.m.
         Late comers will be admitted only after signing in the late register kept with the matron at LH and security staff at MH.
        </li>
        <li>
        Members are not permitted to convene meetings of any sort anywhere in the hostel or its premises without warden's written sanction obtained on a written requisition.
         Any gathering, political/religious or of any other nature, which would hamper the peace, harmony and coexistence of inmates will result in serious actions against the perpetrators.
        </li>
        <li>
        Inmates should not invite outsiders to the hostel for any purpose.
        </li>
        <li>
        While playing TV in the TV room, demand of the majority should be generally considered while choosing programmes/channels.
        </li>
        <li>
        Inmates should comply with orders and cooperate with the hostel management, in case any water shortage / disruption in water supply occur.
        </li>
        <li>
        Students residing in the hostel should not tease or rag their fellow students, juniors or anybody.
         If they violate this rule, they shall be summarily dismissed from the hostel and strict legal actions will be taken against them.
        </li>
        <li>
        Consumption of tobacco and alcohol is strictly prohibited and offenders will be expelled immediately.
         If anyone found using /supplying /abetting the supply of drugs or narcotic substances will be handed over to the police and criminal proceedings will be initiated.
        </li>
        <li>
        Students are strictly forbidden from possessing weapons of any sort.
        </li>
        <li>
        Inmates should behave politely with hostel staff.
         Rude behaviour, if reported, will result in demerit points, which will be held against the offenders in future admissions to hostels.
          Indecent behaviour and indiscipline will result in immediate expulsion from the hostel and blacklisting from future admission to the MH/LH.
        </li>
        <li>
        Playing football inside the MH building is not allowed.
        </li>
        <li>
        Doors to the terrace will be locked at 9.30 PM. No requests to use the terrace after that will be accepted.
        </li>
        <li>
        Playing football on the MH terrace at any time of the day is not allowed and disciplinary action will be taken against the violators.
        </li>
        <li>
        Breach, either wilful or by ignorance , of any of the above rules of the hostel will render the offender liable to suspension or dismissal and the matter will be reported to the principal and guardian.
        </li>
      </ol>
    </div>
    <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="stdntrules-logopic"
            />
    </div>
  );
};

export default Stdntrules;

import React from 'react';
import './header.css'; 
import Nlogo from '../../assets/netflix-logo.webp';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className='header-container'>
        <div className="header-left">
          <img src={Nlogo} alt="Netflix Logo" width={60} height={60}/>
          <ul>
            <li>Home</li>
            <li>TVshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div> 
      </div>
    </div>
  );
}

export default Header;
import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <img src="/linkedin.png" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder='Search'/>
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={ChatIcon} title='Messages'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>

        <HeaderOption avatar='/linkedin.png' title='me'/>
      </div>
    </div>
  )
}

export default Header
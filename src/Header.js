import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

import './Header.css'
import HeaderOption from './HeaderOption';


function Header() {
  return (
    <div className='header'>
        <div className="header-left">
            <img src="/linkedin-icon.png" alt="linkedin" />

            <div className="header-search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header-right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Chats"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="/linkedin-icon.png" title="me"/>
        </div>
    </div>
  )
}

export default Header
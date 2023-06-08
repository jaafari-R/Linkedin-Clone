import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';

import { auth } from './firebase';

import HeaderOption from './HeaderOption';


function Header() {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className="header">
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

        <HeaderOption avatar='/linkedin.png' title='Me' />

        <span onClick={logoutApp}>
        <HeaderOption Icon={LogoutIcon} title='Signout' />
        </span>
      </div>
    </div>
  )
}

export default Header
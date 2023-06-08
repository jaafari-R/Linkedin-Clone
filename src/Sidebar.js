import React from 'react'
import './Sidebar.css'

import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import { Avatar } from '@mui/material'


function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="/bg-img.jpg" alt="" />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who's viewed your profile</p>
          <p className="sidebar__statNumber">1,005</p>
        </div>
        <div className="sidebar__stat">
          <p>Impressions of your post</p>
          <p className='sidebar__statNumber'>22,537</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('ReactJS')}
        {recentItem('NodeJS')}
        {recentItem('C++')}
      </div>
    </div>
  )
}

export default Sidebar
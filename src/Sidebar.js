import React from 'react'

import { Avatar } from '@mui/material'

import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar-top">
                <img src="dummy-bg.jpeg" alt="" />
                <Avatar className='sidebar-avatar' src='/linkedin-icon.png'/>
                <h2>Ramadan Jaafari</h2>
                <h4>jaafariramadan@gmail.com</h4>
            </div>

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="sidebar-statNumber">1000</p>
                </div>
                <div className="sidebar-stat">
                    <p>Impressions of your post</p>
                    <p className="sidebar-statNumber">2000</p>
                </div>
            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('reactjs')}
                {recentItem('reactjs')}
                {recentItem('reactjs')}
            </div>
        </div>
    )
}

export default Sidebar
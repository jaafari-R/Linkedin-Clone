import React from 'react'
import './Feed.css'

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import InputOptions from './InputOptions';

function Feed() {
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type='submit'>Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title='Photo' color='#70b5f9'/>
          <InputOptions Icon={SmartDisplayIcon} title='Video' color='#7fc15e'/>
          <InputOptions Icon={CalendarMonthIcon} title='Event' color='#e7a33e'/>
          <InputOptions Icon={NewspaperIcon} title='Write Article' color='#f5987e'/>
        </div>
      </div>
    </div>
  )
}

export default Feed
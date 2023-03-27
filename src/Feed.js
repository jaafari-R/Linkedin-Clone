import React from 'react'

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import InputOption from './InputOption';

import './Feed.css'

function Feed() {
    return (
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form action>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9"/>
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#70B5F9"/>
                    <InputOption title="Event" Icon={EventNoteIcon} color="#70B5F9"/>
                    <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#70B5F9"/>
                </div>
            </div>
        </div>
    )
}

export default Feed
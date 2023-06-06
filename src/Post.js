import React from 'react';
import './Post.css';

import { Avatar } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

import InputOptions from './InputOptions';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title='Like' />
        <InputOptions Icon={MessageOutlinedIcon} title='Comment' />
        <InputOptions Icon={RepeatIcon} title='Repost' />
        <InputOptions Icon={SendIcon} title='Send' />
      </div>
    </div>
  )
}

export default Post
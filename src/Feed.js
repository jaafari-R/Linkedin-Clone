import React, { useEffect, useState } from 'react'
import './Feed.css'

import Post from './Post';

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import InputOptions from './InputOptions';

import firebase from 'firebase/compat/app';
import { db } from './firebase';

function Feed() {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setPosts(
          snapshot.docs.map(doc => (
            {
              id: doc.id,
              data: doc.data()
            }
          )
        ))
    })
  }, []);

  const sendPost = e => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  const handleChange = setState => event => {
    setState(event.target.value);
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={handleChange(setInput)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title='Photo' color='#70b5f9'/>
          <InputOptions Icon={SmartDisplayIcon} title='Video' color='#7fc15e'/>
          <InputOptions Icon={CalendarMonthIcon} title='Event' color='#e7a33e'/>
          <InputOptions Icon={NewspaperIcon} title='Write Article' color='#f5987e'/>
        </div>
      </div>

      {/* Posts */}
      {   
        posts.map(({ id, data: { name, description, message, photoUrl}}) => (
          <Post 
            key={id}
            name={name} 
            description={description} 
            message={message} 
            photoUrl={photoUrl}/>
        ))
      }
      {/* <Post name='Ramadan Jaafari' description='I am a description' message='I am a message'/> */}
    </div>
  )
}

export default Feed
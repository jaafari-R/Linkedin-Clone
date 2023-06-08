import React, { useState } from 'react';
import './Login.css';

import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

import { auth } from './firebase';

import { toast } from 'react-hot-toast';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const dispatch = useDispatch();

  const handleChange = setState => e => {
    setState(e.target.value);
  }

  const loginApp = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName:  userAuth.user.name,
          photoUrl: userAuth.user.photoUrl
        }))
      })
      .catch(error => {
        toast.error(error.message);
      })
  }

  const register = () => {
    if(!name) {
      return toast.error('Please enter your full name!');
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: photoUrl
        })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: photoUrl
            }))
          })
      })
      .catch(error => {
        toast.error(error.message);
      })
  }

  return (
    <div className='login'>
      <img src="/linkedin-full.png" alt="" />
      <form>
        <input 
          onChange={handleChange(setName)} 
          value={name} 
          placeholder='Full Name' 
          type="text" 
        />

        <input 
          onChange={handleChange(setEmail)} 
          value={email} 
          placeholder='Email' 
          type="email" 
        />
        <input 
          onChange={handleChange(setPassword)} 
          value={password} 
          placeholder='Password' 
          type="password" 
        />
        
        <input 
          onChange={handleChange(setPhotoUrl)} 
          value={photoUrl} 
          placeholder='PhotoUrl' 
          type="text" 
        />

        <button onClick={loginApp} type='submit'>SignIn</button>
      </form>
      <p>Not a member?
        <span onClick={register} className="login__register"> Register Now!</span>
      </p>
    </div>
  )
}

export default Login
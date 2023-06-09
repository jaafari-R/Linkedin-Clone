import React, { useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout, login } from './features/userSlice';

import { auth } from './firebase';

import { Toaster } from 'react-hot-toast';

import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        )
      }
      else
        dispatch(logout());
    })
  }, [])

  return (
    <div className="app">
      {!user ? (<Login />)
          : (
            <div>
              <Header />

              <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            </div>
          )
      }
      <Toaster
        position="bottom-center"
      />
    </div>
  );
}

export default App;

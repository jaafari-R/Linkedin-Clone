import React from 'react';
import './App.css';

import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);

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
    </div>
  );
}

export default App;

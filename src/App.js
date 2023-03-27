import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app-body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>


    </div>
  );
}

export default App;
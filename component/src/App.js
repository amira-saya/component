import React from 'react';
import logo from './logo.svg';
import './App.css';
import Address from './Profile/Address'
import ProfilPhoto from './Profile/ProfilPhoto'
import FullName from './Profile/FullName'

function App() {
  return (
    <div className="App">
    <FullName/>
     <ProfilPhoto/>
     <Address/>
    </div>
  );
}

export default App;

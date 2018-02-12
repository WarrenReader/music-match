import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './components/header.js';
import UserProfile from './components/userprofile.js';
import Axios from 'axios';
import ArtistProfile from './components/artistProfile.js';
import Similar from './components/similar.js';
import Footer from './components/footer.js';

export default class App extends Component {
  constructor() {
    super()
    
}


  render() {

    return (
      <div className="app">
        <Header/>
        <ArtistProfile />
        <UserProfile />
        <Footer />
      </div>
    );
  }
}
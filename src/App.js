import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './components/header.js';
import UserProfile from './components/userProfile.js';
import ArtistProfile from './components/artistProfile.js';
import Footer from './components/footer.js';
import CreateUser from './components/createUser.js';
import DeleteUser from './components/deleteUser.js';

export default class App extends Component {


  render() {

    return (
      <div className="app">
        <Header/>
        <ArtistProfile />
        <UserProfile />
        <CreateUser />
        <DeleteUser />
        <Footer />
      </div>
    );
  }
}
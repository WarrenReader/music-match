import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './components/header.js';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super()
    
    this.state = {
      user: {}
    }

}

  componentDidMount(){
    axios.get('/api/1').then(res => 
      this.setState({
        user: res.data
      })
    );
  }


  render() {

    return (
      <div className="app">
      <Header user={this.state.user} />
      </div>
    );
  }
}



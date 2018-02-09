import React, {Component} from 'react';
import axios from 'axios';
import './styles/header.css';

export default class Header extends Component {
  constructor() {
    super();
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
  let {firstName} = this.state.user;

  return (
    <header id="header">
      <h1><a href="/">MusicMatch</a></h1>
      <p>Welcome, {firstName}</p>
    </header>
    )
  }
}






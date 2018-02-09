import React, {Component} from 'react';
import './styles/header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

  }

render() {
  let {firstName} = this.props.user;

  return (
    <header id="header">
      <h1><a href="/">MusicMatch</a></h1>
      <p>Welcome, {firstName}</p>
    </header>
    )
  }
}






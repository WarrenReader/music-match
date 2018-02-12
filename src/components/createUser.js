import React, {Component} from 'react';
import axios from 'axios';
import './styles/create-user.css';

export default class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: ''
    }

    this.createNewUser = this.createNewUser.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    })
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  createNewUser() {
    let {name, email} = this.state;
    axios.post('/api/create-user', {name, email}).then(res => console.log(res));
  }


  render() {

    let {name, email} = this.state;
    
    return (
      <div>
        <div className="create-user-dropdown">
        <input id="collapsible3" className="toggle" type="checkbox" />
        <label htmlFor="collapsible3" className="lbl-toggle">Create New User</label>
          <div className="collapsible-content">
            <div className="content-inner">
              <div id="create-user">
                <p>
                <span className="lighten">Name:</span>
                <input className="inputField" value={name} onChange={(e) => this.updateName(e)}/>
                </p>
                <p>
                <span className="lighten">Email:</span>
                <input className="inputField" value={email} onChange={(e) => this.updateEmail(e)}/>
                </p>
                <button className="create-user-button" onClick={this.createNewUser}>Create New User</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
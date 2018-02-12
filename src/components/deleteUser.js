import React, {Component} from 'react';
import axios from 'axios';
import './styles/delete-user.css';

export default class DeleteUser extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      id: ''
    };

    this.deleteUser = this.deleteUser.bind(this);
  }

  updateName(e){
    this.setState({
      name: e.target.value
    })
  }

  updateId(e) {
    this.setState({
      id: e.target.value
    })
  }

  deleteUser() {
    axios.delete(`/api/delete-user/${this.state.id}/${this.state.name}`).then(res => console.log(res));
  } 


  render() {

    let {name, id} = this.state;

    return (
      <div>
        <div className="create-user-dropdown">
        <input id="collapsible4" className="toggle" type="checkbox" />
        <label htmlFor="collapsible4" className="lbl-toggle">Delete User</label>
          <div className="collapsible-content">
            <div className="content-inner">
            <p>
            <span className="lighten">Confirm Name</span>
            <input className="inputField" value={name} onChange={(e) => this.updateName(e)}/>
            </p>
            <p>
            <span className="lighten">Confirm ID</span>
            <input className="inputField" value={id} onChange={(e) => this.updateId(e)}/>
            </p>
            <button className="delete-user-button" onClick={this.deleteUser}>Delete User</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
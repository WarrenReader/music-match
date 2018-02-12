import React, {Component} from 'react';
import './styles/user-profile.css';
import axios from 'axios';

export default class UserProfile extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: '',
        email: '',
        id: -1,
        favoriteArtists: [],
        favoriteGenres: []
    }
  }

  this.updateName = this.updateName.bind(this);
  this.saveButton = this.saveButton.bind(this);
  this.editButton = this.editButton.bind(this);

}


  componentDidMount() {
    axios.get('/api/1').then(res => 
      this.setState({
        user: res.data
      })
    );
  }


  updateName(e) {
    let newName = e.target.value;
    console.log(newName);
    this.setState({
      user: {
        name: newName,
        email: this.state.user.email,
        id: this.state.user.id,
        favoriteArtists: this.state.user.favoriteArtists,
        favoriteGenres: this.state.user.favoriteGenres
      }
    })
  }

  updateEmail(e) {
    let newEmail = e.target.value;
    console.log(newEmail);
    this.setState({
      user: {
        name: this.state.user.name,
        email: newEmail,
        id: this.state.user.id,
        favoriteArtists: this.state.user.favoriteArtists,
        favoriteGenres: this.state.user.favoriteGenres
      }
    })
  }

  updateFavoriteArtists(e) {
    let newFavoriteArtists = e.target.value;
    console.log(newFavoriteArtists);
    this.setState({
      user: {
        name: this.state.user.name,
        email: this.state.user.email,
        id: this.state.user.id,
      }
    })
  }


  saveButton(){
    axios.put('/api/update', this.state.user).then((res) => console.log(res));
    let inputFields = document.getElementsByClassName("inputField");
    inputFields[0].setAttribute("disabled", "true");
    inputFields[1].setAttribute("disabled", "true");
  }

  editButton() {
    let inputFields = document.getElementsByClassName("inputField");
    inputFields[0].removeAttribute("disabled");
    inputFields[1].removeAttribute("disabled");
  }

  render() {

    let {name, email} = this.state.user;

    return (

      <div className="user-profile-dropdown">
      <input id="collapsible2" className="toggle" type="checkbox" />
      <label htmlFor="collapsible2" className="lbl-toggle">User Profile</label>
      <div className="collapsible-content">
        <div className="content-inner">
        <div className="user-profile">
          <div className="small-container">
            <p>
              <span className="lighten">Name:</span>
              <input className="inputField" value={name} onChange={(e) => this.updateName(e)} disabled/>
            </p>
            <p>
              <span className="lighten">Email:</span>
              <input className="inputField" value={email} onChange={(e) => this.updateEmail(e)}  disabled/>
            </p>
          </div>
        
        <div className="buttons">
          <button onClick={this.editButton}>Edit Profile</button>
          <button onClick={this.saveButton}>Save</button>
        </div>
        
        </div>
      </div>
    </div>

      
        
      </div>
    )
  }
}
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
  this.update = this.update.bind(this);

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
        favoriteArtists: newFavoriteArtists,
        favoriteGenres: this.state.user.favoriteGenres
      }
    })
  }


  update(){
    console.log("clicked");
    axios.put('/api/update', this.state.user).then((res) => console.log(res));
  }

  render() {

    let {name, email, favoriteArtists, favoriteGenres} = this.state.user;
    favoriteArtists = favoriteArtists.join(', ');

    return (
      <div className="user-profile">
        <h2>User Profile</h2>

        <h3>User Details</h3>
          <div className="small-container">
            <p>
              <span className="lighten">Name:</span>
              <input className="inputField" value={name} onChange={(e) => this.updateName(e)} />
            </p>
            <p>
              <span className="lighten">Email:</span>
              <input className="inputField" value={email} onChange={(e) => this.updateEmail(e)} />
            </p>
          </div>
        
        <h3>Favorite Artists</h3>
          <div className="small-container">
            <p><textarea className="inputBox" value={favoriteArtists} onChange={(e) => this.updateFavoriteArtists(e)}></textarea></p>
          </div>

        <h3>Favorite Genres</h3>
          <div className="small-container">
            <p>{favoriteGenres.join(', ')}</p>
          </div>
        
        <div className="buttons">
          <button>Edit Profile</button>
          <button onClick={this.update}>Save</button>
        </div>
        
      </div>
    )
  }
}
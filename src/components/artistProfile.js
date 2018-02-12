import React, {Component} from 'react';
import axios from 'axios';
import './styles/artistprofile.css';
import Itunes from './itunes.js';

export default class ArtistProfile extends Component {
  constructor(){
    super()
    
    this.state = {
      search: '',
      similar: ['Search Above...'],
      image: '',
      name: '',
      touring: '',
      genre: '',
      bio: '',
      userSearch: ' '
    }

    this.searchFieldChange = this.searchFieldChange.bind(this);
    this.showArtistProfile = this.showArtistProfile.bind(this);
    this.conductSearch = this.conductSearch.bind(this);
    this.toggleDropdownOn = this.toggleDropdownOn.bind(this);
  }

  toggleDropdownOn() {
    let artistProfileElement = document.getElementById("collapsible");
    return artistProfileElement.setAttribute("checked", "true");
  }


  searchFieldChange(value) {
    this.setState({
      search: value,
    })
  }

  showArtistProfile() {
    const artistProfileResults = document.getElementById('artist-profile-results');
    artistProfileResults.style.visibility = "visible";
  }

  conductSearch() {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.search}&api_key=910ead441a576fa0b1083e89589a6679&format=json`).then(res => {
      this.toggleDropdownOn();
      let {similar, name, bio, image, ontour, tags} = res.data.artist;
      let {search} = this.state;
      this.setState({
        similar: similar.artist,
        image: image[3]['#text'],
        name: name,
        touring: ontour,
        genre: tags.tag[0].name,
        bio: bio.summary,
        userSearch: search
      })

      this.onTour(this.state.touring);
      this.showArtistProfile();
    })
  }


  onTour(onTour) {
    if (parseInt(onTour, 10) === 1) {
      this.setState({
        touring: "Yes"
      })
    } else {
      this.setState({
        touring: "No"
      })
    }
  }



  render() {

    let {search, similar, image, name, touring, genre, bio} = this.state;

    return(
      <div className="artist-profile">

        <div>
          
        <input 
          id="searchField" 
          type="text" 
          value={search} 
          onChange={(e) => {this.searchFieldChange(e.target.value)}} 
          placeholder="Search Artist..."/>
         
        <button 
          className="searchFieldButton" 
          onClick={this.conductSearch}>Go</button>

        </div>

        <div className="artist-profile-dropdown">
          <input id="collapsible" className="toggle" type="checkbox"/>
          <label htmlFor="collapsible" className="lbl-toggle">Artist Profile</label>
          <div className="collapsible-content">
            <div className="content-inner">
              <div id="artist-profile-results">
                <img src={image} alt={name}/>
                <h3>Artist</h3>
                <p>{name}</p>
                <h3>On Tour</h3>
                <p>{touring}</p>
                <h3>Genre</h3>
                <p>{genre}</p>
                <h3>Similar Artists/Groups</h3>
                <p>{similar.map((artist) => artist.name).join(', ')}</p>
                <h3>Biography</h3>
                <p>{bio}</p>
                <h3>iTunes Store</h3>
                <Itunes userSearch={this.state.userSearch}/>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
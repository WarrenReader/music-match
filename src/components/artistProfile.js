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
      bio: ''
    }

    this.searchFieldChange = this.searchFieldChange.bind(this);
    this.conductSearch = this.conductSearch.bind(this);
  }


  searchFieldChange(value) {
    this.setState({
      search: value
    })
  }


  conductSearch() {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.search}&api_key=910ead441a576fa0b1083e89589a6679&format=json`).then(res => {
      let {similar, name, bio, image, ontour, tags} = res.data.artist;
      this.setState({
        similar: similar.artist,
        image: image[3]['#text'],
        name: name,
        touring: ontour,
        genre: tags.tag[0].name,
        bio: bio.content
      })

      this.onTour(this.state.touring);

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
          onClick={this.conductSearch}>Go!</button>

        </div>

        <h2>Artist Profile</h2>
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
        <Itunes />
      </div>
    );
  }
}
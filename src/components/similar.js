import React, {Component} from 'react';
import axios from 'axios';

export default class Similar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      similar: ['Search Above...']
    };

    this.searchFieldChange = this.searchFieldChange.bind(this);
    this.search = this.search.bind(this);
  }


  searchFieldChange(value) {
    this.setState({
      search: value
    })
    console.log(this.state.search);
  }

  search() {
    console.log("works");
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.search}&api_key=910ead441a576fa0b1083e89589a6679&format=json`).then(res => {
      let {similar} = res.data.artist;
      this.setState({
        similar: similar.artist
      })
    })
  }



  render() {
    
    let {search, similar} = this.state;
    

    return (
      <div>
        <div>
          <input 
            id="searchField" 
            type="text" 
            value={search} 
            onChange={(e) => {this.searchFieldChange(e.target.value)}} 
            placeholder="Suggestion Engine..."/>
          <button 
            className="searchFieldButton" 
            onClick={this.search}>Go</button>
        </div>
        <h3>We Recommend</h3>
        <p>{similar.map((artist) => artist.name).join(', ')}</p>
      </div>

    )
  }
}
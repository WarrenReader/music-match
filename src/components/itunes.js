import React, {Component} from 'react';
import axios from 'axios';
import './styles/itunesResult.css';

export default class Itunes extends Component {
constructor(props) {
  super(props);

  this.state = {
    results: [{
      artistName: ''
    }]
  };

  this.getItunesResults = this.getItunesResults.bind(this)
}

componentWillReceiveProps() {
  this.getItunesResults();
}

getItunesResults() {
  axios.get(`https://itunes.apple.com/search?term=${this.props.userSearch}&entity=album&limit=6`).then(res => {
    let results = res.data.results;  
    this.setState({
      results: results
    })
  })
}



  render() {
    let itunesResults = this.state.results.map(result => {
      return (
        <div key={result.collectionName + result.collectionPrice} className="itunesResult">
          <img src={result.artworkUrl100} alt={result.collectionName}/>
          <p>{result.collectionName}</p>
          <p>${result.collectionPrice}</p>
          <p><a href={result.collectionViewUrl} target="_blank">Buy Now</a></p>
        </div>
      )
    });

    return (
      <div>
        <div className="clearfix">
          {itunesResults}
        </div>
      </div>
    )

  }

}
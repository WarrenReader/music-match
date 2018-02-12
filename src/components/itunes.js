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

getItunesResults() {
  axios.get(`https://itunes.apple.com/search?term=the%20white%20stripes&entity=album&limit=5`).then(res => {
    let results = res.data.results;  
    this.setState({
      results: results
    })
    console.log(results);
  })
}



  render() {
    let itunesResults = this.state.results.map(result => {
      return (
        <div className="itunesResult">
        <img src={result.artworkUrl100} />
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
          <div className="itunesResult">
            <p className="moreByArtist"><a href={this.state.results[0].artistViewUrl} target="_blank">More By {this.state.results[0].artistName} ></a></p>
          </div>
        </div>
        <button onClick={this.getItunesResults}>Click</button>
      </div>
    )

  }

}
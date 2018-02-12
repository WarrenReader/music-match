import React, {Component} from 'react';
import axios from 'axios';

export default class Itunes extends Component {
constructor(props) {
  super(props);
  this.state = {
    search: this.props.search,
    results: []
  };

}

  // componentWillMount() {
  //   axios.get('https://itunes.apple.com/search?term=jack+white&entity=album&limit=5').then(res => {
  //     console.log(res.data.results[0].artistName);
  //   })
  // }

  componentWillReceiveProps() {
    let {search} = this.props;
    if (search) {
      console.log(search);
      axios.get(`https://itunes.apple.com/search?term=${search}&entity=album&limit=5`).then(res => {
        let {results} = res.data.results;
        console.log("test");
        this.setState({
          results: results
        })
        console.log(this.state.results)
      }) 
    }
  }




  render() {

    return (
      <div>
        {this.state.results}
      </div>
    )

  }

}
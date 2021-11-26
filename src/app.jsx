import React, { Component } from 'react';
import Axios from 'axios';
import TopSpot from './topspot'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    // Here we're simply invoking the axios object, specifically..
    Axios
      // .. the .get function. Here we pass the URL of our external service.
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      // Here the first fulfill callback is setup.
      // This callback simply takes an HTTP response and returns the data property..
      .then(response => response.data)
      // .. to the second fulfill callback, which uses React's this.setState
      // function to merge the provided object (which uses ES6 shorthand)
      // with the current object assigned to this.state (which you assigned
      // in your constructor!)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App container'>
        <div className='jumbotron'>
          <h1>San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California</p>
        </div>
        <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre>
      </div>
    );
  }
}


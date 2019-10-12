import React, {Component} from 'react';
import axios from 'axios'
import useAxios from './utils/axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = { }
  }

  componentDidMount() {
    useAxios('http://localhost:5000/api/players')
  }


  render () {
    return (
      <div className="App">
        <h2>Women's World Cup Player Searches</h2>
      </div>
    );
  }
}
export default App;

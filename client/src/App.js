import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import PlayersList from './components/PlayersList';

class App extends Component {
  constructor () {
    super ();
    this.state = {}
  }


  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
        this.setState({players: response.data})
        console.log(this.state.players)
      })
      .catch(err => {
        console.log(err)
      })
    }

  render () {
    return (
      <div className="App">
        <h2>Women's World Cup Player Searches</h2>
        {/* <button 
          className="dark-button"
          onClick={e => {}>Dark Mode</button> */}
          <PlayersList players={this.state.players} />
      </div>
    );
  }
}
export default App;
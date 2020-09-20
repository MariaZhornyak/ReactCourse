import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Ninjas } from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Mery', age: 18, book: 'harry potter', id: 1},
      {name: 'Ksysha', age: 19, book: 'hunger games', id: 2},
      {name: 'Lisa', age: 18, book: 'Stiv Jobs', id: 3}
    ]
  }

  render () {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={ this.state.ninjas }/>
      </div>
    );
  }
}

export default App;

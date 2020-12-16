import React, { Component} from 'react';
import './App.css';
import TraficLight from './components/TraficLight';
class App extends Component {
  render() {
    return (
      <div className="App">
          <TraficLight/>
      </div>
    );
  }
}
export default App;

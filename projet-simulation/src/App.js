import { Component } from 'react';
import Accueil from "./components/Accueil";
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accueil/>
      </div>
    );
  }
  
}

export default App;

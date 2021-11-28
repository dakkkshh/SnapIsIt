import './App.css';
import React from 'react';
import Preloader from './components/preloader';
function App() {

  return (
    <div className="App">
      {
        <Preloader/>
        // <h1>Hello World</h1>
      }
    </div>
  );
}

export default App;

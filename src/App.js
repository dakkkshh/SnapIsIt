import './App.css';
import React from 'react';
import Preloader from './components/preloader/preloader';
import Signup from './components/signup/signup';
// import Login from './components/login/login';
function App() {

  return (
    <div className="App">
      {
        <><Preloader />
        <Signup />
        {/* <Login /> */}
        </>
      }
    </div>
  );
}

export default App;

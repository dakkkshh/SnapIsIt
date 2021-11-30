import './App.css';
import React, {useState, useEffect} from 'react';
import Preloader from './components/preloader/preloader';
import Login from './components/login/login';

function App() {
  const [loading, setLoading] = useState(false);
    useEffect (() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 5000);
    }, []);
  return (
    <div className="App">
      { 
        loading ? <Preloader /> : <Login />
      }
    </div>
  );
}

export default App;

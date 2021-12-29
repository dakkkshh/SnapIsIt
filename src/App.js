import './App.css';
import React, {useState, useEffect} from 'react';
import Preloader from './components/preloader/preloader';
// import Login from './components/login/login';
import Signup from './components/signup/signup';
import StudyRoomDesk from './components/desk/studyRoomDesk';

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
        loading ? <Preloader /> : <Signup />
      }
    </div>
  );
}

export default App;

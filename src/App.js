import './App.css';
import React, {useState, useEffect} from 'react';
import Preloader from './components/preloader/preloader';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import StudyRoomDesk from './components/desk/studyRoomDesk';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
      <Router>
          <Routes>
            <Route exact path="/SnapIsIt" element={loading ? <Preloader /> : <Login />}/>
            <Route exact path="/SnapIsIt/signup" element={<Signup />}/>
            <Route exact path="/SnapIsIt/login" element={<Login />}/>
            <Route exact path="/SnapIsIt/home" element={<StudyRoomDesk />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

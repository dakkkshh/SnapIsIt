import './App.css';
import React, {useState, useEffect} from 'react';
import Lottie from 'react-lottie';
// import Preloader from './components/preloader';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect (() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {
        loading?
        // <Preloader />
        <Lottie

          options={{
            loop: true,
            autoplay: true,
            animationData: require('../src/components/lottie/preloader.json')
          }}
          height={400}
          width={400}
        />
        :<h1>Hello!</h1>
      }
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './preloader.css';
import Lottie from 'react-lottie';

function Preloader(){
    const [loading, setLoading] = useState(false);
    useEffect (() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 5000);
    }, []);
    return (
        <div className="preloader">
        {loading && (
            <Lottie
            isClickToPauseDisabled={true}
            options={{
                animationData: require('../lottie/preloader.json'),
            }}
            height={300}
            width={300}
            />
        )}
        </div>
    );
}
export default Preloader;
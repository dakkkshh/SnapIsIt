import React, {useState, useEffect} from 'react';
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
            options={{
                animationData: require('../components/lottie/preloader.json'),
            }}
            height={400}
            width={400}
            />
        )}
        </div>
    );
}
export default Preloader;
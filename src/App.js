import React, { Suspense, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import BackgroundVideo from './backgroundvideo';
import Loading from './loading';

const APP = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },2000); // Set the duration of your loading process (in milliseconds)
  }, []);

  const fadeIn = useSpring({
    from: { opacity: -1 },
    to: { opacity: 1 },
    config: { duration: 3000 }, // Adjust the animation duration as needed
  });


  return (


    <div>
      <Suspense fallback={<Loading />}>
        {isLoading ? <Loading /> : 
        <animated.div style={fadeIn}>
        <BackgroundVideo />
        </animated.div>
        }
      </Suspense>
    </div>

  );
};

export default APP;

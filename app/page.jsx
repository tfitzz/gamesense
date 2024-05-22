import React from 'react';
import Services from './home/services';

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-9xl font-thin mt-60 mb-24">
        Game<span className="text-green">sense</span>
      </h1>
      <h2 className="text-center mb-36 font-thin">
        Cultivate Your Betting <span className="text-green">Sense.</span> Navigate Odds with Confidence.
      </h2>
      <h3 className="text-center font-thin mb-10">What we provide:</h3>
      <Services />
    </div>
  );
};

Home.displayName = "Home";

export default Home;
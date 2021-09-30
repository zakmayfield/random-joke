import React, { useEffect, useState } from 'react';
import Header from './Header';
import Joke from './Joke';

const Dashboard = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPunchLine, setShowPunchLine] = useState(false);
  const [error, setError] = useState(false)


  return (
    <div>
      <div className='header-container'>
        <Header
          setJoke={setJoke}
          setIsLoading={setIsLoading}
          setShowPunchLine={setShowPunchLine}
          setError={setError}
        />
      </div>

      <div className='joke-container'>
        <Joke
          joke={joke}
          isLoading={isLoading}
          setShowPunchLine={setShowPunchLine}
          showPunchLine={showPunchLine}
          error={error}
        />
      </div>
    </div>
  );
};

export default Dashboard;

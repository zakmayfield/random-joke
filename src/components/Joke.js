import React from 'react';
import Button from '@mui/material/Button';

const Joke = ({ joke, isLoading, setShowPunchLine, showPunchLine, error }) => {
  const handlePunchLine = () => setShowPunchLine(!showPunchLine);

  if (!joke && !isLoading) {
    return <p className='joke-content'>Please Get A Joke!</p>;
  }

  if (error) {
    return (
      <div className='joke-content-error'>
        There was an issue loading your joke.
      </div>
    );
  }

  return (
    <div className='joke-content'>
      {isLoading && <p className='loading-joke'>Loading Your Joke ...</p>}

      {joke && !isLoading && (
        <div className='joke-sub-content'>
          <div className='joke-setup'>{joke.setup}</div>

          <div>
            <Button
              variant='contained'
              style={{
                borderRadius: '30px',
                paddingTop: '20px',
                paddingBottom: '20px',
                marginTop: '10vh',
                marginBottom: '10vh',
              }}
              onClick={handlePunchLine}
            >
              {showPunchLine ? 'Hide Punch Line' : 'Show Punch Line'}
            </Button>
          </div>

          {showPunchLine && (
            <div className='joke-punch-line'>{joke.punchline}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Joke;

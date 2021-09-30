import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const Header = ({ setJoke, setIsLoading, setShowPunchLine, setError }) => {
  function getJoke() {
    setShowPunchLine(false);
    axios
      .get('https://karljoke.herokuapp.com/jokes/random')
      .then((res) => {
        setIsLoading(true);
        setError(false);
        setTimeout(() => {
          if (res.data.length === 0) {
            setError(true);
          } else {
            setJoke(res.data);
          }
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='header'>
      <Button
        variant='contained'
        color='success'
        style={{
          borderRadius: '30px',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
        onClick={getJoke}
      >
        Get A New Random Joke
      </Button>

      <a
        href='https://karljoke.herokuapp.com/'
        target='_blank'
        rel='noreferrer'
        className='header-link'
      >
        View API Docs
      </a>
    </div>
  );
};

export default Header;

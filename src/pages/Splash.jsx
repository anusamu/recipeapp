import React from 'react';
import '../CSS/Splash.css';
import { Button } from '@mui/material';
import { IoIosPlayCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Heading = () => {
  const navigate = useNavigate();

  return (
    <div className="outer-head">
      <div className="heading">
        <div className="details">
          <h1>
            Recipes <br />
            <span>Hub</span>
          </h1>
          <p>
            “A recipe has no soul. You as the cook must bring soul to the recipe.”
            <br />– Thomas Keller
          </p>

          <Button
            variant="contained"
            
            className="recipe-button"
            endIcon={<IoIosPlayCircle />}
            onClick={() => {
              navigate('/home');
            }}
          >
            View Recipes
          </Button>
        </div>

        <div className="home-image">
          <img src="/src/assets/image.png" alt="dish" />
        </div>
      </div>
    </div>
  );
};

export default Heading;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Price from './Price';
import Featured from './Featured';
import Description from './Description';
import Confirmation from './Confirmation';
import ModifyDelete from './ModifyDelete';

function GameCard({
  _id,
  name,
  thumbnail,
  players,
  price,
  duration,
  featured,
  description,
  handleToggle,
  editGame,
  deleteGame,
  game, //To enable us edit game we had to send undestructured object down hear. We are not sure of the impact as at 4th July 2019
}) {
  const [showDescription, setShowDescription] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDescription = () => {
    setShowDescription(!showDescription);
  };
  const handleShowConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  return (
    <div
      className="card col-3 card-padding rounded border-secondary"
      style={{ width: '18rem', zIndex: 0, color: 'goldenrod' }}
    >
      <div className="d-flex justify-content-around align-center">
        <button type="button" className="btn btn-success ribbon">
          <Price price={price} />
        </button>
      </div>
      <div className="d-flex justify-content-end mb-1">
        <Featured _id={_id} featured={featured} handleToggle={handleToggle} />
      </div>
      {showDescription ? (
        <Description description={description} />
      ) : (
        <img src={thumbnail} className="card-img-top" alt="..." />
      )}
      <div className="card-body">
        <a href="/" className="card-title" style={{ fontSize: '1.5em' }}>
          {name}
        </a>
        <p className="card-text lead">
          {players} &nbsp;<span className="text-muted display-6">players</span>
        </p>
        <small className="">
          {duration === 1 ? 'a min ago' : duration + ' mins ago'}
        </small>
        <div className="card-text">
          <div className="d-flex justify-content-end">
            <a onClick={handleDescription} href="/">
              <i className="fa fa-eye    " />
            </a>
          </div>
          <div>
            {showConfirmation ? (
              <Confirmation
                handleShowConfirmation={handleShowConfirmation}
                deleteGame={deleteGame}
                game={game}
              />
            ) : (
              <ModifyDelete
                editGame={editGame}
                handleShowConfirmation={handleShowConfirmation}
                game={game}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  featured: PropTypes.bool.isRequired,
};

GameCard.defaultProps = {
  name: '',
  thumbnail: '',
  availability: '',
  duration: 0,
  price: 0,
  featured: false,
  description: 'Lorem Ipsum',
};

export default GameCard;

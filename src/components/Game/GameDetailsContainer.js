import React from 'react';
import PropTypes from 'prop-types';

export default function GameDetailsContainer({ game }) {
  const { name, description, thumbnail, price, duration, players } = game;
  return (
    <div className="container-fluid p-4 m-4">
      <div className="media row m-d p-4 border border-dark rounded">
        <img
          src={thumbnail}
          className="mr-3 col-2"
          alt="Thumbnail || Game Image"
        />
        <div className="media-body col-8">
          <div className="d-flex flex-column">
            <div className="text-center">
              <h5 className="mt-0">{name}</h5>
            </div>
            <div>
              <p className="lead">{description}</p>
            </div>
            <div className="d-flex flex-row justify-content-around">
              <div>
                <button className="btn-primary lead">${price / 100}</button>
              </div>
              <div>
                <button className="btn-primary lead">{duration} mins</button>
              </div>
              <div>
                <button className="btn-primary lead">{players} players</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

GameDetailsContainer.defaultProps = {
  name: '',
  description: '',
  thumbnail: '',
  price: 0,
  duration: 0,
  players: '',
};

GameDetailsContainer.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  players: PropTypes.string.isRequired,
};

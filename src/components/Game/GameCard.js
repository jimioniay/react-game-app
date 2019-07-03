import React from 'react';
import PropTypes from 'prop-types';

import Price from './Price';
import Featured from "./Featured"

function GameCard({ id, name, url, players, price, length, featured }) {
  //   const priceInDollars = () => {
  //     return <Price price={price} />;
  //   };
  return (
    <div
      className="card col-3 card-padding rounded border-secondary"
      style={{ width: '18rem', zIndex: 0 }}
    >
      <button type="button" className="btn btn-success ribbon">
        <Price price={price} />
      </button>
      <Featured featured={featured}/>
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <a href="/" className="card-title" style={{ fontSize: '1.5em' }}>
          {name}
        </a>
        <p className="card-text lead">{players} &nbsp;</p>
        <p className="card-text">
          <small className="text-muted">{length} mins ago</small>
        </p>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  featured: PropTypes.bool.isRequired,
};

GameCard.defaultProps = {
  name: '',
  url: '',
  availability: '',
  length: '',
  price: 0,
};

export default GameCard;

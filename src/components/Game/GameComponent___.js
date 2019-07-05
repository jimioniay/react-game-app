import React, { useState, useEffect } from 'react';
import Games from '../../data/Games';
import GameCard from '../Game/GameCard';
import uuidv4 from 'uuidv4';
import PropTypes from 'prop-types';
import IsLoading from './IsLoading';
import _orderBy from 'lodash/orderBy';

function GameComponent() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    setGames(...games, _orderBy(Games, ['featured', 'name'], ['desc', 'asc']));
  };

  // const handleToggle = id => {
  //   // games.map(item => {
  //   //   if (item.id === id) {
  //   //     setGames({ ...item, featured: !item.featured });
  //   //   }
  //   // });
  //   setGames(
  //     ...games.map(game =>
  //       game.id === id ? (game.featured = !game.featured) : game,
  //     ),
  //   );
  // };

  const game = () =>
    games.map(item => {
      return <GameCard key={uuidv4()} {...item} />;
    });

  return games.length > 0 ? (
    <div className="card-deck row">{game().length === 0 ? 'game' : game()}</div>
  ) : (
    <div className="container">
      <IsLoading />
    </div>
  );
}

// GameComponent.propTypes = { Duplicate implementation
//   Games: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//       availability: PropTypes.string.isRequired,
//       length: PropTypes.number.isRequired,
//       price: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };

GameComponent.propTypes = {
  Games: PropTypes.arrayOf(PropTypes.object).isRequired,
};
GameComponent.defaultProps = {
  Games: [],
  game: [],
  games: [],
};
export default GameComponent;

import React, { useState, useEffect } from 'react';

import NavBar from './NavBar/NavBar';
import GameForm from './Game/GameForm/GameForm';
import Games from '../../data/Games';
import GameCard from './GameCard';
import uuidv4 from 'uuidv4';
import PropTypes from 'prop-types';
import IsLoading from './IsLoading';
import _orderBy from 'lodash/orderBy';
import LoginSignUp from './Game/GameForm/LoginSignUp';

function App() {
  const [showAddGame, setShowAddGame] = useState(false);
  const [games, setGames]= useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    this.setGames({
      games: _orderBy(Games, ['featured', 'name'], ['desc', 'asc']),
    });
  };

  const handleShowAddGame = () => {
    setShowAddGame(!showAddGame);
  };

  handleToggle = id => {
    console.log(id);
    const newGames = this.state.games.map(game => {
      if (game.id === id) {
        return {
          ...game,
          featured: !game.featured,
        };
      }
      return game;
    });
    this.setState({ games: newGames });
  };

  return (
    <div>
      <NavBar handleShowAddGame={handleShowAddGame} showAddGame={showAddGame} />
      <div className=" container-fluid padding">
        {showAddGame ? (
          <GameForm handleShowAddGame={handleShowAddGame} />
        ) : null}
        {/* <LoginSignUp /> */}
        <br />
      </div>
    </div>
  );
}

export default App;

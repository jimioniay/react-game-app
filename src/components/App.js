import React from 'react';
import _orderBy from 'lodash/orderBy';
import PropTypes from 'prop-types';
import uuidv4 from 'uuidv4';
import NavBar from './NavBar/NavBar';
import GameForm from './Game/GameForm/GameForm';
import GameCard from './Game/GameCard';
import IsLoading from './Game/IsLoading';
import api from './api/api';

class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      showAddGame: false,
      selectedGame: {},
    };
  }

  componentDidMount = () => {
    api.games.fetchAll().then(gameResp =>
      this.setState({
        games: this.sortGames(gameResp),
      }),
    );
    // Local Maintenace No APIs
    // this.setState({
    //   games: _orderBy(Games, ['featured', 'name'], ['desc', 'asc']),
    // });
  };

  handleToggle = _id => {
    console.log(_id);
    const newGames = this.state.games.map(game => {
      if (game._id === _id) {
        return {
          ...game,
          featured: !game.featured,
        };
      }
      return game;
    });
    this.setState({ games: newGames });
  };

  handleShowAddGame = () => {
    // const newState = { ...this.state };
    this.setState({
      ...this.state,
      showAddGame: !this.state.showAddGame,
    });

    if (this.state.showAddGame === false) {
      this.setState({
        selectedGame: {},
      });
    }
  };

  // Dual purpose method to handle new Game to state and modify existing game
  saveGame = newGame => {
    console.log(`${newGame._id},  ${JSON.stringify(newGame)}`);
    newGame._id === null ? this.addGame(newGame) : this.updateGame(newGame);
  };

  //Modify existing Game
  updateGame = newGame => {
    const gameLocal = this.state.games.map(game => {
      console.log(`${game._id} === ${newGame._id}`);
      return game._id === newGame._id ? newGame : game;
    });
    this.setState({
      games: this.sortGames(gameLocal),
      showAddGame: false,
    });
  };

  //Add new Game to state
  addGame = newGame =>
    api.games.postGame(newGame).then(resp =>
      this.setState({
        games: this.sortGames([...this.state.games, resp]),
        showAddGame: false,
      }),
    );
  // .catch(err => err);

  /*Local Maintenace No APIs
    this.setState({
      games: [
        ...this.state.games,
        {
          ...newGame,
          _id: uu_idv4(),
          featured: false,
          duration: parseInt(newGame.duration),
        },
      ],
      showAddGame: false,
    });*/
  // console.log(this.state.games);

  deleteGame = game => {
    console.log('got heree!!');
    this.setState({
      games: this.sortGames(
        this.state.games.filter(item => item._id !== game._id),
      ),
      showAddGame: false,
    });
  };

  sortGames = data => {
    return _orderBy(data, ['featured', 'name'], ['desc', 'asc']);
  };

  selectedGameForEditing = game => {
    this.setState({
      selectedGame: game,
      showAddGame: !this.state.showAddGame,
    });
  };

  render() {
    const game = () =>
      this.state.games.map(item => {
        return (
          <GameCard
            key={uuidv4()}
            {...item}
            game={item}
            handleToggle={this.handleToggle}
            editGame={this.selectedGameForEditing}
            deleteGame={this.deleteGame}
          />
        );
      });

    return (
      <div>
        <NavBar
          handleShowAddGame={this.handleShowAddGame}
          showAddGame={this.state.showAddGame}
        />
        <div className=" container-fluid padding">
          {this.state.showAddGame ? (
            <GameForm
              handleShowAddGame={this.handleShowAddGame}
              addGame={this.saveGame}
              selectedGame={this.state.selectedGame}
            />
          ) : null}
          <br />
        </div>
        {this.state.games.length > 0 ? (
          <div className="container">
            <div className="card-deck row">
              {game().length === 0 ? 'game' : game()}
            </div>
          </div>
        ) : (
          <div className="container">
            <IsLoading />
          </div>
        )}
      </div>
    );
  }
}

GameComponent.propTypes = {
  Games: PropTypes.arrayOf(PropTypes.object).isRequired,
};

GameComponent.defaultProps = {
  Games: [],
  game: [],
  games: [],
  addGame: {},
};
export default GameComponent;

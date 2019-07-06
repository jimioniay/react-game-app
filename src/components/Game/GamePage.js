import React from 'react';
import _orderBy from 'lodash/orderBy';
import PropTypes from 'prop-types';
import uuidv4 from 'uuidv4';
import NavBar from '../NavBar/NavBar';
import GameForm from './GameForm/GameForm';
import GameCard from './GameCard';
import IsLoading from './IsLoading';
import api from '../api/api';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      showAddGame: false,
      selectedGame: {},
      err: {},
      navbarLoadedFromGamePage: false,
    };
  }

  componentDidMount = () => {
    api.games.fetchAll().then(gameResp =>
      this.setState({
        games: this.sortGames(gameResp),
        navbarLoadedFromGamePage: true,
      }),
    );
    // Local Maintenace No APIs
    // this.setState({
    //   games: _orderBy(Games, ['featured', 'name'], ['desc', 'asc']),
    // });
  };

  handleToggle = id => {
    console.log('id that got in: ', id);
    const gameForUpdate = this.state.games.map(game => {
      console.log(`${game._id} === ${id}`);
      if (game._id === id) {
        return game;
      } else {
        return false;
      }
    });

    !gameForUpdate
      ? this.updateGame(gameForUpdate)
      : console.log('No game found');
    console.log(gameForUpdate);
    // this.updateGame(gameForUpdate);
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
    api.games.update(newGame).then(game => {
      this.setState({
        games: this.sortGames([...this.state.games, game]),
        showAddGame: false,
      });
    });
    // FOr some weried reason , the below code is still required. Will check that in the future
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
  addGame = async newGame => {
    const resp = await api.games.postGame(newGame);
    console.log('data coming from api.js', resp);
    if (!Object.keys(resp).includes('errors')) {
      console.log('inside success block');
      return this.setState({
        games: this.sortGames([...this.state.games, resp]),
        showAddGame: false,
      });
    } else {
      console.log('inside error block');
      return this.setState({ err: { ...resp.errors } });
    }
  };
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

  deleteGame = async game => {
    console.log('got heree!!');
    const resp = await api.games.delete(game);
    console.log(resp);
    if (resp.status === 200 && resp.statusText === 'OK') {
      console.log('inside success block', resp, resp.status);
      this.setState({
        games: this.sortGames(
          this.state.games.filter(item => item._id !== game._id),
        ),
        showAddGame: false,
      });
    } else {
      console.log('inside failed block', resp);
      this.setState({ errors: resp });
    }
    // this.setState({
    //   games: this.sortGames(
    //     this.state.games.filter(item => item._id !== game._id),
    //   ),
    //   showAddGame: false,
    // });
  };

  sortGames = data => {
    return _orderBy(data, ['price', 'name'], ['asc', 'asc']);
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

    console.log('err: ', this.state);

    return (
      <div>
        <NavBar
          handleShowAddGame={this.handleShowAddGame}
          showAddGame={this.state.showAddGame}
          navbarLoadedFromGamePage={this.state.navbarLoadedFromGamePage}
        />
        <div className=" container-fluid padding">
          {this.state.showAddGame ? (
            <GameForm
              handleShowAddGame={this.handleShowAddGame}
              saveGame={this.saveGame}
              error={this.props.err}
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

GamePage.propTypes = {
  Games: PropTypes.arrayOf(PropTypes.object).isRequired,
};

GamePage.defaultProps = {
  Games: [],
  game: [],
  games: [],
  addGame: {},
};
export default GamePage;

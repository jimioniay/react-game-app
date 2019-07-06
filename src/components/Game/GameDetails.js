import React, { Component } from 'react';
import api from '../api/api';
import GameDetailsContainer from './GameDetailsContainer';
export default class GameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      error: {},
    };
  }

  async componentDidMount() {
    const resp = await api.games.fetchGameByID(this.props.match.params._id);
    console.log('resp for fetchGameByID : ', resp);
    if (resp) {
      this.setState({ game: resp });
      console.log(this.state.game);
    } else {
      this.setState({ error: resp });
    }
  }

  render() {
    return (
      <div>
        <GameDetailsContainer game={this.state.game} />
      </div>
    );
  }
}

GameDetails.defaultProps = {
  game: {},
};

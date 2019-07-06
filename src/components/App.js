import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import HomePage from './pages/HomePage';
import GamePage from './Game/GamePage';
import GameForm from './Game/GameForm/GameForm';
import GameDetails from './Game/GameDetails';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      navBarLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({ navBarLoaded: true });
  }
  render() {
    return (
      <div>
        <NavBar navBarLoaded={this.state.navBarLoaded} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/games" component={GamePage} />
        <Route exact path="/game/:_id" component={GameDetails} />
        <Route exact path="/gameForm" component={GameForm} />
      </div>
    );
  }
}

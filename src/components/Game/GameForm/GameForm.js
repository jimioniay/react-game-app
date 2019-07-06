import React from 'react';

import GameFormContainer from './GameFormContainer';
const initialData = {
  _id: null,
  name: '',
  price: 0,
  duration: 0,
  description: '',
  players: '',
  thumbnail: '',
  featured: false,
  publisher: 1,
};

class GameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialData,
      errors: {},
    };
  }

  componentDidMount() {
    const { selectedGame } = this.props;
    console.log('cmpdid mount', this.props.errors);
    if (Object.keys(selectedGame).length > 0) {
      this.setState({
        data: { ...selectedGame },
      });
    }
  }

  componentWillReceiveProps(prevState) {
    console.log('compreceporops', this.props.errors);
    console.log(prevState.errors);
    // if (prevState.error){

    // }
  }

  validateForm = data => {
    const errors = {};
    if (!data.name) {
      errors.name = 'Please this field must be supplied';
    }
    if (!data.description) {
      errors.description = `Please this field must be supplied`;
    }

    if (data.price <= 0) {
      errors.price = 'Please this field must greater than zero';
    }
    if (data.duration <= 0) {
      errors.duration = 'Please this field must greater than zero';
    }
    return errors;
  };

  // handleShowGameLocal = props => {
  //   props.handleShowAddGame();
  // };

  handleChange = e => {
    console.log('props in handleCHange: ', this.props);
    const { name, type, checked, value } = e.target;
    e.preventDefault();
    if (type === 'checkbox') {
      this.setState({
        data: { ...this.state.data, [name]: checked },
      });
    } else {
      this.setState({
        data: {
          ...this.state.data,
          [name]: type === 'number' ? parseInt(value, 10) : value,
        },
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateForm(this.state.data);
    // const errors = {};
    console.log('error from server: ', this.props.error);
    this.setState({ errors: errors || this.props.error });
    if (Object.keys(errors).length === 0 || this.props.err) {
      this.props.addGame(this.state.data);
    }
  };
  render() {
    const { data, errors } = this.state;
    return (
      <GameFormContainer
        {...data}
        errors={errors}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleShowAddGame={this.props.handleShowAddGame}
      />
    );
  }
}

GameForm.defaultProps = {
  selectedGame: {},
};

export default GameForm;

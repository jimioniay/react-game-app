import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallBack from 'react-image-fallback';
import InlineFormMessageDisplay from './InlineFormMessageDisplay';

export default function GameFormContainer({
  name,
  price,
  description,
  thumbnail,
  duration,
  players,
  errors,
  handleSubmit,
  handleChange,
  handleShowAddGame,
}) {
  console.log('errors: ', errors.name);
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <div className="form-group">
              <label htmlFor="name" className="lead display-6">
                Game Name
              </label>
              <input
                type="text"
                className={
                  errors.name
                    ? 'form-control text-danger border-danger'
                    : 'form-control'
                }
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter full game name"
                value={name}
                name="name"
                onChange={handleChange}
              />
              <InlineFormMessageDisplay content={errors.name} type="error" />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="lead display-6">
                Game Description
              </label>
              <textarea
                type="text"
                className={
                  errors.description
                    ? 'form-control text-danger border-danger'
                    : 'form-control '
                }
                id="description"
                aria-describedby="emailHelp"
                placeholder="Enter full game description"
                value={description}
                name="description"
                onChange={handleChange}
              />
              <InlineFormMessageDisplay
                content={errors.description}
                type="error"
              />
            </div>
          </div>
          <div className="col-3" style={{ height: '250px', width: '250px' }}>
            {/* <figure className="figure"> we will go for alreaydy prepared react library
                <img
                  src={
                    this.state.thumbnail
                      ? this.state.thumbnail
                      : 'http://via.placeholder.com/250x250'
                  }
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
              </figure> */}
            <div
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            >
              <ReactImageFallBack
                src={thumbnail}
                fallbackImage="http://via.placeholder.com/250x250"
                alt="Game Image"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="form-group">
            <label htmlFor="price" className="lead display-6">
              Game Price (in cents)
            </label>
            <input
              type="number"
              className={
                errors.price
                  ? 'form-control text-danger border-danger'
                  : 'form-control'
              }
              id="price"
              aria-describedby="emailHelp"
              placeholder="Price in cents"
              value={price}
              name="price"
              onChange={handleChange}
            />
            <InlineFormMessageDisplay content={errors.price} type="error" />
          </div>
          <div className="form-group">
            <label htmlFor="players" className="lead display-6">
              Game Players
            </label>
            <input
              type="text"
              className={
                errors.players
                  ? 'form-control text-danger border-danger'
                  : 'form-control'
              }
              id="players"
              aria-describedby="emailHelp"
              placeholder="Enter number of players"
              value={players}
              name="players"
              onChange={handleChange}
            />
            <InlineFormMessageDisplay content={errors.players} type="error" />
          </div>
          <div className="form-group">
            <label htmlFor="duration" className="lead display-6">
              Duration (in mins)
            </label>
            <input
              type="number"
              className={
                errors.duration
                  ? 'form-control text-danger border-danger'
                  : 'form-control'
              }
              id="duration"
              aria-describedby="emailHelp"
              placeholder="Game duration"
              value={duration}
              name="duration"
              onChange={handleChange}
            />
            <InlineFormMessageDisplay content={errors.duration} type="error" />
          </div>
        </div>
        <div className="form-group w-75">
          <label htmlFor="thumbnail" className="lead display-6">
            Game thumbnail
          </label>
          <input
            type="text"
            className={
              errors.thumbnail
                ? 'form-control text-danger border-danger'
                : 'form-control'
            }
            id="thumbnail"
            aria-describedby="emailHelp"
            placeholder="Enter full game thumbnail"
            value={thumbnail}
            name="thumbnail"
            onChange={handleChange}
          />
          <InlineFormMessageDisplay content={errors.thumbnail} type="error" />
        </div>
        <div className="d-flex justify-content-around">
          <button type="submit" className="btn btn-primary w-50 mr-4">
            Submit
          </button>
          <span
            type="submit"
            className="btn btn-primary w-50 ml-4"
            onClick={handleShowAddGame}
          >
            Cancel
          </span>
        </div>
      </form>
    </div>
  );
}

GameFormContainer.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  players: PropTypes.string.isRequired,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleShowAddGame: PropTypes.func.isRequired,
};

GameFormContainer.defaultProps = {
  content: '',
  name: ' ',
  price: 0,
  description: '',
  thumbnail: '',
  duration: 0,
  players: '',
  errors: {},
};

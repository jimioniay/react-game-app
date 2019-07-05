import React from 'react';

class IsLoading extends React.Component {
  render() {
    // return <p className="lead display-4 border border-success text-success">Loading...</p>;
    return (
      <figure>
        <div className="spinner-borders m-5" role="status">
          <figcaption
            style={{ color: 'black', fontSize: '8em !important' }}
            className="figure-caption lead"
          >
            We are attempting to fetch available games ...
          </figcaption>
          <img
            src="https://ui-ex.com/images/transparent-background-loading.gif"
            alt="Loading GIF.."
          />
          <span className="sr-only">Loading...</span>
        </div>
      </figure>
    );
  }
}

export default IsLoading;

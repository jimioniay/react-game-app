import React from 'react';

export default function Confirmation({
  deleteGame,
  handleShowConfirmation,
  game,
}) {
  return (
    <div className="d-flex justify-content-around">
      <button
        onClick={() => {
          deleteGame(game);
        }}
        className="btn btn-success mr-2"
      >
        YES
      </button>
      <button onClick={handleShowConfirmation} className="btn btn-success mr-2">
        NO
      </button>
    </div>
  );
}

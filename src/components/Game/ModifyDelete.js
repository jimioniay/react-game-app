import React from 'react';

export default function ModifyDelete({
  editGame,
  game,
  handleShowConfirmation,
}) {
  return (
    <div className="d-flex justify-content-around">
      <button
        onClick={() => {
          editGame(game);
        }}
        className="btn btn-success mr-2"
      >
        Edit
      </button>
      <button className="btn btn-success mr-2" onClick={handleShowConfirmation}>
        Delete
      </button>
    </div>
  );
}

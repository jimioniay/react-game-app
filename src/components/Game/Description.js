import React from 'react';

export default function Description({ description }) {
  return (
    <div className="card-img-top">
      <p className="lead">{description}</p>
    </div>
  );
}

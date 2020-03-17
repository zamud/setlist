import React from 'react';

const JamSummary = ({jam}) => {
  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{jam.title}</h5>
        <p className="card-text">{jam.artist}</p>
        <p className="text-muted">Last Played: {jam.lastPlayed}</p>
      </div>
    </div>
  )
}

export default JamSummary;
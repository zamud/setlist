import React from 'react';
import styled from 'styled-components';

const JamCard = styled.div.attrs({
  className: 'card',
})`
  margin-bottom: 30px;
`

const JamSummary = ({jam}) => {
  return(
    <JamCard>
      <div className="card-body">
        <h5 className="card-title">{jam.title}</h5>
        <p className="card-text">{jam.artist}</p>
        <p className="text-muted">Last Played: {jam.lastPlayed.substring(0,10)}</p>
      </div>
    </JamCard>
  )
}

export default JamSummary;
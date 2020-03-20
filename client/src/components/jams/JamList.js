import React from 'react';
import JamSummary from './JamSummary';
import { Link } from 'react-router-dom';

const JamList = ({jams}) => {
  return(
    <div className="jam-list section">
      <div className="row">
        {jams && jams.map((jam) => {
          return (
            <div className="col m3 s6" key={jam._id}>
              <Link to={`/jams/${jam._id}`}>
                <JamSummary jam={jam} key={jam._id} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default JamList;
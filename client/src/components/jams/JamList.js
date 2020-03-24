import React from 'react';
import JamSummary from './JamSummary';
import { Link } from 'react-router-dom';

const JamList = ({jams, genreFilter, decadeFilter, showFavorites, showRusty}) => {
  return(
    <div className="jam-list section">
      <div className="row">
        {jams && jams.map((jam) => {
          if(showFavorites) {
            console.log("FAVORITES ONLY");
            if(jam.isFavorite) {
              return (
                <div className="col-4" key={jam._id}>
                  <Link to={`/jams/${jam._id}`}>
                    <JamSummary jam={jam} key={jam._id} />
                  </Link>
                </div>
              )
            }
          } else {
            return (
              <div className="col-4" key={jam._id}>
                <Link to={`/jams/${jam._id}`}>
                  <JamSummary jam={jam} key={jam._id} />
                </Link>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default JamList;
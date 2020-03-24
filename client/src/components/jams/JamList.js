import React from 'react';
import JamSummary from './JamSummary';
import { Link } from 'react-router-dom';

const JamList = ({jams, genreFilter, decadeFilter, showFavorites, showRusty}) => {
  let filteredJams = jams;

  if(showFavorites) {
    filteredJams = filteredJams.filter(jam => jam.isFavorite)
  }

  if(showRusty) {
    const now = Date.now();
    const oneDay = 1000 * 60 * 60 * 24;
    filteredJams = filteredJams.filter(jam => {
      const lastPlayed = Date.parse(jam.lastPlayed);
      const daysSinceLastPlayed = Math.round((now - lastPlayed) / oneDay);
      return daysSinceLastPlayed > 2;
    }) 
  }
  
  if(genreFilter) {
    filteredJams = filteredJams.filter(jam => jam.genre === genreFilter)
  }

  if(decadeFilter) {
    filteredJams = filteredJams.filter(jam => jam.decade === decadeFilter)
  }
  
  return(
    <div className="jam-list section">
      <div className="row">
        {
          filteredJams && filteredJams.map((jam) => {
            return (
              <div className="col-4" key={jam._id}>
                <Link to={`/jams/${jam._id}`}>
                  <JamSummary jam={jam} key={jam._id} />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default JamList;
import React, { Component } from 'react';
import DeleteJam from './DeleteJam';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import api from '../../api';

const JamContainer = styled.div.attrs({
  className: 'jumbotron',
})`
  margin-top: 30px;
  margin-left: 14%;
  width: 72%;
`

class JamDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      jam: [],
      isLoading: false
    };
  }

  componentDidMount = async() => {
    this.setState({ isLoading: true });

    await api.getJamWithID(this.props.match.params.id)
      .then((jam) => {
        this.setState({
          jam: jam,
          isLoading: false
        });
      });
  }

  render() {
    let jam = this.state.jam.data;
      if(jam) {
        return(
          <JamContainer>
          <h4>"{jam.title}" - {jam.artist}</h4>
          <div className="row">
            <div className="col m8 s12">
              <ReactPlayer url={jam.vidLink} controls width="90%" />
            </div>
            <div className="col m4 s12">
              <p><strong>Genre: </strong>{jam.genre}</p>
              <p><strong>Decade: </strong>{jam.decade}</p>
              <p><strong>MyCapo: </strong>{jam.myCapo}</p>
              <p><strong>Last Practiced: </strong>{jam.lastPlayed}</p>
              <p>
                <a href={jam.tabLink} target="_blank">
                  <button className="btn grey">
                    Open Tab
                  </button>
                </a>
              </p>
              <p>
                <button className="btn grey">
                  Mark as Played Today
                </button>
              </p>
              <p>
                <button className="btn grey">
                  Edit Jam
                </button>
              </p>
            </div>
          </div>
            <DeleteJam jam={jam} />
          </JamContainer>
        )
      } else {
        return(
          <JamContainer>
            <p className="grey-text">Loading jam...</p>
          </JamContainer>
        )
      }
  }
}

export default JamDetails;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

const GreyButton = styled.button.attrs({
  className: 'btn btn-secondary',
})``

const Edit = styled.button.attrs({
  className: 'btn btn-dark',
})`
  margin-left: 30px;
`

const NoVidLinkBox = styled.div.attrs({
})`
  text-align: center;
  padding-top: 20%;
  padding-bottom: 20%;
  background: GREY;
  color: WHITE;
`

const VidInput = styled.input.attrs({
  className: 'form-control',
  type: 'text',
  id: 'jam.vidLink',
})`
  width: 40%;
  margin-left: 30%
`

class JamDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      jam: []
    };
  }

  componentDidMount = async () => {
    await api.getJamWithID(this.props.match.params.id)
      .then((jam) => {
        this.setState({
          jam: jam
        });
      });
  }

  markPlayed = async () => {
    await api.updateJam(this.props.match.params.id, {
      lastPlayed: Date.now()
    })
      .then((jam) =>{
        this.setState({
          jam: jam
        });
      });
  }

  render() {
    let jam = this.state.jam.data;
      if(jam) {
        return(
          <JamContainer>
            <div className="row">
              <h4>"{jam.title}" - {jam.artist}</h4>
            </div>
            <div className="row">
              <div className="col-4">
                <br />
                <p><strong>Genre: </strong>{jam.genre}</p>
                <p><strong>Decade: </strong>{jam.decade}</p>
                <p><strong>MyCapo: </strong>{jam.myCapo}</p>
                <p><strong>Last Practiced: </strong>{jam.lastPlayed.substring(0, 10)}</p>
                <p>
                  {
                    jam.tabLink
                    ? <a href={jam.tabLink} target="_blank"><GreyButton>Open Tab</GreyButton></a>
                    : <p><i>Click "Edit Jam" to add a tab</i></p>
                  }
                </p>
                <p>
                  <GreyButton onClick={this.markPlayed}> Mark as Played Today</GreyButton>
                </p>
              </div>
              <div className="col-8">
                {
                  jam.vidLink
                  ? <ReactPlayer url={jam.vidLink} controls width="90%" />
                  : <NoVidLinkBox>
                      <h5>NO VIDEO</h5>
                      <p>Click "Edit Jam" and add a video link</p>
                    </NoVidLinkBox>
                }
                
              </div>
            </div>
            <DeleteJam jam={jam} />
            <Link to={`/update/${jam._id}`}>
              <Edit>Edit Jam</Edit>
            </Link>
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
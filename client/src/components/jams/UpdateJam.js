import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';
import api from '../../api';
import { capitalizeFirstLetter, capos, genres, decades } from '../../app/utils';

const JamContainer = styled.div.attrs({
  className: 'jumbotron',
})`
  margin-top: 30px;
  margin-left: 14%;
  width: 72%;
`

const marginTop = {
  marginTop: '10px'
}

class UpdateJam extends Component {
  state = {
    title: "",
    artist: "",
    genre: "",
    decade: 0,
    isFavorite: false,
    myCapo: 0,
    tabLink: "",
    vidLink: ""
  }

  componentDidMount = async() => {
    await api.getJamWithID(this.props.match.params.id)
      .then((jam) => {
        this.setState({
          title: jam.data.title,
          artist: jam.data.artist,
          genre: jam.data.genre,
          decade: jam.data.decade,
          isFavorite: jam.data.isFavorite,
          myCapo: jam.data.myCapo,
          tabLink: jam.data.tabLink,
          vidLink: jam.data.vidLink,
          id: jam.data._id
        });
      });
  }

  handleChange = event => {
    if(event.target.id === 'isFavorite') {
      if(event.target.value === 'on') {
        this.setState({
          [event.target.id]: true
        });
      }
    } else {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  }

  handleSubmit =  async event => {
    event.preventDefault();
    await api.updateJam(this.props.match.params.id, this.state)
      .then(res => 
          this.setState({
          title: "JAMUPDATED"
        })
      );
  }

  render() {
    if(this.state.title === "JAMUPDATED") {
      return (
        <Redirect to='/' />
      )
    }
    return(
      <JamContainer>
        <h4>Edit {this.state.title}</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col m6 s12 form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.handleChange}/>
            </div>
            <div className="col m6 s12 form-group">
              <label htmlFor="artist">Artist:</label>
              <input type="text" id="artist" className="form-control" value={this.state.artist} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col m4 s12 form-group">
              <label htmlFor="decade">Decade</label>
              <select defaultValue="" id="decade" className="form-control" value={this.state.decade} onChange={this.handleChange}>
                <option value="" disabled>Choose a decade</option>
                { decades.map(decade => <option value={decade}>{decade}s</option>) }
              </select>
            </div>
            <div className="col m4 s12 form-group">
              <label htmlFor="genre">Genre</label>
              <select defaultValue={['']} className="form-control" id="genre" value={this.state.genre} onChange={this.handleChange}>
                <option value="" disabled>Choose genre(s)</option>
                { genres.map(genre => <option value={genre}>{capitalizeFirstLetter(genre)}</option>) }
              </select>
            </div>
            <div className="col m2 s6 form-group">
            <label htmlFor="myCapo">MyCapo</label>
              <select id="myCapo" className="form-control" value={this.state.myCapo} onChange={this.handleChange}>
                <option value="" disabled>Preferred capo position</option>
                <option value="0">No capo</option>
                { capos.map(capo =>  capo>0 && <option value={capo.toString}>{capo}</option>) }
              </select>
            </div>
            <div className="col m2 s6 input-field">
              <div className="grey-text lighten-1">Favorite?</div>
              <div className="custom-control custom-switch">
                {
                  (this.state.isFavorite)
                    ? <input type="checkbox" className="custom-control-input" id="isFavorite" onChange={this.handleChange} checked />
                    : <input type="checkbox" className="custom-control-input" id="isFavorite" onChange={this.handleChange} />
                }
                <label className="custom-control-label" htmlFor="isFavorite"></label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m6 s12 input-field">
              <label htmlFor="title">Tab URL:</label>
              <input placeholder="Link to your favorite tab..." id="tabLink" type="text" className="form-control" onChange={this.handleChange}/>
            </div>
            <div className="col m6 s12 input-field">
              <label htmlFor="title">Video URL:</label>
              <input placeholder="Link to your favorite tutorial or music video..." id="vidLink" type="text" className="form-control" onChange={this.handleChange}/>
            </div>
          </div>
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
        <Link to={`/jams/${this.state.id}`}>
          <button className="btn btn-secondary" style={marginTop}>Cancel</button>
        </Link>
      </JamContainer>
    )
  }
  
}


export default UpdateJam;
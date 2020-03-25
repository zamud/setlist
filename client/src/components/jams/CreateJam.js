import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
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



class CreateJam extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      artist: "",
      genre: "",
      decade: 0,
      isFavorite: false,
      myCapo: 0,
      tabLink: "",
      vidLink: "",
      lastPlayed: Date.now()
    }
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
    await api.addNewJam(this.state)
      .then(res => 
          this.setState({
          title: "JAMCREATED"
        })
      );
  }

  render() {
    if(this.state.title === "JAMCREATED") {
      return (
        <Redirect to='/' />
      )
    }
    return(
      <JamContainer>
        <h4>Add a New Jam</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col m6 s12 form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" className="form-control" onChange={this.handleChange}/>
            </div>
            <div className="col m6 s12 form-group">
              <label htmlFor="artist">Artist:</label>
              <input type="text" id="artist" className="form-control" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col m4 s12 form-group">
              <label htmlFor="decade">Decade</label>
              <select defaultValue="" id="decade" className="form-control" onChange={this.handleChange}>
                <option value="" disabled>Choose a decade</option>
                { decades.map(decade => <option value={decade}>{decade}s</option>) }
              </select>
            </div>
            <div className="col m4 s12 form-group">
              <label htmlFor="genre">Genre</label>
              <select defaultValue={''} className="form-control" id="genre" onChange={this.handleChange}>
                <option value="" disabled>Choose genre(s)</option>
                { genres.map(genre => <option value={genre}>{capitalizeFirstLetter(genre)}</option>) }
              </select>
            </div>
            <div className="col m2 s6 form-group">
            <label htmlFor="myCapo">MyCapo</label>
              <select id="myCapo" className="form-control" onChange={this.handleChange}>
                <option value="" disabled>Preferred capo position</option>
                <option value="0">No capo</option>
                { capos.map(capo =>  capo>0 && <option value={capo.toString}>{capo}</option>) }
              </select>
            </div>
            <div className="col m2 s6 input-field">
              <div className="grey-text lighten-1">Favorite?</div>
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="isFavorite" onChange={this.handleChange} />
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
      </JamContainer>
    )
  }
  
}


export default CreateJam;
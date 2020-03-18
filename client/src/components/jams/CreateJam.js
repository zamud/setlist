import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import styled from 'styled-components';
import api from '../../api';

const JamContainer = styled.div.attrs({
  className: 'jumbotron',
})`
  margin-top: 30px;
  margin-left: 14%;
  width: 72%;
`

class CreateJam extends Component {
  state = {
    title: "",
    artist: "",
    genre: "",
    decade: 0,
    lastPlayed: (new Date()).getMonth()+'/'+(new Date()).getDate()+'/'+(new Date()).getFullYear(),
    isFavorite: false,
    myCapo: 0,
    tabLink: "",
    vidLink: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit =  async event => {
    event.preventDefault();
    console.log("SUBMITTING");
    console.log(this.state);
    await api.addNewJam(this.state)
      .then(res => this.setState({
        title: "JAMCREATED"
      }));
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
              <label htmlFor="title">Artist:</label>
              <input type="text" id="artist" className="form-control" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="col m4 s12 form-group">
              <label htmlFor="decade">Decade</label>
              <select defaultValue="" id="decade" className="form-control" onChange={this.handleChange}>
                <option value="" disabled>Choose a decade</option>
                <option value="2010">2010s</option>
                <option value="2000">2000s</option>
                <option value="1990">1990s</option>
                <option value="1980">1980s</option>
                <option value="1970">1970s</option>
                <option value="1960">1960s</option>
                <option value="1950">1950s</option>
              </select>
            </div>
            <div className="col m4 s12 form-group">
              <label htmlFor="genre">Genre</label>
              <select multiple defaultValue={['']} className="form-control" id="genre">
                <option value="" disabled>Choose genre(s)</option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="punk">Punk</option>
                <option value="emo">Emo</option>
                <option value="folk">Folk</option>
                <option value="country">Country</option>
                <option value="electronic">Electronic</option>
                <option value="soundtrack">Soundtrack</option>
              </select>
            </div>
            <div className="col m2 s6 form-group">
            <label htmlFor="myCapo">MyCapo</label>
              <select id="myCapo" className="form-control" onChange={this.handleChange}>
                <option value="" disabled>Preferred capo position</option>
                <option value="0">No capo</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
            <div className="col m2 s6 input-field">
              <div className="grey-text lighten-1">Favorite?</div>
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="isFavorite" />
                <label class="custom-control-label" for="isFavorite"></label>
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
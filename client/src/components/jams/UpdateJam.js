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
        console.log("GOT THE JAM");
        console.log(jam);
        this.setState({
          title: jam.data.title,
          artist: jam.data.artist,
          genre: jam.data.genre,
          decade: jam.data.decade,
          isFavorite: jam.data.isFavorite,
          myCapo: jam.data.myCapo,
          tabLink: jam.data.tabLink,
          vidLink: jam.data.vidLink
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
              <select multiple defaultValue={['']} className="form-control" id="genre" value={this.state.genre} onChange={this.handleChange}>
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
              <select id="myCapo" className="form-control" value={this.state.myCapo} onChange={this.handleChange}>
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
      </JamContainer>
    )
  }
  
}


export default UpdateJam;
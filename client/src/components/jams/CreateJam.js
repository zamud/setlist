import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import styled from 'styled-components';
import api from '../../api';
import { capitalizeFirstLetter, capos, genres, decades } from '../../app/utils';
import { Formik } from 'formik';
import * as Yup from 'yup';

const JamContainer = styled.div.attrs({
  className: 'jumbotron',
})`
  margin-top: 30px;
  margin-left: 14%;
  width: 72%;
`

const ErrorMessage = styled.div.attrs({
  className: 'alert alert-danger',
  role: 'alert'
})

const validationSchema = Yup.object({
  title: Yup.string().required(),
  artist: Yup.string().required(),
  genre: Yup.string().required(),
  decade: Yup.number().required(),
  tabLink: Yup.string().url(),
  vidLink: Yup.string().url()
})

class CreateJam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jamCreated: false
    }
  }

  render() {
    if(this.state.jamCreated) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <JamContainer>
        <h4>Add a New Jam</h4>
        <Formik
          initialValues= {{title: "",
            artist: "",
            genre: "",
            decade: "",
            isFavorite: false,
            myCapo: 0,
            tabLink: "",
            vidLink: ""
          }}
          validationSchema={validationSchema}
          onSubmit = {async (values) => {
            await api.addNewJam(values)
              .then(res => 
                this.setState({
                  jamCreated: true
                }));
            }
          }>
          {({ handleChange, handleSubmit, handleReset, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col m6 s12 form-group">
                  <label htmlFor="title">Title:</label>
                  <input type="text" id="title" value={values.title} className="form-control" onChange={handleChange}/>
                  {errors.title ? errors.title : null}
                </div>
                <div className="col m6 s12 form-group">
                  <label htmlFor="artist">Artist:</label>
                  <input type="text" id="artist" value={values.artist} className="form-control" onChange={handleChange}/>
                  {errors.artist ? errors.artist : null}
                </div>
              </div>
              <div className="row">
                <div className="col m4 s12 form-group">
                  <label htmlFor="decade">Decade</label>
                  <select defaultValue="" value={values.decade} id="decade" className="form-control" onChange={handleChange}>
                    <option value="" disabled>Choose a decade</option>
                    { decades.map(decade => <option value={decade}>{decade}s</option>) }
                  </select>
                  {errors.decade ? errors.decade : null}
                </div>
                <div className="col m4 s12 form-group">
                  <label htmlFor="genre">Genre</label>
                  <select defaultValue="" value={values.genre} className="form-control" id="genre" onChange={handleChange}>
                    <option value="" disabled>Choose genre(s)</option>
                    { genres.map(genre => <option value={genre}>{capitalizeFirstLetter(genre)}</option>) }
                  </select>
                  {errors.genre ? errors.genre : null}
                </div>
                <div className="col m2 s6 form-group">
                <label htmlFor="myCapo">MyCapo</label>
                  <select id="myCapo" className="form-control" onChange={handleChange}>
                    <option value="" disabled>Preferred capo position</option>
                    <option value="0">No capo</option>
                    { capos.map(capo =>  capo>0 && <option value={capo.toString}>{capo}</option>) }
                  </select>
                </div>
                <div className="col m2 s6 input-field">
                  <div className="grey-text lighten-1">Favorite?</div>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="isFavorite" onChange={handleChange} />
                    <label className="custom-control-label" htmlFor="isFavorite"></label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col m6 s12 input-field">
                  <label htmlFor="tabLink">Tab URL:</label>
                  <input placeholder="Link to your favorite tab..." id="tabLink" type="text" className="form-control" onChange={handleChange}/>
                  {errors.tabLink ? errors.tabLink : null}
                </div>
                <div className="col m6 s12 input-field">
                  <label htmlFor="vidLink">Video URL:</label>
                  <input placeholder="Link to your favorite tutorial or music video..." id="vidLink" type="text" className="form-control" onChange={handleChange}/>
                  {errors.vidLink ? errors.vidLink : null}
                </div>
              </div>
              <br />
              <button className="btn btn-primary">Submit</button>&nbsp;&nbsp;
              <button className="btn btn-secondary" onClick={handleReset}>Start Over</button>
            </form>
          )}
          </Formik>
      </JamContainer>
    )
  }
}


export default CreateJam;
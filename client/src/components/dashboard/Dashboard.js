import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FiltersAndLogo from './FiltersAndLogo';
import JamSummary from '../jams/JamSummary';
import JamList from '../jams/JamList';
import styled from 'styled-components';
import api from '../../api';

const MainContainer = styled.div.attrs({
  className: 'dashboard container',
})``

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jams: [],
      genreFilter: "",
      decadeFilter: "",
      showFavorites: false,
      showRusty: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFavoriteChange = this.handleFavoriteChange.bind(this);
    this.handleRustyChange = this.handleRustyChange.bind(this);
  }

  componentDidMount = async () => {
    await api.getJams()
      .then((jams) => {
        this.setState((prevState) => ({
          ...prevState,
          jams: jams.data
        }));
      });
  }

  handleClick = event => {
    event.preventDefault();
  }

  handleFavoriteChange = () => {
    this.setState(prevState => ({
        showFavorites: !prevState.showFavorites
      }));
  }

  handleRustyChange = () => {
    this.setState(prevState => ({
      showRusty: !prevState.showRusty
    }));
}

  render () {
    console.log("RENDER STATE")
    console.log(this.state);
    return(
      <MainContainer>
        <FiltersAndLogo 
          handleClick={this.handleClick}
          handleFavoriteChange={this.handleFavoriteChange}
          handleRustyChange={this.handleRustyChange}
          genreFilter={this.state.genreFilter}
          decadeFilter={this.state.decadeFilter}
          showFavorites={this.state.showFavorites}
          showRusty={this.state.showRusty} 
          />
        <JamList 
          jams={this.state.jams}
          genreFilter={this.state.genreFilter}
          decadeFilter={this.state.decadeFilter}
          showFavorites={this.state.showFavorites}
          showRusty={this.state.showRusty} 
          />
      </MainContainer>
    )
  }
}

export default Dashboard;
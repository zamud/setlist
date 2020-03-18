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
      jams: []
    };
  }

  componentDidMount = async () => {

    await api.getJams()
      .then((jams) => {
        this.setState({
          jams: jams.data
        });
      });
  }

  render () {
    const { jams } = this.state;
    return(
      <MainContainer>
        <FiltersAndLogo />
        <JamList jams={jams} />
      </MainContainer>
    )
  }
}

export default Dashboard;
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import styled from 'styled-components';
import api from '../../api';

const Delete = styled.button.attrs({
  className: 'btn btn-danger',
})``

class DeleteJam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleted: false
    }
  }
  
  handleDelete = event => {
    event.preventDefault();

    if(window.confirm(`Delete \"${this.props.jam.title}\" permanently?"`)) {
      api.deleteJam(this.props.jam._id);
      this.setState({ isDeleted: true })
    }
  }

  render() {
    if(this.state.isDeleted) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <Delete onClick={this.handleDelete}>Delete</Delete>
    )
  }
}

export default DeleteJam;
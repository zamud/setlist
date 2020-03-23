import React, {Component} from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import logo from '../../img/setlist-logo-black-center.png';
import styled from 'styled-components';

const Row = styled.div.attrs({
  className: 'row',
})``

const RowItem = styled.div.attrs({
  className: 'col-md-3',
})`
  margin-top: 10px;
  margin-bottom: 30px;
`

const alignRightStyle = {
  paddingLeft: '9%' 
}

const LogoRowItem = styled.div.attrs({
  className: 'col-md-4 offset-md-4',
})`
  text-align: center;
  margin-top: 30px;
`

const FilterButton = styled.button.attrs({
  className: 'btn btn-secondary btn-lg btn-block',
})``

const ToggleContainer = styled.div.attrs({
  className: 'align-self-center'
})`
  background-color: GREY;
  border-radius: 8px;
  padding: 10px;
  height: 46px;
  width: 170px;
  text-align: center;
`

const ToggleLabel = styled.label.attrs({})`
  color: WHITE;
  font-size: 1.25rem;
  line-height: 1.5;
  margin-left: 10px;
`

class FiltersAndLogo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      genreFilter: "",
      decadeFilter: "",
      showFavorites: false,
      showRusty: false
    }
  }

  render() {
    return(
      <div>
        <Row>
          <LogoRowItem>
            <img src={logo} alt="logo" className="logo-img" />
          </LogoRowItem>
        </Row>
        <Row>
          <RowItem>
            <DropdownButton title='Genre' id='genre' size='lg' drop='up' variant='secondary' block>
              <Dropdown.Item href="#/action-1">Pop</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Rock</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Punk</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Emo</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Folk</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Electronic</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Soundtrack</Dropdown.Item>
            </DropdownButton>
          </RowItem>
          <RowItem>
          <DropdownButton title='Decade' id='decade' size='lg' drop='up' variant='secondary' block>
              <Dropdown.Item href="#/action-1">1960s</Dropdown.Item>
              <Dropdown.Item href="#/action-2">1970s</Dropdown.Item>
              <Dropdown.Item href="#/action-2">1980s</Dropdown.Item>
              <Dropdown.Item href="#/action-2">1990s</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2000s</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2010s</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2020s</Dropdown.Item>
            </DropdownButton>
          </RowItem>
          <RowItem style={alignRightStyle}>
            <ToggleContainer>
              <Toggle value={this.state.showFavorites} id='favorites' />
              <ToggleLabel htmlFor='favorites'>Favorites</ToggleLabel>
            </ToggleContainer>
          </RowItem>
          <RowItem style={alignRightStyle}>
            <ToggleContainer>
              <Toggle value={this.state.showFavorites} id='favorites' />
              <ToggleLabel htmlFor='favorites'>I'm Rusty</ToggleLabel>
            </ToggleContainer>
          </RowItem>
        </Row>
      </div>
    )
  }
}

export default FiltersAndLogo;
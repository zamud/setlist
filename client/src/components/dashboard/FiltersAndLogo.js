import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import logo from '../../img/setlist-logo-black-center.png';
import styled from 'styled-components';
import { capitalizeFirstLetter, genres, decades } from '../../app/utils';

const Row = styled.div.attrs({
  className: 'row',
})``

const RowItem = styled.div.attrs({
  className: 'col-md-3',
})`
  margin-top: 10px;
  margin-bottom: 15px;
`

const FilterDisplay = styled.div.attrs({})`
  margin-left: 5%;
  margin-top: 5px;
  text-align: center;
  background-color: rgba(0, 255, 0, 0.5);
  font-weight: bold;
  border-radius: 15px;
  width: 30%;
  height: 1.5rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
`

const Placeholder = styled.div.attrs({})`
  margin-left: 5%;
  margin-top: 5px;
  width: 30%;
  height: 1.5rem;
  visibility: hidden;
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

const blockStyle = {
  display: 'block'
}

const FiltersAndLogo = ({handleGenreSelect, handleDecadeSelect, handleFavoriteChange, handleRustyChange, genreFilter, decadeFilter, showFavorites, showRusty}) => {
  return(
    <div>
      <Row>
        <LogoRowItem>
          <img src={logo} alt="logo" className="logo-img" />
        </LogoRowItem>
      </Row>
      <Row>
        <RowItem>
          <DropdownButton title='Genre' id='genre' size='lg' drop='up' variant='secondary' onSelect={handleGenreSelect} style={blockStyle}>
            <Dropdown.Item eventKey=''>All</Dropdown.Item>
            { genres.map(genre => <Dropdown.Item eventKey={genre}>{capitalizeFirstLetter(genre)}</Dropdown.Item>) }
          </DropdownButton>
          {
            genreFilter
            ? <FilterDisplay>{capitalizeFirstLetter(genreFilter)}</FilterDisplay>
            : <Placeholder />
          }
        </RowItem>
        <RowItem>
        <DropdownButton title='Decade' id='decade' size='lg' drop='up' variant='secondary' onSelect={handleDecadeSelect}>
            <Dropdown.Item eventKey=''>All</Dropdown.Item>
            { decades.map(decade => <Dropdown.Item eventKey={decade.toString}>{decade}s</Dropdown.Item>) }
          </DropdownButton>
          {
            decadeFilter
            ? <FilterDisplay>{`${decadeFilter.toString()}s`}</FilterDisplay>
            : <Placeholder />
          }
        </RowItem>
        <RowItem style={alignRightStyle}>
          <ToggleContainer>
            <Toggle checked={showFavorites} onChange={handleFavoriteChange} id='showFavorites' />
            <ToggleLabel htmlFor='favorites'>Favorites</ToggleLabel>
          </ToggleContainer>  
        </RowItem>
        <RowItem style={alignRightStyle}>
          <ToggleContainer>
            <Toggle checked={showRusty} onChange={handleRustyChange} id='showRusty' />
            <ToggleLabel htmlFor='rusty'>Been a Bit</ToggleLabel>
          </ToggleContainer>
        </RowItem>
      </Row>
    </div>
  )
}

export default FiltersAndLogo;
import React, {Component} from 'react';
import logo from '../../img/setlist-logo-black-center.png';
import styled from 'styled-components';

const Row = styled.div.attrs({
  className: 'row',
})`padding-bottom: 30px;`

const RowItem = styled.div.attrs({
  className: 'col m2 s4 btn-dashboard align-self-center',
})``

const FilterButton = styled.button.attrs({
  className: 'btn btn-outline-light btn-lg btn-block',
})``

class FiltersAndLogo extends Component {
  render() {
    return(
      <Row>
        <RowItem>
          <FilterButton><strong>Decade</strong></FilterButton>
        </RowItem>
        <RowItem>
          <FilterButton><strong>Genre</strong></FilterButton>
        </RowItem>
        <RowItem>
          <img src={logo} alt="logo" className="logo-img" />
        </RowItem>
        <RowItem>
          <FilterButton><strong>Favorites</strong></FilterButton>
        </RowItem>
        <RowItem>
          <FilterButton><strong>Rusty</strong></FilterButton>
        </RowItem>
      </Row>
    )
  }
}

export default FiltersAndLogo;
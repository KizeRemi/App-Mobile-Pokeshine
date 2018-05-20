import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import ButtonGen from './ButtonGen';

import { POKESHINE_COLORS_GEN }from './constants';

class ScrollGen extends PureComponent {
  static propTypes = {
    switchGeneration: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { activeGen: 1 };
  }

  onClick = (gen) => {
    this.props.switchGeneration(gen);
    this.setState({ activeGen: gen });
  }

  render() {
    const { switchGeneration } = this.props;
    const { activeGen } = this.state;
    return (
      <ScrollView style={{ backgroundColor: POKESHINE_COLORS_GEN[activeGen], height: 50 }} horizontal>
        <ButtonGen onClick={this.onClick} active={activeGen === 1} gen={1} text="Kanto" />
        <ButtonGen onClick={this.onClick} active={activeGen === 2} gen={2} text="Johto" />
        <ButtonGen onClick={this.onClick} active={activeGen === 3} gen={3} text="Hoenn" />
        <ButtonGen onClick={this.onClick} active={activeGen === 4} gen={4} text="Sinnoh" />
        <ButtonGen onClick={this.onClick} active={activeGen === 5} gen={5} text="Unys" />
        <ButtonGen onClick={this.onClick} active={activeGen === 6} gen={6} text="Kalos" />
        <ButtonGen onClick={this.onClick} active={activeGen === 7} gen={7} text="Alola" />
      </ScrollView>
    )
  }
}

export default ScrollGen;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import ButtonGen from './ButtonGen';

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
    console.log(gen);
    this.setState({ activeGen: gen });
  }

  render() {
    const { switchGeneration } = this.props;
    const { activeGen } = this.state;
    return (
      <ScrollView style={{ backgroundColor: '#b3dbfd', height: 50 }} horizontal>
        <ButtonGen onClick={this.onClick} active={activeGen === 1} gen={1} text="Kanto" />
        <ButtonGen onClick={this.onClick} active={activeGen === 2} gen={2} text="Johto" />
        <ButtonGen onClick={this.onClick} active={activeGen === 3} gen={3} text="Hoenn" />
        <ButtonGen onClick={this.onClick} active={activeGen === 4} gen={4} text="Gen 4" />
        <ButtonGen onClick={this.onClick} active={activeGen === 5} gen={5} text="Gen 5" />
        <ButtonGen onClick={this.onClick} active={activeGen === 6} gen={6} text="Gen 6" />
        <ButtonGen onClick={this.onClick} active={activeGen === 7} gen={7} text="Gen 7" />
      </ScrollView>
    )
  }
}

export default ScrollGen;
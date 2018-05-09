import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { ScrollButton } from '../../../components/Buttons';
import { TextScroll } from '../../../components/Texts';

class ButtonGen extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    gen: PropTypes.number.isRequired,
  };

  onPress = () => {
    this.props.onClick(this.props.gen);
  }

  render() {
    const { active, text } = this.props;
    return (
      <ScrollButton active={active} onPress={this.onPress}>
        <TextScroll active={active}>{text}</TextScroll>
      </ScrollButton>
    )
  }
}

export default ButtonGen;
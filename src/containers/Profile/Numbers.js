import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { NumbersContent, NumbersBloc } from '../../components/Views';
import { TextNumbersTitle, TextNumbers } from '../../components/Texts';

class ProfileNumbers extends PureComponent {
  static propTypes = {
    nbrShinies: PropTypes.number.isRequired,
  };

  render () {
		const { nbrShinies } = this.props;
    return (      
      <NumbersContent>
        <NumbersBloc backgroundColor={'#939AD1'}>
					<TextNumbersTitle>{'Shinies'.toUpperCase()}</TextNumbersTitle>
					<TextNumbers>{nbrShinies}</TextNumbers>
        </NumbersBloc>
        <NumbersBloc backgroundColor={'#6770B3'}>
					<TextNumbersTitle>{'Followers'.toUpperCase()}</TextNumbersTitle>
					<TextNumbers>{15}</TextNumbers>
				</NumbersBloc>
        <NumbersBloc backgroundColor={'#40498F'}>					
					<TextNumbersTitle>{'LIKES'.toUpperCase()}</TextNumbersTitle>
					<TextNumbers>{132}</TextNumbers>
				</NumbersBloc> 
      </NumbersContent>
    );
  }
}

export default ProfileNumbers;
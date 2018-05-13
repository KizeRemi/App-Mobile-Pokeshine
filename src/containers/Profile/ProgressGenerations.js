import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ProfileProgressContainer, ProfileProgressContent } from '../../components/Views';
import { ProgressTitle } from '../../components/Texts';
import ProgressCircleContent from './ProgressCircleContent';

class ProgressGenerations extends Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
    counterShinies: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {

  }

  render() {
    console.log(this.props.counterShinies);
    return ( 
      <ProfileProgressContainer>
        <ProgressTitle>Progression par génération</ProgressTitle>
        <ProfileProgressContent>
          <ProgressCircleContent color='#4AE371' progress={0.1} title={'Kanto'} />
          <ProgressCircleContent color='#FF4848' progress={0.1} title={'Johto'} />
          <ProgressCircleContent color='#62A9FF' progress={0.1} title={'Kanto'} />
          <ProgressCircleContent color='#6755E3' progress={0.1} title={'Kanto'} />
          <ProgressCircleContent color='#F7DE00' progress={0.1} title={'Kanto'} />
          <ProgressCircleContent color='#C98A4B' progress={0.1} title={'Kanto'} />
          <ProgressCircleContent color='#5EAE9E' progress={0.1} title={'Kanto'} />
        </ProfileProgressContent>
      </ProfileProgressContainer>  
    );
  }
}

const mapStateToProps = state => ({
  counterShinies: state.pokemon.counterShinies,
  userId: state.member.id,
});

export default connect(mapStateToProps)(ProgressGenerations);

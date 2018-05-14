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
    const { counterShinies } = this.props;
    return ( 
      <ProfileProgressContainer>
        <ProgressTitle>Progression par génération</ProgressTitle>
        <ProfileProgressContent>
          <ProgressCircleContent color='#4AE371' progress={counterShinies[1]} gen={1} />
          <ProgressCircleContent color='#FF4848' progress={counterShinies[2]} gen={2} />
          <ProgressCircleContent color='#62A9FF' progress={counterShinies[3]} gen={3} />
          <ProgressCircleContent color='#6755E3' progress={counterShinies[4]} gen={4} />
          <ProgressCircleContent color='#F7DE00' progress={counterShinies[5]} gen={5} />
          <ProgressCircleContent color='#C98A4B' progress={counterShinies[6]} gen={6} />
          <ProgressCircleContent color='#5EAE9E' progress={counterShinies[7]} gen={7} />
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentTries } from '../../../actions/CurrentHunt';
import { TriesText, TriesLabel } from '../../../components/Texts';
import { TriesContainer, MeasurementBloc } from '../../../components/Views';
import { AddTryButton } from '../../../components/Buttons';
import { AddIcon } from '../../../components/Icons';

class TriesPanel extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired,
    currentTries: PropTypes.number.isRequired,
    updateCurrentTries: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { currentTries: props.currentTries || 0 };
  }

  incrementTries = () => {
    const { token, updateCurrentTries, currentTries } = this.props;
    updateCurrentTries(token, currentTries);
  }

  render() {
    const { currentTries } = this.props;
    return (
      <TriesContainer>
        <MeasurementBloc>
          <TriesText>{currentTries}</TriesText>
          <TriesLabel>Nombre d'essais</TriesLabel>
        </MeasurementBloc>
          <AddTryButton onPress={this.incrementTries}>
            <AddIcon color='#30c7fe'></AddIcon>
            <TriesLabel>Ajouter</TriesLabel>
          </AddTryButton>
      </TriesContainer>
    )
  }
}

const mapStateToProps = state => ({
  token: state.member.token,
  currentTries: state.member.currentTries,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentTries: (token, tries) => updateCurrentTries(token, tries, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TriesPanel);

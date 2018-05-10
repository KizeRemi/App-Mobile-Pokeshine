import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackgroundWhite, ProfileTitleSettings, InputContainer } from '../../../components/Views';
import { loadShiny } from '../../../actions/pokemon';

class Shiny extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    shiny: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { id, number } = this.props;
    this.props.loadShiny(id, number);
  }

  render() {
    console.log(this.props);
    return (
      <BackgroundWhite>

      </BackgroundWhite>
    )
  }
}

const mapStateToProps = state => ({
  id: state.member.id,
  shiny: state.shiny,
  isLoading: state.shiny.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadShiny: (token, number) => loadShiny(token, number, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shiny);
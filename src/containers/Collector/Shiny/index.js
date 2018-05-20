import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { BackgroundWhite, CenteredBloc } from '../../../components/Views';
import { BackgroundType, ShinyImage } from '../../../components/Images';
import { ShinyDescription, LoadingText } from '../../../components/Texts';
import { loadShiny } from '../../../actions/pokemon';
import { Actions } from 'react-native-router-flux';
import { getTypeIcon } from '../../../utils/Types';

import Measurement from './Measurement';
import Tries from './Tries';
import CatchDate from './CatchDate';
import NoImage from '../../../images/no-image.png';

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

  componentDidUpdate() {
    const { number, shiny } = this.props;
    Actions.refresh({ title: `#${number} ${shiny.pokemon.name.toUpperCase()}`});
  }

  render() {
    const { isLoading, shiny, number } = this.props;
    const { pokemon } = shiny;
    let assets = null;
    if (shiny.pokemon) {
      assets = getTypeIcon(shiny.pokemon.pokemonTypes[0].name);
    }

    return (
      <BackgroundWhite>
        {isLoading ? (
          <LoadingText>Chargement en cours...</LoadingText>
        ) : (
          <Fragment>
            {shiny.pokemon ? (
              <LinearGradient
                colors={assets.colors}
                style={{ paddingBottom: 50 }}
              > 
                {shiny.pokemon.pokemonTypes[0].name && <BackgroundType source={assets.icon} />}
                <Tries tries={shiny.tries} color={assets.colors[0]}/>
                <CenteredBloc>
                  <CatchDate catchDate={shiny.catchDate} color={assets.colors[0]} />
                  {shiny.image ? (
                    <ShinyImage source={{uri: 'http://www.pokeshine.remi-mavillaz.fr/uploads/shinies/' + shiny.image }} />
                  ) : (
                    <ShinyImage source={NoImage} />
                  )}
                  <Measurement color={assets.colors[0]} height={10} weight={55} />
                  <ShinyDescription>{shiny.description}</ShinyDescription>
                </CenteredBloc>
              </LinearGradient>
            ) : (
              <LoadingText>Aucun shiny</LoadingText>
            )}
          </Fragment>
        )}
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
    loadShiny: (id, number) => loadShiny(id, number, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shiny);
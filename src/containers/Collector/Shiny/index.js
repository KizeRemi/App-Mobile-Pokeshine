import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackgroundWhite, DescriptionBloc } from '../../../components/Views';
import { TextShinyPageTitle, TextTitleDescription, ShinyDescription } from '../../../components/Texts';
import { loadShiny } from '../../../actions/pokemon';
import { Text, View, Image } from 'react-native';

import Img from '../../../images/shiny.png';
import SocialContent from './SocialContent';
import Measurement from './Measurement';

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
    const { isLoading, shiny, number } = this.props;
    const { pokemon } = shiny;
    return (
      <BackgroundWhite>
        {isLoading ? (
          <Text>Chargement en cours...</Text>
        ) : (
          <Fragment>
            {shiny.pokemon && (
              <View style={{ margin: 20 }}>
                <TextShinyPageTitle>{`#${number} ${pokemon.name}`}</TextShinyPageTitle>
                <SocialContent />
                <Text style={{ marginTop: 15 }}>Medias</Text>
                <Image style={{ marginVertical: 15,  width: '100%', height: 180 }} source={{uri: 'http://www.pokeshine.remi-mavillaz.fr/uploads/shinies/' + shiny.image }} />
                <Measurement height={10} weight={55} />
                <DescriptionBloc>
                  <TextTitleDescription>Description de la capture</TextTitleDescription>
                  <ShinyDescription>{shiny.description ? shiny.description : 'Aucune description disponible'}</ShinyDescription>
                </DescriptionBloc>
              </View>
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
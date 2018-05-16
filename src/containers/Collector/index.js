import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Background, Header, CollectorContent } from '../../components/Views';
import { View, Text } from 'react-native';
import ScrollGen from './ScrollGen';
import { TextHeader } from '../../components/Texts';
import { getShinyCollection } from '../../actions/pokemon';
import ShinyBloc from './ShinyBloc';
import NumberBloc from './NumberBloc';
import ProgressGeneration from './ProgressGeneration';


import { PKMN_BY_GEN } from './constants';


class Collector extends Component {
  static propTypes = {
    member: PropTypes.shape({}).isRequired,
    shinyCollection: PropTypes.array.isRequired,
    getShinyCollection: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props) 
    this.state = { generation: 1, shiniesArray: [] };
  }

  componentDidMount() {
    const { member, getShinyCollection } = this.props;
    getShinyCollection(member.token, member.id, 0, this.state.generation);
  }

  switchGeneration = (generation) => {
    const { member, getShinyCollection } = this.props;
    getShinyCollection(member.token, member.id, 0, generation);
    this.setState({ generation });
  }

  render() {
    const { shinyCollection, counterShinies } = this.props;
    const { generation } = this.state;
    const range = PKMN_BY_GEN[generation - 1];
    const shiniesByGen = shinyCollection.slice(range.start, range.end);

    return (
      <Background>
        <Header><TextHeader>SHINYDEX</TextHeader></Header>
        <ScrollGen switchGeneration={this.switchGeneration} />
        <ProgressGeneration counter={counterShinies[generation]} total={range.end - range.start} />
        <CollectorContent>
        {shiniesByGen.map((shiny, index) =>
          <Fragment key={index}>
            {typeof shiny === 'object' ? <ShinyBloc shiny={shiny} /> : <NumberBloc number={shiny} />}
          </Fragment>
        )}
        </CollectorContent>
      </Background>   
    )
  }
}

const mapStateToProps = state => ({
  member: state.member,
  shinyCollection: state.pokemon.list,
  counterShinies: state.pokemon.counterShinies,
  isLoading: state.pokemon.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getShinyCollection: (token, idUser, offset, gen) => getShinyCollection(token, idUser, offset, gen, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Collector);
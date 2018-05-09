import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Background, Header } from '../../components/Views';
import { Text, View, ScrollView } from 'react-native';
import ScrollGen from './ScrollGen';
import { TextHeader } from '../../components/Texts';
import { getShinyCollection } from '../../actions/pokemon';
import ShinyBloc from './ShinyBloc';
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
    getShinyCollection(member.token, 0, this.state.generation);
  }

  switchGeneration = (generation) => {
    const { member, getShinyCollection } = this.props;
    getShinyCollection(member.token, 0, generation);
    this.setState({ generation });
  }

  render() {
    const { shinyCollection } = this.props;
    const range = PKMN_BY_GEN[this.state.generation - 1];
    const shiniesByGen = shinyCollection.slice(range.start, range.end);
    return (
      <Background>
        <Header><TextHeader>SHINYDEX</TextHeader></Header>
        <ScrollGen switchGeneration={this.switchGeneration} />
        <View style={{ margin: 10, flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'  }}>
        {shiniesByGen.map((shiny, index) =>
            <ShinyBloc shiny={shiny} key={index} />
        )}
        </View>
      </Background>   
    )
  }
}

const mapStateToProps = state => ({
  member: state.member,
  shinyCollection: state.pokemon.list,
  isLoading: state.pokemon.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getShinyCollection: (token, offset, gen) => getShinyCollection(token, offset, gen, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Collector);
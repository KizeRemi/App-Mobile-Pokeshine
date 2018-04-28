import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, H1, H2, H3, Button } from 'native-base';

class Home extends Component {

  render = () => {
    return (
      <Container>
        <Content padder>
        <H1>Heading 1</H1>
        <Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </Text>

        <H2>Heading 2</H2>
        <Text>Elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </Text>

        <H3>Heading 3</H3>
        <Text>Elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </Text>
        </Content>
      </Container>
    )
  }
}

export default Home;
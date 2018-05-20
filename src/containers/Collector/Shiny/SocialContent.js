import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { SocialContainer } from '../../../components/Views';
import { SocialButton } from '../../../components/Buttons';
import { SocialIcon } from '../../../components/Icons';

class SocialContent extends Component {
  render() {
    return (    
      <SocialContainer>
        <SocialButton><SocialIcon></SocialIcon></SocialButton>
        <SocialButton><SocialIcon></SocialIcon></SocialButton>
      </SocialContainer>
    )
  }
}

export default SocialContent;
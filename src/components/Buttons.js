import styled from "styled-components";

export const ScrollButton = styled.TouchableOpacity`
  width: 80;
  justify-content: center;
  align-items: center;
  ${props => props.active ? 'border-bottom-width: 3' : null};
  ${props => props.active ? 'border-bottom-color: #fff' : null};
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 50;
  margin-horizontal: 30;
  margin-top: 20;
  background-color: #b3dbfd;
  justify-content: center;
  align-items: center;
`;

export const ShinyContent = styled.TouchableOpacity`
  width: 150;
  height: 100;
  border-radius: 10;
  justify-content: center;
  align-items: center;
  margin-vertical: 5;
  margin-horizontal: 5;
  background-color: white;
`;

export const SocialButton = styled.TouchableOpacity`
  height: 40;
  width: 70;
  background-color: #b3dbfd;
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;
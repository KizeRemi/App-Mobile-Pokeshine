import styled from "styled-components";

const blue = '#82daf2';

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
  width: 160;
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

export const AddTryButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const ShinyPictureButton = styled.TouchableOpacity`
  align-items: center;
  height: 50;
  width: 100%;
  border-width: 1;
  border-radius: 5;
  margin-vertical: 15;
  justify-content: center;
  flex-direction: row;
`;

export const UpdateProfileButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  height: 40;
  width: 230;
  borderWidth: 2;
  borderRadius: 20;
  justify-content: center;
  top: -20;
  border-color: ${blue};
  background-color: #FFF;
`;

export const AuthButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40;
  border-color: #fff;
  border-width: 1;
  background-color: ${blue};
  margin-vertical: 15;
`;
import styled from "styled-components";

export const ProfileIcons = styled.Text`
  color: #A09F9F;
  font-size: 28;
  font-family: faRegular;
`;

export const UpdateIcon = styled.Text`
  color: #FFF;
  font-size: 17;
  font-family: faSolid;
  marginLeft: 5;
`;

export const SocialIcon = styled.Text`
  color: #FFF;
  font-size: 25;
  font-family: faRegular;
`;

export const TrophyIcon = styled.Text`
  color: ${props => props.color && props.color };
  font-size: 28;
  font-family: faSolid;
`;

export const AddIcon = styled.Text`
  color: ${props => props.color && props.color };
  font-size: 40;
  font-family: faSolid;
`;
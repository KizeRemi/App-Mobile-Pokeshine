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
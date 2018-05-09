import styled from "styled-components";

export const TextHeader = styled.Text`
  color: #fff;
  font-size: 20;
  font-family: openSansBoldItalic;
`;

export const TextScroll = styled.Text`
  color: #fff;
  font-size: ${props => props.active ? '18' : '16'};
  font-family: oswaldBold;
`;

export const TextUsername = styled.Text`
  margin-top: 15;
  color: #fff;
  font-size: 20;
  font-family: openSansRegular;
`;

export const TextRank = styled.Text`
  color: #fff;
  font-size: 14;
  font-family: openSansRegular;
`;

export const TextNumbersTitle = styled.Text`
  color: #fff;
  font-size: 16;
  font-family: openSansRegular;
`;

export const TextNumbers = styled.Text`
  color: #fff;
  font-size: 22;
  font-family: openSansRegular;
`;

export const TextCategoryTitle = styled.Text`
  color: #4A4A4A;
  font-size: 14;
  font-family: openSansRegular;
`;

export const TextDescription = styled.Text`
  color: #A09F9F;
  font-size: 13;
  font-family: openSansRegular;
  margin-vertical: 10;
`;

export const TextFriendCode = styled.Text`
  color: #A09F9F;
  font-size: 20;
  font-family: oswaldBold;
`;

export const TextTitleSettings = styled.Text`
  color: #4A4A4A;
  font-size: 24;
  font-family: oswaldBold;
  margin-bottom: 20;
`;

export const TextDescriptionSettings = styled.Text`
  color: #A09F9F;
  font-size: 13;
  font-family: openSansBoldItalic;
`;

export const TextLabel = styled.Text`
  color: #A09F9F;
  font-size: 13;
  font-family: openSansRegular;
  margin-bottom: 5;
`;


export const TextSubmit = styled.Text`
  color: #FFF;
  font-size: 18;
  font-family: openSansBoldItalic;
`;
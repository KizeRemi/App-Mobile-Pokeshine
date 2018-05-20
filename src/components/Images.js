import styled from "styled-components";

export const ImageProfile = styled.Image`
  width: 128;
  height: 128;
  border-radius: 64;
  border-color: #efeef1;
  border-width: 3;
  margin-top: 50;
`;

export const ImageUserRank = styled.Image`
  width: 64;
  height: 64;
  border-radius: 32;
  border-color: #efeef1;
  border-width: 3;
  margin-top: 7;
`;

export const ImageUserLowRank = styled.Image`
  width: 48;
  height: 48;
  border-radius: 24;
  border-color: #efeef1;
  border-width: 3;
  margin-top: 7;
`;

export const ImageReward = styled.Image`
  width: 40;
  height:  40;
  border-radius: 20;
  margin-horizontal: 5;
  margin-vertical: 5;
`;

export const BackgroundPokeball = styled.Image`
  width: 250;
  height:  250;
  flex: 1;
  position: absolute;
  top: -75;
  right: -25;
`;

export const BackgroundType = styled.Image`
  position: absolute;
  top:0;
  left: 0;
  opacity: 0.2;
  z-index: 2;
  margin-left: 15;
  margin-top: 10;
`;

export const ShinyImage = styled.Image`
  z-index: 1;
  width: 300;
  height: 200;
  border-radius: 5;
  border-width: 3;
  border-color: #fff;
`;

export const ImageShinyList = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
`;
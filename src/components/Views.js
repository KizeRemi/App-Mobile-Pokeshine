import styled from "styled-components";

export const Background = styled.ScrollView`
  flex: 1;
  background-color: #efeef1;
`;

export const BackgroundWhite = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex: 1;
  margin-top: 35;
  justify-content: center;
  align-items: center;
  height: 50;
  background-color: #b3dbfd;
`;

export const NumbersContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  height: 60;
  margin-bottom: 15;
`;

export const NumbersBloc = styled.View`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#545DA3'};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RewardsContent = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-vertical: 5;
`;

export const CategoryHeader = styled.View`
  width: 100%;
`;

export const ProfileBlocContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #FFF;
  margin-horizontal: 15;
  margin-vertical: 10;
  padding-right: 10;
  padding-vertical: 10;
  border-right-width: 2;
  border-left-width: 2;
  border-color: #efeef1;
`;

export const ProfileProgressContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #FFF;
  margin-horizontal: 15;
  margin-vertical: 10;
  padding-right: 10;
  padding-vertical: 10;
`;

export const ProfileProgressContent = styled.View`
  flex: 1;
  margin-horizontal: 10;
  margin-vertical: 10;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const ProfileBlocContent = styled.View`
  flex: 1;
  margin-horizontal: 15;
  margin-vertical: 5;
`;

export const ProfileIconView = styled.View`
  width: 20%;
  align-items: center;
  justify-content: center;
  border-right-width: 2;
  border-right-color: #efeef1;
`;


export const ProfileFriendCodeView = styled.View`
  flex: 1;
  background-color: #FFF;
  border-radius: 5;
  align-items: center;
  justify-content: center;
  margin-horizontal: 15;
  margin-vertical: 10;
  padding-vertical: 15;
`;

export const ProfileTitleSettings = styled.View`
  width: 100%;
  align-items: center;
  margin-vertical: 50;
  padding-horizontal: 30;
`;

export const InputContainer = styled.View`
  margin-horizontal: 30;
  margin-bottom: 15;
`;


export const SocialContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 15;
  margin-top: 20;
`;

export const MeasurementContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 20;
  height: 66;
`;

export const MeasurementBloc = styled.View`
  flex: 1;
  align-items: center;
  border-color: #b3dbfd;
  ${props => props.left ? 'border-left-width: 2;' : 'border-right-width: 2;'}
`;

export const DescriptionBloc = styled.View`
  flex: 1;
  margin-top: 30;
  justify-content: flex-start;
`;

export const CollectorContent = styled.View`
  flex: 1;
  margin-horizontal: 10;
  margin-vertical: 10;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;


export const ProgressGenerationContainer = styled.View`
  height: 100;
  background-color: #FFF;
  margin-horizontal: 15;
  margin-vertical: 20;
  padding-horizontal: 10;
  padding-vertical: 10;
  border-radius: 5;
`;
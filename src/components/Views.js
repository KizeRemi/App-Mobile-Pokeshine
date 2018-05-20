import styled from "styled-components";

const blue = '#82daf2';

export const BackgroundAuth = styled.ScrollView`
  background-color: ${blue};
  flex: 1;
`;

export const Background = styled.ScrollView`
  flex: 1;
  background-color: #efeef1;
`;

export const BackgroundWhite = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const LoginContainer = styled.View`
  width: 100%;
  padding-horizontal: 60;
  margin-top: 30;
  margin-bottom: 50;
`;

export const LoginTitleContainer = styled.View`
  align-items: center;
  margin-bottom: 30;
`;

export const ErrorContainer = styled.View`
  align-items: center;
`;

export const Line = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #FFF;
  margin-vertical: 15;
`

export const Header = styled.View`
  flex: 1;
  margin-top: 35;
  justify-content: center;
  align-items: center;
  height: 50;
  background-color: ${blue};
`;

export const HeaderHome = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 40;
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

export const ProfileDescriptionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-horizontal: 15;
  margin-vertical: 10;
  padding-right: 10;
  padding-vertical: 10;
`;

export const ProfileUserInformations = styled.View`
  flex: 1;
  align-items: flex-end;
  margin-horizontal: 30;
`;

export const ProfileProgressContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #FFF;
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
  margin-horizontal: 5;
  margin-vertical: 5;
`;

export const ProfileIconView = styled.View`
  width: 20%;
  align-items: center;
  justify-content: center;
`;

export const ProfileTitleSettings = styled.View`
  width: 100%;
  align-items: center;
  margin-vertical: 20;
  padding-horizontal: 15;
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
  backgroundColor: #FFF;
  margin-horizontal: 15;
  border-radius: 5;
  top: -20;
`;

export const MeasurementBloc = styled.View`
  flex: 1;
  align-items: center;
  margin-vertical: 30;
`;
export const TryBloc = styled.View`
  flex: 1;
  align-items: center;
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

export const TopUsersContainer = styled.View`
  padding-horizontal: 30;
  padding-vertical: 30;
`;

export const PodiumContainer = styled.View`
  flex: 1;
  height: 170;
  flex-direction: row;
  align-items: flex-end;
`;

export const PodiumView = styled.View`
  background-color: #b3dbfd;
  height: ${props => props.height && props.height};
`;

export const CenteredBloc = styled.View`
  align-items: center;
  justify-content: center;
`;

export const UserRankContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UsernameRankContainer = styled.View`
  margin-horizontal: 15;
  flex: 1;
  justify-content: flex-start;
`;

export const NumberRankContainer = styled.View`
  padding-horizontal: 10;
  border-left-width: 2;
  border-color: #efeef1;
`;

export const PokemonShinyContainer = styled.View`
  padding-horizontal: 10;
  padding-vertical: 10;
  flex: 1;
  border-radius: 5;
  background-color: #30c7fe;
  margin-vertical: 15;
  flex-direction: row;
`;

export const HuntPanel = styled.View`
  padding-horizontal: 10;
  padding-vertical: 10;
  border-radius: 5;
  background-color: #30c7fe;
  flex-direction: row;
`;

export const TriesContainer = styled.View`
  padding-horizontal: 10;
  padding-vertical: 10;
  margin-horizontal: 25;
  border-radius: 5;
  top: -5;
  border-width: 1;
  border-color: #30c7fe;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonCenter = styled.View`
  width: 100%;
  align-items: center;
`;

export const ShinyTriesContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  margin-top: 50;
  margin-right: 10;
`;

export const ShinyTriesContent = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 25;
  background-color: #fff;
  height: 50;
  width: 200;
`;

export const CatchDateContainer = styled.View`
  flex: 1;
  width: 250;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  margin-top: 80;
  height: 25;
  bottom: -10;
  border-radius: 12.5;
  z-index: 2;
`;

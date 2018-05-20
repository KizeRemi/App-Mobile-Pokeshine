import Colors from '../../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: '#FFF', borderBottomColor: 'transparent' },
    titleStyle: {
      color: '#26c1fb',
      alignSelf: 'center',
      fontFamily: 'openSansBold',
      fontSize: Colors.fontSizeBase,
    },
    backButtonTintColor: '#26c1fb',
  },

  navbarCollectorProps: {
    navigationBarStyle: { backgroundColor: '#FFF', borderBottomColor: 'transparent', height: 80 },
    titleStyle: {
      color: '#26c1fb',
      alignSelf: 'center',
      fontFamily: 'openSansBoldItalic',
      fontSize: 26,
    },
    backButtonTintColor: '#26c1fb',
  },

  navbarShinyProps: {
    navigationBarStyle: { backgroundColor: '#26c1fb', borderBottomColor: 'transparent', height: 80 },
    titleStyle: {
      color: '#FFF',
      alignSelf: 'center',
      fontFamily: 'openSansBold',
      fontSize: 26,
    },
    backButtonTintColor: '#FFF',
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: 'rgba(255,255,255,0.2)',
    inactiveBackgroundColor: '#26c1fb',
    tabBarStyle: { backgroundColor: '#26c1fb' },
  },

  icons: {
    style: { color: 'white', height: 30, width: 30 },
  },
};

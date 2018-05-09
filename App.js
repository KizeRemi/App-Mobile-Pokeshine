import React from 'react';
import Root from './src/native/index';
import { AppLoading, Font } from 'expo';
import configureStore from './src/store/index';
import OpenSansBoldItalic from './src/fonts/OpenSans-ExtraBoldItalic.ttf';
import OswaldBold from './src/fonts/Oswald-Bold.ttf';
import OpenSansRegular from './src/fonts/OpenSans-Regular.ttf';
import FontAwesomeRegular from './src/fonts/fa-regular-400.ttf';
import FontAwesomeSolid from './src/fonts/fa-solid-900.ttf';
import FontAwesomeBrands from './src/fonts/fa-brands-400.ttf';

const { persistor, store } = configureStore();

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { isLoadingComplete: false };
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'openSansBoldItalic': OpenSansBoldItalic,
        'oswaldBold': OswaldBold,
        'openSansRegular': OpenSansRegular,
        'faRegular': FontAwesomeRegular,
        'faSolid': FontAwesomeSolid,
        'faBrands': FontAwesomeBrands,
      }),
    ]);
  };

  _handleLoadingError = (error) => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Root store={store} persistor={persistor} />
      );
    }
  }
}
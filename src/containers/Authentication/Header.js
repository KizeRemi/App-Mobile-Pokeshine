import React, { PureComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  layoutCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Header extends PureComponent {
  render() {
    return (
      <View style={{ marginVertical: 30 }}>
        <View style={styles.layoutCenter}>
        </View>
      </View>
    )
  }
}

export default Header;
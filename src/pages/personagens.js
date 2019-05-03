import React, { Component } from "react";

import { Text, Image, StyleSheet } from "react-native";

class Personagens extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../assets/imgs/avengers2.png')}
            style={styles.tabNavigatorIconPersonagens}
        />
    )
}
  
  render() {
    return <Text>Personagens</Text>;
  }
}

const styles = StyleSheet.create({
  tabNavigatorIconPersonagens: { width: 30, height: 30, tintColor: '#FFFFFF' }
})

export default Personagens;
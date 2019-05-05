import React, {Component} from 'react';

import {Text, Image, StyleSheet, View, Linking} from "react-native";

class Profile extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/imgs/profile.png')}
                style={styles.tabNavigatorIconHome}
            />
        )
    }
    
    render() {
        return (
            <View style={styles.Profile}>
              {/* Cabecalho - header */}
              <View style={styles.ProfileHeader}>
                <View style={styles.ProfileHeaderRow}>
                    <Image
                    source={require("../assets/imgs/profile.png")}
                    style={styles.ProfileHeaderImg}
                    />
                    <Text style={styles.ProfileHeaderText}>{"Profile".toUpperCase()}</Text>
                </View>
                <View style={styles.ProfileHeaderLine} />
              </View>

              {/* conteudo - body */}
              <View style={styles.ProfileBody}>
                <View style={styles.ProfileBodyConteudo}>
                  <Image
                    source={require("../assets/imgs/saulo.png")}
                  />
                  <Text style={styles.ProfileBodyTitulo}>Saulo Santos</Text>
                  <Text style={styles.ProfileBodyDados}>Desenvolvedor</Text>
                  <Text style={styles.ProfileBodyDados}>SENAI de Informática</Text>
                  <View style={styles.ProfileBodySocialMedia}>
                    <View style={styles.ProfileBodyImgItem}>
                      <Image
                        source={require("../assets/imgs/github.png")}
                        style={styles.ProfileBodyImg}/>
                      <Text style={styles.ProfileBodyImgText}
                        onPress={() => Linking.openURL('https://github.com/saulomsantos')}>
                        Visitar</Text>
                    </View>
                    <View style={styles.ProfileBodyImgItem}>
                      <Image                        
                        source={require("../assets/imgs/linkedIn.png")}
                        style={styles.ProfileBodyImg}/>
                      <Text style={styles.ProfileBodyImgText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/saulo-santos-330a3571/')}>
                        Visitar</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // ícone do título da página na navbar
    tabNavigatorIconHome: {
      width: 25,
      height: 25,
      tintColor: "#FFFFFF"
    },
    // conteúdo do container Profile
    Profile: {
      flex: 1,
      backgroundColor: "#F1F1F1"
    },
    // cabeçalho
    ProfileHeader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    // linha do cabeçalho
    ProfileHeaderRow: {
      flexDirection: "row"
    },
    // imagem do cabeçalho
    ProfileHeaderImg: {
      width: 22,
      height: 22,
      tintColor: "#cccccc",
      marginRight: -9,
      marginTop: -9
    },
    // texto do cabeçalho
    ProfileHeaderText: {
      fontSize: 18,
      letterSpacing: 5,
      color: "#999999",
      fontFamily: "OpenSans-Regular"
    },
    // linha de separacao do cabecalho
    ProfileHeaderLine: {
      width: 170,
      paddingTop: 10,
      borderBottomColor: "#999999",
      borderBottomWidth: 0.9
    },
    // corpo do profile
    ProfileBody: {
      // backgroundColor: "#999999",
      flex: 4
    },
    // conteúdo do corpo
    ProfileBodyConteudo: {
      paddingTop: 20,
      paddingRight: 50,
      paddingLeft: 50,
      alignItems: 'center'
    },
    // título do perfil
    ProfileBodyTitulo: {
      borderBottomWidth: 0.9,
      borderBottomColor: "gray",
      color: "black",
      fontSize: 18,
      fontWeight: "900",
      marginTop: 15
    },
    // separação dos dados do perfil
    ProfileBodyDados: {
      marginTop: 7
    },
    // container das mídias sociais
    ProfileBodySocialMedia: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: 250
    },
    // imagens das mídias sociais
    ProfileBodyImg: {
      width: 70,
      height: 70,
      tintColor: '#cccccc'
    },
    // alinhamento do conteúdo das mídias sociais
    ProfileBodyImgItem: {
      justifyContent: 'center',
    },
    // alinhamento do texto visitar
    ProfileBodyImgText: {
      textDecorationLine: 'underline',
      marginTop: 3,
      alignSelf: 'center'
    }
});

export default Profile;
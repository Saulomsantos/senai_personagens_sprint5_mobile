import React, {Component} from 'react';

import {Text, Image, StyleSheet, View, FlatList} from "react-native";

import api from '../services/api';

class Personagens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaPersonagens : []
        }
    }

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/imgs/avengers2.png')}
                style={styles.tabNavigatorIconHome}
            />
        )
    }

    componentDidMount() {
        // Realiza a chamada para a api
        this.carregarEventos();
    }

    carregarEventos = async () => {
        const resposta = await api.get("/personagens");
        const dadosDaApi = resposta.data;
        this.setState({ listaPersonagens : dadosDaApi });
    }
    
    render() {
        return (
            <View style={styles.Personagens}>
                {/* Cabecalho - header */}
                <View style={styles.PersonagensHeader}>
                  <View style={styles.PersonagensHeaderRow}>
                      <Image
                      source={require("../assets/imgs/avengers2.png")}
                      style={styles.PersonagensHeaderImg}
                      />
                      <Text style={styles.PersonagensHeaderText}>{"Personagens".toUpperCase()}</Text>
                  </View>
                  <View style={styles.PersonagensHeaderLine} />
                </View>

                {/* conteudo - body */}
                <View style={styles.PersonagensBody}>
                <FlatList
                    contentContainerStyle={styles.PersonagensBodyConteudo}
                    data={this.state.listaPersonagens}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderizaItem}
                />
                </View>
            </View>
        );
    }

    renderizaItem = ({ item }) => (
        <View>
          <View style={styles.flatItemContainer}>
            <Text style={styles.flatItemTitulo}>{item.id} - {item.nome}</Text>
            <Text style={styles.flatItemLancamento}>{item.lancamento}</Text>
            <Image
              source={{uri: item.urlImagem}}
              style={styles.flatItemImg}
            />            
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    tabNavigatorIconHome: {
      width: 25,
      height: 25,
      tintColor: "#FFFFFF"
    },
    // conteúdo do container Personagens
    Personagens: {
      flex: 1,
      backgroundColor: "#F1F1F1"
    },
    // cabecalho
    PersonagensHeaderRow: {
      flexDirection: "row"
    },
    PersonagensHeader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    // imagem do cabeçalho
    PersonagensHeaderImg: {
      width: 22,
      height: 22,
      tintColor: "#cccccc",
      marginRight: -9,
      marginTop: -9
    },
    // texto do cabecalho
    PersonagensHeaderText: {
      fontSize: 18,
      letterSpacing: 5,
      color: "#999999",
      fontFamily: "OpenSans-Regular"
    },
    // linha de separacao do cabecalho
    PersonagensHeaderLine: {
      width: 170,
      paddingTop: 10,
      borderBottomColor: "#999999",
      borderBottomWidth: 0.9
    },
    // corpo do texto
    PersonagensBody: {
      // backgroundColor: "#999999",
      flex: 4
    },
    // conteúdo da lista
    PersonagensBodyConteudo: {
      paddingTop: 20,
      paddingRight: 50,
      paddingLeft: 50
    },
    // dados do personagem de cada item da linha
    flatItemTitulo: {
      flexDirection: "row",
      borderBottomWidth: 0.9,
      borderBottomColor: "gray",
      color: "black",
      fontSize: 16,
      fontWeight: "900",
    },
    flatItemContainer: {
      marginTop: 15
    },
    flatItemLancamento: {
      fontSize: 14,
      color: "#333",
      fontFamily: "OpenSans-Light",
      marginTop: 7
    },
    flatItemImg: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      width: 200,
      height: 200,
      margin: 20
    },
});

export default Personagens;
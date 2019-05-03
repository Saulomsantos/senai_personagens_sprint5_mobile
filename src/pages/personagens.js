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
        tabBarIcon: ({ tintColor }) => (
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

                {/* conteudo - body - section */}
                <View style={styles.PersonagensBody}>
                <FlatList
                    contentContainerStyle={styles.PersonagensBodyConteudo}
                    data={this.state.listaPersonagens}
                    keyExtractor={item => item.id}
                    renderItem={this.renderizaItem}
                />
                </View>
            </View>
        );
    }

    renderizaItem = ({ item }) => (
        // <Text style={{ fontSize: 20, color: 'red' }}>{item.titulo}</Text>
        <View>
          <View style={styles.flatItemContainer}>
            <Text>{item.id}</Text>
            <Text>{item.nome}</Text>
            <Text>{item.lancamento}</Text>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    tabNavigatorIconHome: {
      width: 25,
      height: 25,
      // tintColor: "purple"
      tintColor: "#FFFFFF"
    },
    // conteúdo da Personagens
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
      fontSize: 16,
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
      paddingTop: 30,
      paddingRight: 50,
      paddingLeft: 50
    },
    // dados do evento de cada item da linha
    flatItemLinha: {
      flexDirection: "row",
      borderBottomWidth: 0.9,
      borderBottomColor: "gray"
    },
    flatItemContainer: {
      flex: 7,
      marginTop: 1
    },
    flatItemTitulo: {
      fontSize: 14,
      color: "#333",
      fontFamily: "OpenSans-Light"
    },
    flatItemData: {
      fontSize: 10,
      color: "#999",
      lineHeight: 24
    },
    flatItemImg: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center"
    },
    flatItemImgIcon: {
      width: 22,
      height: 22,
      tintColor: "#B727FF"
    }
});

export default Personagens;
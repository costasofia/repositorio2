import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Platform, View, Button, TouchableWithoutFeedback, Image, Text, TextInput, TouchableOpacity, Alert, YellowBox, FlatList, ActivityIndicator } from 'react-native';
import axios from "axios";

let images = 'http://192.168.1.67:5000/'

function ListagemP({ route, navigation }) {
    const parametro = route.params.parametro;
    const [ponto, setPonto] = useState([]);
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(true);
    let imagens = 'http://192.168.1.67:5000/'
    function getPontos() {
        return axios.get('http://192.168.1.67:5000/ponto/pontos/' + parametro)
            .then(function (response) {
                setPonto(response.data),
                    setLoading(false)
                ponto.map(ponto => {
                    console.log(ponto);
                })
            }.bind(this))
            .catch((error) => {
                console.log(error);
            }, []);
    }

    useEffect(() => {
        getPontos();


    }, []);

    return (
        <View style={styles.MainContainer}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={ponto}
                    keyExtractor={({ IdPonto }, index) => IdPonto}
                    renderItem={({ item }) => (

                        <View style={styles.line}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                //backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
                                backgroundColor: 'lightblue'
                            }}>
                                <Image style={{ width: 90, height: 90, margin: 7 }} source={{ uri: imagens + item.Imagem}} ></Image> 

                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Text style={styles.textcity}>{item.Tema}</Text>
                                    <Text style={styles.textcity}>{item.Descricao}</Text>
                                    <Text style={styles.textcity}>{item.Longitude}</Text>
                                    <Text style={styles.textcity}>{item.Latitude}</Text>
                                </View>
                            </View>
                        </View>

                    )}
                />
            )}
        </View>

    );

}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        margin: 10
    },
    texttitle:
    {
        fontWeight: "bold",
        fontSize: 22,
    },
    textcity:
    {
        fontSize: 16,
        color: "black",
    },
    texttelefone:
    {
        fontSize: 16,
    },
    line: {

        margin: 5,
        flex: 2,
        padding: 10,
        flexDirection: 'row',
    }
});
export default ListagemP;
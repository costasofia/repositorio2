import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Platform, View, Button, Image, Text, TextInput, TouchableOpacity, Alert, YellowBox, ListView } from 'react-native';
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LocalizationContext } from './../services/localization/LocalizationContext';
function AtualizarP({ route, navigation }) {
    const parametro = route.params.parametro;
    const { IdPonto, Tema, Descricao } = route.params;
    const [ponto, setPonto] = useState([]);
    const [Tema1, setTema1] = useState(Tema);
    const [Descricao1, setDescricao1] = useState(Descricao);
  
  function updatePontos(){
      return axios.put('http://192.168.1.67:5000/ponto/updatepontos/' + IdPonto ,{
          Tema: Tema1,
          Descricao: Descricao1
      }).then(function(response){
          setPonto(response.data), 
          ponto.map(ponto => {
              console.log(ponto)
          })
      }.bind(this))
      .catch((error) => {
        console.log(error);
      }, []);
  }
  useEffect(() => {

    updatePontos();

  }, []);

  function updatePonto() {
    if (Tema1.trim() === '' || Descricao1.trim() === '') {
      Alert.alert('Preencha todos os campos');
    } else {
      updatePontos();
    }
  }
  return (
    <View style={styles.MainContainer}>
        <TextInput
            placeholder={translations.InserirA}
            style={styles.TextStyle}
            underlineColorAndroid="transparent"
            onChangeText={text => setAssunto1(text)}
        >{assunto1}</TextInput>
        <TextInput
            placeholder={translations.InserirD}
            style={styles.TextStyle}
            underlineColorAndroid="transparent"
            onChangeText={text => setDescricao1(text)}
        >{descricao1}</TextInput>
        <TouchableOpacity onPress={updatePonto(navigation.navigate('Mapa', {parametro: parametro}))} style={styles.button} >
            <Text>{translations.AtualizarN}</Text>
        </TouchableOpacity>
    </View>
);
  
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: "#ededde",
    },
    TextStyle:
    {
        borderWidth: 1,
        marginTop: 20,
        margin: 10,
        borderColor: '#ffbf00',
        backgroundColor: "#fff",
        height: 40,
        borderRadius: 2,
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#ffbf00",
        padding: 10,
        borderRadius: 4,
        margin: 10,
        height: 40
    },
});

export default AtualizarP;


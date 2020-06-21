import React, { useContext, useEffect, useState, useFocusEffect } from 'react';
import { StyleSheet, Platform, View, Button, Image, Text, TextInput, TouchableOpacity, Alert, YellowBox, ListView } from 'react-native';
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LocalizationContext } from './../services/localization/LocalizationContext';
function DetalhesP({ route, navigation }) {
  const parametro = route.params.parametro;
  const { IdPonto,IdUtilizador, Tema, Descricao, Latitude, Longitude } = route.params;
  const [ponto, setPonto] = useState([]);
  const { translations } = useContext(LocalizationContext);
  const [isLoading, setLoading] = useState(true);

  function deletePontos() {
    return axios.delete('http://192.168.1.67:5000/ponto/apagarPonto/' + IdPonto)
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

    deletePontos();

  }, []);
 

  function updateData() {
    navigation.navigate('AtualizarP', {
      IdPonto: IdPonto,
      Tema: Tema,
      Descricao: Descricao,

    });
  }

  function deleteData() {
    Alert.alert(
      translations.Info,
      translations.MsgRemover,
      [
        {
          text: translations.Nao,
          onPress: () => console.log('Pedido cancelado'), style: 'cancel'
        },
        {
          text: translations.Sim,
          onPress: () => { deletePontos(navigation.navigate('Mapa', {parametro: parametro})); }
        },
      ]
    );
  }
  return (
    <View style={styles.MainContainer}>
      <View style={styles.MainContainer}>
        <Text style={styles.TextInputStyle}>{Tema}</Text>
        <Text style={styles.TextInputStyle}>{Descricao}</Text>
        <Text style={styles.TextInputStyle}>{Latitude}</Text>
        <Text style={styles.TextInputStyle}>{Longitude}</Text>
      </View>

      <TouchableOpacity onPress={updateData} style={styles.button1} >
        <Text>{translations.AtualizarN}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteData} style={styles.button2} >
        <Text>{translations.EliminarN}</Text>
      </TouchableOpacity>


    </View>
  );
}
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#ededde",
    flex: 1,
  },

  TextInputStyle:
  {
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    margin: 5,
    borderColor: 'black',
    height: 40,
    borderRadius: 2,
    marginBottom: 2,
    textAlign: 'center',
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#ffbf00",
    padding: 10,
    borderRadius: 4,
    margin: 10,
    height: 40
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#ffbf00",
    padding: 10,
    borderRadius: 4,
    margin: 10,
    height: 40
  },
});

export default DetalhesP; 
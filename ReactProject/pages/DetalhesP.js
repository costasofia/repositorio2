import React, { useContext } from 'react';
import { StyleSheet, Platform, View, Button, Image, Text, TextInput, TouchableOpacity, Alert, YellowBox, ListView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LocalizationContext} from './../services/localization/LocalizationContext';
function DetalhesP ({route, navigation}){
   
   const {IdPonto, Tema, Descricao, Latitude, Longitude}= route.params;
    
    const { translations } = useContext(LocalizationContext);
  
    function updateData(){

        navigation.navigate('Atualizar', {
             IdPonto: IdPonto,
             Tema: Tema,
            
           });
      }
      return (
        <View style={styles.MainContainer}>
          <View style={styles.MainContainer}>
              <Text style = { styles.TextInputStyle }>{Tema}</Text>
              <Text style = { styles.TextInputStyle }>{Descricao}</Text>
              <Text style = { styles.TextInputStyle }>{Latitude}</Text>
              <Text style = { styles.TextInputStyle }>{Longitude}</Text>
          </View>
         
              <TouchableOpacity onPress={updateData} style={styles.button1} >
                 <Text>{translations.AtualizarN}</Text>
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
      margin: 10,
      borderColor: '#ffbf00',
      height: 40,
      borderRadius: 2,
      marginBottom: 10,
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
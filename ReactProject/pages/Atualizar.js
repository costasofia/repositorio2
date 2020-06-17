import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Platform, View, Button, Image, Text, TextInput, TouchableOpacity, Alert, YellowBox, ListView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';

import Realm from 'realm';
let realm ;

function Atualizar({ route, navigation }) {
    const { id, assunto, descricao } = route.params;
  
    const [assunto1, setAssunto1] = useState(assunto);
    const [descricao1, setDescricao1] = useState(descricao);
    
    function atualizar(){
        if (assunto1 && descricao1 ) {
          realm = new Realm({ path: 'notas.realm' });
    
          realm.write(() => {
            var obj = realm
              .objects('nota')
              .filtered('id =' + id);
            if (obj.length > 0) {
              obj[0].assunto = assunto1
              obj[0].descricao = descricao1
              Alert.alert(
                'Info',
                'O registo foi atualizado com sucesso',
                [
                  {
                    text: 'Ok',
                    onPress: () =>
                      navigation.dispatch(StackActions.popToTop())
                  },
                ],
                { cancelable: false }
              );
            } else {
              alert('Atualização falhou');
            }
          });
        }
      }

      return (
        <View style={styles.MainContainer}>
          <TextInput
                placeholder="Inserir Assunto"
                style = { styles.TextStyle }
                underlineColorAndroid = "transparent"
                onChangeText= {text => setAssunto1(text)}
          >{assunto1}</TextInput>
          <TextInput
                placeholder="Inserir Descrição"
                style = { styles.TextStyle }
                underlineColorAndroid = "transparent"
                onChangeText = { text => setDescricao1(text)}
          >{descricao1}</TextInput>
          <TouchableOpacity onPress={atualizar} style={styles.button} >
             <Text> Atualizar Nota </Text>
           </TouchableOpacity>
        </View>
      );
    
    }
    const styles = StyleSheet.create({
      MainContainer: {
        flex: 1,
      },
      TextStyle:
      {
        borderWidth: 1,
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
        borderRadius: 2,
        margin: 10,
      },
    });
    export default Atualizar;

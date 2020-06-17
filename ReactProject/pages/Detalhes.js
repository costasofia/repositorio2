import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Platform, View, Button, Image, Text, TextInput, TouchableOpacity, Alert, YellowBox, ListView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Realm from 'realm';
let realm ;

function Detalhes({ route, navigation }) {
    const { id, assunto, descricao} = route.params;
  
    function updateData(){
      navigation.navigate('Atualizar', {
           id: id,
           assunto: assunto,
           descricao: descricao,
          
         });
    }
   /* function deleteData(){
        Alert.alert(
          'Informação',
          'Remover Nota?',
        [
          {text: 'Não', onPress: () => console.log('Pedido cancelado'), style: 'cancel'},
          {text: 'Sim', onPress: () => {deleteUser();}},
        ]
        );
      }*/

      function deleteData(){
        navigation.navigate('Eliminar', {
          id: id,
          assunto: assunto,
          descricao: descricao,

        });
      }
    
  /*    function deleteUser(){
        realm = new Realm({ path: 'notas.realm' });
        realm.write(() => {
          let task = realm.objects('nota').filtered('id = ' + id);
          realm.delete(task);
        });
        navigation.goBack();
      }*/

      return (
        <View style={styles.MainContainer}>
          <View style={styles.MainContainer}>
              <Text style = { styles.TextInputStyle }>Assunto: {assunto}</Text>
              <Text style = { styles.TextInputStyle }>Descrição: {descricao}</Text>
          </View>
         
              <TouchableOpacity onPress={updateData} style={styles.button1} >
                 <Text> Atualizar Nota</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={deleteData} style={styles.button2} >
                  <Text> Eliminar Nota</Text>
              </TouchableOpacity>
          
        </View>
      );
    }

    const styles = StyleSheet.create({
        MainContainer: {
          flex: 1,
        },
  
        TextInputStyle:
        {
          borderWidth: 1,
          marginTop: 20,
          padding: 10,
          margin: 10,
          borderColor: '#2196F3',
          height: 40,
          borderRadius: 2,
          marginBottom: 10,
          textAlign: 'center',
        },
        button1: {
          alignItems: "center",
          backgroundColor: "#2196F3",
          padding: 5,
          borderRadius: 4,
          margin: 10,
          height: 40
        },
        button2: {
          alignItems: "center",
          backgroundColor: "#2196F3",
          padding: 5,
          borderRadius: 4,
          margin: 10,
          height: 40
        },
      });
     
     
      export default Detalhes; 
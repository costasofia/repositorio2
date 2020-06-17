import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Listagem from './Listagem';
import Inserir from './Inserir';
import Atualizar from './Atualizar';
import Detalhes from './Detalhes';
import Eliminar from './Eliminar';

const Stack = createStackNavigator();

function Lista({ navigation }) {

  return (
    <Stack.Navigator initialRouteName="Listagem">
      <Stack.Screen name="Listagem" component={Listagem}
        options={({ navigation }) => ({
          title: 'Lista de Notas',
        //  headerLeft: null,
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity
            //  style={styles.button}
              onPress={() => navigation.navigate('Inserir')}>
              <Image style ={{width: 25, height:25,  marginRight: 10}} source={require('../imagens/edit.png')}/>   
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
            //  style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Image style ={{width: 25, height:20,  marginLeft:10}} source={require('../imagens/saida.png')}/>   
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Detalhes" component={Detalhes}
        options={({ navigation }) => ({
          title: 'Detalhes da Nota',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        })}
      />
      <Stack.Screen name="Inserir" component={Inserir}
        options={({ navigation }) => ({
          title: 'Inserir Nova Nota ',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen name="Atualizar" component={Atualizar}
        options={({ navigation }) => ({
          title: 'Atualizar Nota',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        })}
      />
       <Stack.Screen name="Eliminar" component={Eliminar}
        options={({ navigation }) => ({
          title: 'Eliminar Nota',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        })}
      />

    </Stack.Navigator>

  );
}

/*const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    marginRight: 10,
  },
});*/
export default Lista;
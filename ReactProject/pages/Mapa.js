import React from 'react';
import {View, Text, Button } from 'react-native';
import { StackAActions, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function Mapa({route, navigation}){

   const parametro = route.params.parametro;
 
   return (
	<View>
        <Text>
	    {parametro}
        </Text>
	</View>
   );
}
export default Mapa;
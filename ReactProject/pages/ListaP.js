import React, { Component, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';

function ListaP({route, navigation}){
    const parametro = route.params.parametro;
 


    return(
       <View>
            <Text>
            {parametro}
            </Text>
        
        </View>
        
    );
    
}
export default ListaP;
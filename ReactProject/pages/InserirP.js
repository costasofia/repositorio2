import React, { Component, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';

function InserirP({route, navigation}){
    const parametro = route.params.parametro;
   // const parametro2 = route.params.parametro2;
    const {longitude} = route.params.parametro2;
    const {latitude} = route.params.parametro2;


    
    return(
       <View>
            <Text>
            {parametro}
            </Text>
            <Text>
            {longitude}
            </Text>
            <Text>
            {latitude}
       
            </Text>
        </View>
        
    );
    
}
export default InserirP;
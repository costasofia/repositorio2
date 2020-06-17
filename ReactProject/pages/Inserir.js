import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Platform, View, Button, Image, Text, TextInput, TouchableOpacity, Alert, YellowBox, ListView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Realm from 'realm';
let realm;

function Inserir({ navigation }) {
    const [assunto, setAssunto] = useState('');
    const [descricao, setDescricao] = useState('');

    function insert() {
        if (assunto && descricao) {
            realm = new Realm({ path: 'notas.realm' });

            const lastRecord = realm.objects("nota").sorted('id', true)[0];
            const highestId = lastRecord == null ? 0 : lastRecord.id;
            const newid = highestId == null ? 1 : highestId + 1;

            realm.write(() => {
                realm.create('nota', {
                    id: newid,
                    assunto: assunto,
                    descricao: descricao,
                });
            });
           navigation.navigate('Listagem'); 
        }
    }

    return (

        <View style={styles.MainContainer}>
            <TextInput
                placeholder="Inserir Assunto"
                style={styles.TextStyle}
                underlineColorAndroid="transparent"
                onChangeText={text => setAssunto(text)}
            />
            <TextInput
                placeholder="Inserir Descricao"
                style={styles.TextStyle}
                underlineColorAndroid="transparent"
                onChangeText={text => setDescricao(text)}
            />
            <TouchableOpacity onPress={insert} style={styles.button}>
                <Text> Inserir Nova Nota</Text>
            </TouchableOpacity>
        </View>
    
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex:1, 
    }, 
    TextStyle:{
        borderWidth: 1, 
        margin: 10, 
        borderColor: "#2196F3",
        backgroundColor: "#fff",
        height: 40,
        borderRadius: 2,
        marginBottom: 10, 
        textAlign: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 2,
        margin: 10,
    },
});

export default Inserir; 


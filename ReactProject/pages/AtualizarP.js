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
 
    function updatePonto() {
        if (Tema1.trim() === '' || Descricao1.trim() === '') {
            Alert.alert('Preencha todos os campos');
        } else {
            editarPonto();
            /*
            );*/
        }
    }

    function editarPonto() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                IdPonto: IdPonto,
                Tema: Tema1,
                Descricao: Descricao1,
            }),
        };
        fetch(
            'https://pedroacm.000webhostapp.com/cm/cm/index.php/api/editarP',
            requestOptions,
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.status === true) {
                    Alert.alert('Problema Editado!');
                    navigation.dispatch(
                        StackActions.replace('ListaPontosUser', { id: id_utilizador }),
                    );
                } else {
                    Alert.alert('Erro ao editar! ' + data.msg);
                }
            });
    }

}

export default AtualizarP;


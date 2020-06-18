import React, { useContext, useState } from 'react';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { StyleSheet, View, Text, Image, Button, TextInput, TouchableOpacity, Alert, } from 'react-native';

import { StackAActions, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LocalizationContext } from './../services/localization/LocalizationContext';
const Stack = createStackNavigator();


function Login({ navigation }) {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const { translations } = useContext(LocalizationContext);
    function login() {

        if (Email == '' && Password == '') {
            Alert.alert(
                translations.Login,
                translations.EP,
                [
                    { text:translations.Inserir, style: 'cancel' },
                ]
            )
        } else if (Email == '' && Password != '') {
            Alert.alert(
                translations.Login,
                translations.E,
                [
                    { text:translations.Inserir, style: 'cancel' },
                ]
            )
        } else if (Email != '' && Password == '') {
            Alert.alert(
                translations.Login,
                translations.P,
                [
                    { text:translations.Inserir, style: 'cancel' },
                ]
            )
        } else {
            return axios.post("http://192.168.1.67:5000/utilizador/login", {
                Email: Email,
                Password: Password
            })
                .then(function (response) {
                    var token = response.data;
                    var decoded = jwt_decode(token);
                    if (Email == decoded.Email) {
                        Alert.alert(
                            translations.Login,
                            translations.Loginok,
                            [
                                { text:translations.Continuar, onPress: () => { GoToMapa(); } },
                            ]

                        )
                    } else {
                        Alert.alert(
                            translations.Login,
                            translations.LoginF,
                            [
                                { text:translations.Fechar, style: 'cancel' },
                            ]
                        )
                    }
                }.bind(this))
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    function GoToMapa() {
        navigation.navigate('Lista');
    }

    return (

        <View style={styles.full}>
            <View style={styles.part1}>
                <Image style={{ width: 80, height: 80 }} source={require('../imagens/localizacao.png')} />
            </View>
            <View style={styles.part2}>
                <TextInput
                    style={styles.textinput}
                    placeholder={translations.Email}
                    onChangeText={text => setEmail(text)}>

                </TextInput>

                <TextInput
                    style={styles.textinput}
                    placeholder={translations.Password}
                    onChangeText={text => setPassword(text)}>
                </TextInput>
                <View>
                    <TouchableOpacity onPress={login} style={styles.button2}>
                        <Text style={styles.textStyle}>{translations.BotaoLogin}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.part3}>
                <TouchableOpacity onPress={() => navigation.navigate('Lista')} style={styles.button}>
                <Text style={styles.textStyle}>{translations.BotaoNotas}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    full: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#ededde",
    },
    part1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    part2: {
        flex: 2,
    },
    part3: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 10,
    },
    buttonview: {
        color: 'black',
        flex: 1,
        margin: 10,
    },
    buttonview1: {
        color: 'black',
        flex: 1,
        margin: 10,
    },
    text: {
        color: 'black',
        fontSize: 25,
    },
    textinput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        margin: 10,
    },
    button: {
        height: 40,
        padding: 10,
        backgroundColor: '#ffbf00',
        borderRadius: 2,
        margin: 1
    },
    button2: {
        height: 40,
        padding: 10,
        backgroundColor: '#ffbf00',
        borderRadius: 2,
        margin:9 
    },
    textStyle: {
        margin: 1,
        borderColor: 'black',
        flex: 1,
        color: 'black',
        textAlign: 'center',
    },


});

export default Login; 
import React, { Component } from 'react';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { StyleSheet, View, Text, Image, Button, TextInput, TouchableOpacity, Alert, } from 'react-native';
//import { style, styles } from './../stylesheet/style';
import { StackAActions, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
//function Login({ navigation }) {
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navigation: props.navigation,
            id: '',
            Email: '',
            Password: '',
        }

    } login = (Email, Password) => {
        if (Email == '' && Password == '') {
            Alert.alert(
                'Login',
                'Insira um email e uma password',
                [
                    { text: 'Fechar', style: 'cancel' },
                ]
            )
        } else if (Email == '' && Password != '') {
            Alert.alert(
                'Login',
                'Insira um email',
                [
                    { text: 'Fechar', style: 'cancel' },
                ]
            )
        } else if (Email != '' && Password == '') {
            Alert.alert(
                'Login',
                'Insira uma password',
                [
                    { text: 'Fechar', style: 'cancel' },
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

                    this.state.id = decoded.IdUtilizador;
                    if (Email == decoded.Email) {
                        Alert.alert(
                            'Login',
                            'Login Efetuado',
                            [
                                { text: 'Fechar', onPress: () => this.GoToMapa() },
                            ]

                        )
                    } else {
                        Alert.alert(
                            'Login',
                            'Login falhou',
                            [
                                { text: 'Fechar', style: 'cancel' },
                            ]
                        )
                    }
                }.bind(this))
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    GoToMapa = () => {
        this.state.navigation.replace('DrawerRoute', this.state.id);

    }
    GoToNotas = () => {
        this.props.navigation.navigate('Lista');
    }
    render() {
        return (
            <View style={styles.full}>
                <View style={styles.part1}></View>
                <View style={styles.part2}>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Email"
                        onChangeText={(Email) => this.setState({ Email })}>

                    </TextInput>
                
                    <TextInput
                        style={styles.textinput}
                        placeholder="Password"
                        onChangeText={(Password) => this.setState({ Password })}>
                    </TextInput>
                
                    <View style={styles.buttonview1}>
                       <Button
                       title='Login'
                       onPress={()=> this.login(this.state.Email, this.state.Password)}
                       />
                    </View>
                </View>
                <View style={styles.part3}>
                    <TouchableOpacity onPress={this.GoToNotas} activeOpacity={0.7} style={styles.button} >
                        <Text style={styles.TextStyle}> Notas </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    full: {
        flex: 1,
        flexDirection: 'column',
    },
    part1: {
        flex: 1,
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

});
export default Login; 
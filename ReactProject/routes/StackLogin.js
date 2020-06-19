import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LocalizationContext from './../services/localization/LocalizationContext';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './../pages/Login';
import Lista from './../pages/Lista';
import Listagem from './../pages/Listagem';
import Inserir from './../pages/Inserir';
import Detalhes from './../pages/Detalhes';
import Atualizar from './../pages/Atualizar';
import Eliminar from './../pages/Eliminar';
import Mapa from './../pages/Mapa';
import InserirP from './../pages/InserirP';
const Stack = createStackNavigator();

function StackLogin({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="Lista" component={Lista}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="Listagem" component={Listagem}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="Inserir" component={Inserir}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="Detalhes" component={Detalhes}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="Atualizar" component={Atualizar}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="Eliminar" component={Eliminar}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="Mapa" component={Mapa}
                    options={{ headerShown: false, }} />
                      <Stack.Screen name="InserirP" component={InserirP}
                    options={{ headerShown: false, }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackLogin; 

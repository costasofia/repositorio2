import React from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';
import { StackAActions, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function Mapa({ route, navigation }) {

    const parametro = route.params.parametro;

    return (
        /*<View>
            <Text>
            {parametro}
            </Text>
        </View>*/
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}>
            </MapView>
        </View>

    );
}
const styles = StyleSheet.create({
  container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
  },
  map:{
      ...StyleSheet.absoluteFillObject,
  },
});

export default Mapa;
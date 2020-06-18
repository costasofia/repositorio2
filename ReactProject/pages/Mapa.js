import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert, } from 'react-native';
import { StackAActions, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

function Mapa({ route, navigation }) {

    const parametro = route.params.parametro;

    const [error, setError] = useState();
    const [initialPosition, setInitialPosition] = useState(
      {
        latitude: 41.693447,
        longitude: -8.846955,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    const [markerPosition, setMarkerPosition] = useState(
      {
        latitude: 41.693447,
        longitude: -8.846955,
      });
  
    const handleSuccess = position => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
  
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }
      setInitialPosition(initialRegion);
      setMarkerPosition(initialRegion);
    };
  
    const handleError = error => {
      setError(error.message);
    };
  
    useEffect(() => {
      Geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);
  
   /* //WATCH
    useEffect(() => {
      const watchId = Geolocation.watchPosition(handleSuccess, handleError);
      return () => Geolocation.clearWatch(watchId);
    }, []);*/
    return (
        /*<View>
            <Text>
            {parametro}
            </Text>
        </View>*/
        <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={initialPosition}
          >
          <Marker
            coordinate={markerPosition}
            >
          </Marker>
        </MapView>
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
export default Mapa;
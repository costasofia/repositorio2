import React, { useEffect, useState, componentDidMount } from 'react';
import { View, Map, Text, Button, StyleSheet, Image, Alert, TouchableOpacity, actionButtuon, } from 'react-native';
import { StackAActions, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import axios from "axios";

let images = 'http://192.168.1.67:5000/'

function Mapa({ route, navigation }) {

    const parametro = route.params.parametro;
    const [ponto, setPonto] = useState([]);

    const [error, setError] = useState();

    function getPontos() {
        return axios.get('http://192.168.1.67:5000/ponto/getPontos')
            .then(function (response) {
                setPonto( response.data)
                ponto.map(ponto => {
                    console.log(ponto);
                })
            }.bind(this))
            .catch((error) => {
                console.log(error);
            },[]);
    }

    useEffect(() => {
        getPontos();

    },[]);
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

    //WATCH
    useEffect(() => {
        const watchId = Geolocation.watchPosition(handleSuccess, handleError);
        return () => Geolocation.clearWatch(watchId);
    }, []);
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
                {ponto && ponto.map(marker => 
                    <Marker
                        key={marker.IdPonto}
                        coordinate={{
                            latitude: marker.Latitude,
                            longitude: marker.Longitude
                        }}>
                        <Callout>
                            <View style={styles.callout}>
                                <Image style={styles.image}
                                    source={{ uri: images + marker.Imagem }} />
                                <View style={styles.callout2}>
                                    <Text>
                                        Assunto:{marker.Tema}
                                    </Text>
                                </View>
                            </View>
                        </Callout>

                    </Marker>
                )
                }
                <Marker
                    coordinate={markerPosition}>
                </Marker>


            </MapView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //  ...StyleSheet.absoluteFillObject,
        //  height: '100%',
    },
    map: {
        flex: 1,
    },
    callout: {
        flex: 1,
        flexDirection: 'row',
    },
    callout2: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        height: 100,
        width: 100,
    },
    header: {
        flex: 0.095,

    },
    btnListaDireita: {
        position: 'absolute',
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 20,
    },

    FloatingButtonStyle: {
        //resizeMode: 'contain',
        //width: 40,
        // height: 40,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    userProblems: {
        alignItems: 'flex-end',
        marginRight: 10,
        bottom: "37%"
    },
    text: {
        color: 'black',
        fontSize: 20,
        marginTop: 13,
        marginLeft: 12,
    },
    imageButton: {
        width: 20,
        height: 20,
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },

    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },

    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },

});
export default Mapa;
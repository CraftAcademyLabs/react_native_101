import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { StyleSheet, View } from 'react-native';
import ApplicationHeader from "./components/ApplicationHeader";
import WeatherView from "./components/WeatherView";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const App = () => {
  const dispatch = useDispatch()
  const getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      return location
    } else {
      throw new Error('Permission to access location was denied')
    }
  }
  useEffect(() => {
    getLocation()
      .then(location => {
        dispatch({ type: 'SET_LOCATION', payload: location })
      })
      .catch(error => {
        dispatch({ type: 'SET_ERROR_MESSAGE', payload: error.message });
      })
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ApplicationHeader />
      <WeatherView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App

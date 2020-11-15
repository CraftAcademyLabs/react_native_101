import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { StyleSheet, View } from 'react-native';
import ApplicationHeader from "./components/ApplicationHeader";
import WeatherView from "./components/WeatherView";
import * as Location from 'expo-location';

const App = () => {
  const dispatch = useDispatch()
  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status === 'granted' ) {
      let location = await Location.getCurrentPositionAsync();
      console.table(location)
      console.warn(status)
      dispatch({ type: 'SET_LOCATION', payload: location })
    } else {
      console.error(status)
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Permission to access location was denied' });
    }
  }
  useEffect(() => {
    getLocation()
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

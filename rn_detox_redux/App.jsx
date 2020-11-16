import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { StyleSheet, View } from 'react-native';
import ApplicationHeader from "./components/ApplicationHeader";
import WeatherView from "./components/WeatherView";
import getLocation from "./modules/getLocation";
import getWeatherForLocation from "./modules/getWeatherForLocation";
import getDetailedLocationInfo from './modules/getDetailedLocationInfo'
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getLocation()
      .then(location => {
        dispatch({ type: 'SET_LOCATION', payload: location })
        getWeatherForLocation(location.coords)
          .then(weatherData => {
            dispatch({ type: 'SET_CURRENT_WEATHER', payload: weatherData.current })
          })
        getDetailedLocationInfo(location.coords)
          .then(locationInfo => {
            dispatch({ type: 'SET_CURRENT_LOCATION_DETAILS', payload: locationInfo })
          })
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

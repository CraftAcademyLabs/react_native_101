import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

const WeatherView = () => {
  const {
    currentLocationDetails,
    errorMessage,
    currentWeatherAtLocation
  } = useSelector(state => state)
  let cityDisplay, tempDisplay
  if (currentLocationDetails && currentWeatherAtLocation) {
    cityDisplay = (currentLocationDetails.city || currentLocationDetails.village || `${currentLocationDetails.suburb} (${currentLocationDetails.town})` || currentLocationDetails.village || currentLocationDetails.country)
  }
  return (
    <View style={styles.container}>
      { errorMessage &&
        <Text>{errorMessage}</Text>
      }
      {
        cityDisplay && currentWeatherAtLocation &&
        <>
          <Text style={styles.city} testID='locationInfo'>
            {cityDisplay}
          </Text>
          <Text style={styles.temp} testID='weatherInfo'>
            {currentWeatherAtLocation.temp.toFixed(0)}℃
          </Text>
        </>
      }
    </View>
  )
}

export default WeatherView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  city: {
    fontSize: 30
  },
  temp: {
    fontSize: 70
  }
})

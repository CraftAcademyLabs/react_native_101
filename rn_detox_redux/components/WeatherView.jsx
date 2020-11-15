import React from 'react'
import { useSelector } from 'react-redux'

import { StyleSheet, Text, View } from 'react-native'

const WeatherView = () => {
  const { currentLocation, errorMessage } = useSelector(state => state)
  return (
    <View>
      { errorMessage &&
        <Text>{errorMessage}</Text>
      }
      {
        currentLocation &&
        <Text testID='weatherInfo'>You are at {currentLocation.coords.latitude.toFixed(2)} lat and {currentLocation.coords.longitude.toFixed(2)} long</Text>
      }
    </View>
  )
}

export default WeatherView

const styles = StyleSheet.create({})

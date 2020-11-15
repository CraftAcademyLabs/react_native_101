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
        <Text>You are at {currentLocation.coords.latitude} lat and {currentLocation.coords.longitude}</Text>
      }
    </View>
  )
}

export default WeatherView

const styles = StyleSheet.create({})

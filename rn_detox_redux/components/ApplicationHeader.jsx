import React from 'react'
import { Appbar } from 'react-native-paper';
import { useSelector } from "react-redux";
import { Text } from 'react-native';


const ApplicationHeader = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <Appbar.Header style={{ backgroundColor: '#69388C' }}>
      <Appbar.Content
        title={
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{appTitle.toUpperCase()}</Text>
        }
      />
    </Appbar.Header>
  )
}

export default ApplicationHeader
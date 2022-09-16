import { View, Text } from 'react-native'
import React from 'react'
import HomePage from './screens/HomePage'

export default function App() {
  return (
    <View>
      <Text>App</Text>
      <HomePage pageTitle="Yasindu's Home Page" placeHolder1="Yasindu's password"/>
    </View>
  )
}
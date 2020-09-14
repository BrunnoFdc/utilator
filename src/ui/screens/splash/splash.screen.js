import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

export function SplashScreen() {
  
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>Utilator</Text>
        <ActivityIndicator animating color="#999999" size="large" />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 96,
    fontWeight: '600'
  }
})



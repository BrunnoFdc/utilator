import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Title({ color, fontSize, style, children }) {

  const styles = StyleSheet.create({
    title: {
      color,
      fontSize,
      fontWeight: '600',
      ...style,
    }
  })
  

  return (
    <Text style={styles.title}>{children}</Text>
  )
}

Title.defaultProps = {
  color: "#494949",
  fontSize: 42
}
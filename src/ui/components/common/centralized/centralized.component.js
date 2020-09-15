import React from 'react'
import { StyleSheet, View } from 'react-native'

export function Centralized({ column, style, children }) {
  
  const styles = StyleSheet.create({
    centralized: {
      display: "flex",
      justifyContent: (column) ? "center" : "flex-start",
      alignItems: (column) ? "flex-start" : "center",
      flexDirection: (column) ? "column" : "row",
      ...style
    }
  })

  return (
    <View style={styles.centralized}>
      {children}
    </View>
  )
}

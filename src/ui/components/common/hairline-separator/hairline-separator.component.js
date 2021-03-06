import React from 'react'
import { StyleSheet, View } from 'react-native'

export function HairlineSeparator({ color, width }) {
  
  const styles = StyleSheet.create({
    separator: {
      backgroundColor: color,
      width,
      height: StyleSheet.hairlineWidth
    }
  })

  return (
    <View style={styles.separator} />
  )
}

HairlineSeparator.defaultProps = {
  color: '#000',
  width: '100%'
}

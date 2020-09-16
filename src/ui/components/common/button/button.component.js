import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export function Button(
  { children, color, textColor, rounded, fluid, style, onPress, onPressIn, onPressOut, onLongPress }) {

  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
      width: (!!fluid) ? '100%' : null,
      borderRadius: (!!rounded) ? 0.05 : null,
      padding: 8,
      alignItems: 'center',
      ...style
    },
    text: {
      color: textColor
    }
  })

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

Button.defaultProps = {
  color: '#B5B5B5',
  textColor: '#000'
}
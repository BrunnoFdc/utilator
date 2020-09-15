import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export function BillItem({ id, name, value, separators }) {

  function handlePress() {}

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={handlePress}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={styles.container}>
        <Text style={styles.billName}>{name}</Text>
        <Text>Leitura atual: {value}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  billName: {
    fontSize: 22,
    fontWeight: 'bold',
  }
})

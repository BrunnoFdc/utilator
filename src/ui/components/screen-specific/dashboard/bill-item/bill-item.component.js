import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function BillItem({ id, name, value, separators }) {

  const navigation = useNavigation()

  function handlePress() {
    requestAnimationFrame(() => {
      navigation.navigate('BillDetails', { id, name, value })
    })
  }

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="#adadad"
      onPress={handlePress}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={styles.container}>
        <Text style={styles.billName}>{name}</Text>
        <Text style={styles.value}>Leitura atual: {value}</Text>
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
  },
  value: {
    fontSize: 16,
    color: '#000',
    opacity: 0.5
  }
})

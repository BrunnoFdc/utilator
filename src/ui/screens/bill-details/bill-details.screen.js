import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Centralized, HairlineSeparator, Title } from '../../components/common'

export function BillDetailsScreen() {

  const route = useRoute()
  const { id, name, value } = route.params

  return (
    <Centralized style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Title>{name}</Title>
        <HairlineSeparator width="70%"/>
        <View style={styles.actualValueContainer}>
          <Text style={styles.actualValueTitle}>Leitura atual</Text>
          <Text style={styles.actualValueDisplay}>{value}</Text>
        </View>
      </View>
    </Centralized>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF'
  },
  headerContainer: {
    width: '100%',
    paddingVertical: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  actualValueContainer: {
    padding: 4,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  actualValueTitle: {
    color: '#4e9c00',
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '500'
  },
  actualValueDisplay: {
    letterSpacing: 8,
    fontSize: 16,
    fontWeight: '500'
  }
})

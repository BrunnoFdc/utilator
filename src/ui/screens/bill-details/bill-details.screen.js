import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Button, Centralized, HairlineSeparator, Title } from '../../components/common'
import { NewRegistryModal } from '../../components/screen-specific/dashboard'

export function BillDetailsScreen() {

  const route = useRoute()
  const [newRegistryModalVisible, setNewRegistryModalVisible] = useState(false)
  const { id, name, value } = route.params

  return (
    <Centralized style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Title color="#000">{name}</Title>
        <HairlineSeparator width="60%" color="#808080"/>
        <View style={styles.actualValueContainer}>
          <Text style={styles.actualValueTitle}>Leitura atual</Text>
          <Text style={styles.actualValueDisplay}>{value}</Text>
        </View>
        <Button 
          color="#000" 
          textColor="#FFF" 
          style={styles.registerButton}
          onPress={() => setNewRegistryModalVisible(true)}
          rounded>Nova Leitura</Button>
        <NewRegistryModal 
          visible={newRegistryModalVisible}
          setVisible={setNewRegistryModalVisible} />
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
    padding: 12,
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
  },
  registerButton: {
    width: '50%',
    marginTop: 8,
    borderRadius: 4
  }
})

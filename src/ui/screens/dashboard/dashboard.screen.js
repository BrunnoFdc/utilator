import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, FlatList } from 'react-native'
import { BillItem } from '../../components/screen-specific/dashboard'

const data = [
  //Dados de exemplo, até termos persistencia
  { id: 1, name: 'Conta de Luz', value: 15843962 },
  { id: 2, name: 'Conta de Água', value: 12568454 }
]

export function DashboardScreen() {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: null,
      headerTitleStyle: styles.headerText
    })
  }, [])

  function billRenderer({ item, separators }) {
    return (
      <BillItem
        id={item.id}
        name={item.name}
        value={item.value}
        separators={separators} />
    )
  }

  function Separator() {
    return (
      <View style={styles.separator} />
    )
  }

  return (
    <View style={styles.dashboard}>
      <FlatList
        ItemSeparatorComponent={Separator}
        data={data}
        renderItem={billRenderer}
        keyExtractor={item => item.id + item.name} />
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
  },
  dashboard: {

  },
  separator: {
    backgroundColor: '#999999',
    height: 0.5,
    width: '100%'
  }
})
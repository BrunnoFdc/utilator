import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Button } from '../button/button.component'

export function CloseableModal(props) {

  //Props que não são "spreadadas" diretamente
  const { style, crossSide, onPressClose, children } = props

  const styles = StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection:  `row${(crossSide === 'right') ? '-reverse' : ''}`,
      alignItems: 'center',
      paddingTop: 16,
      paddingHorizontal: 16
    },
  })

  return (
    <Modal {...props} style={style} >
      <View style={styles.header}>
        <Icon 
          color="#9e9e9e" 
          name="close" 
          onPress={onPressClose} 
          size={32} />
      </View>
      <View>
        {children}
      </View>
    </Modal>
  )
}
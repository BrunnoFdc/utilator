import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Centralized, CloseableModal, Title } from '../../../common'
import { RegistryInput } from '../../bill-details'

const ANIMATION_TYPE = "slide"

function checkValue(value) {
  const numberValue = Number(value)
  return (!isNaN(value)) && Number.isInteger(numberValue) 
}

export function NewRegistryModal({ onSubmit, visible, setVisible }) {
  
  const [registry, setRegistry] = useState("")

  function handleChangeRegistry(newValue) {
    console.log(newValue)
    if(checkValue(newValue)) {
      setRegistry(newValue)
    }
  }

  function handleClose() {
   setRegistry("")
   setVisible(false) 
  }

  function handleSubmit() {

    if(checkValue(registry)) {
      onSubmit(registry)
    }

  }
  
  return (
    <CloseableModal 
      visible={visible} 
      animationType={ANIMATION_TYPE} 
      crossSide="right"
      onPressClose={handleClose}>
      <Centralized column style={styles.modal}>
        <Title fontSize={36} color="#000">Registrar nova leitura</Title>
        <RegistryInput value={registry} setValue={setRegistry} />
        <Button textColor="#FFF" style={styles.saveButton}>Salvar</Button>
      </Centralized>
    </CloseableModal>
  )
}

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  registryInput: {
    letterSpacing: 12,
    textAlign: 'center',
    width: '50%'
  },
  saveButton: {
    backgroundColor: '#000',
    width: '40%',
    borderRadius: 4
  }
})

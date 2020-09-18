import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field'

const MAX_VALUE_LENGTH = 7

export function RegistryInput({ value, setValue }) {

  const ref = useBlurOnFulfill({ value, cellCount: MAX_VALUE_LENGTH })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={MAX_VALUE_LENGTH}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => {
        const indexLastInteger = MAX_VALUE_LENGTH - 3
        const isDecimalPoint = index > indexLastInteger
        return (
          <Text
            key={index}
            style={[
              styles.cell,
              isDecimalPoint && styles.redCell,
              isFocused && styles.focusCell,
              (isFocused && isDecimalPoint) && styles.focusRedCell
            ]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 20
  },
  codeFieldRoot: {
    marginVertical: 20
  },
  cell: {
    width: 32,
    height: 32,
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
    marginHorizontal: 4
  },
  redCell: {
    borderColor: '#CC0000'
  },
  focusCell: {
    borderColor: '#000',
  },
  focusRedCell: {
    borderColor: '#FF0000'
  },
})

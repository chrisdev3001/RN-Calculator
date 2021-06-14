import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface ButtonCalculatorProps {
  text: string,
  color?: string,
  ancho?: boolean
}

export const ButtonCalculator = ({ text, color = '#2D2D2D', ancho = false }: ButtonCalculatorProps) => {
  return (
    <TouchableOpacity>
      <View style={{
        ...styles.btn,
        backgroundColor: color,
        width: (ancho) ? 180 : 80
      }}>
        <Text
          style={{
            ...styles.btnText,
            color: (color === '#9B9B9B') ? 'black' : 'white'
          }}

        >{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonCalculator

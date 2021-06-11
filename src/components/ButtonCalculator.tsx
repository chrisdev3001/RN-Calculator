import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface ButtonCalculatorProps {
    text: string,
    color?: string
}

export const ButtonCalculator = ({ text, color } : ButtonCalculatorProps) => {
    return (
        <View style={{
            ...styles.btn,
            backgroundColor: color
        }}>
            <Text style={styles.btnText}>{text}</Text>
        </View>
    )
}

export default ButtonCalculator

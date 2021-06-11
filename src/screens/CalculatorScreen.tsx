import React from 'react'
import { View, Text} from 'react-native'
import ButtonCalculator from '../components/ButtonCalculator'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
        <Text style={styles.smallResult}>1.500.000</Text>
        <Text style={styles.result}>1.500.000</Text>

        <View style={styles.row}>

          {/* Boton */}
          <ButtonCalculator text="C" color="#9B9B9B" />
          <ButtonCalculator text="+/-" color="#9B9B9B" />
          <ButtonCalculator text="del" color="#9B9B9B" />
          <ButtonCalculator text="/" color="#FF9427" />

        </View>
    </View>
  )
}

export default CalculatorScreen
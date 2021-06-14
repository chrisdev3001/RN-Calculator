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
        <ButtonCalculator text="C" color="#9B9B9B" />
        <ButtonCalculator text="+/-" color="#9B9B9B" />
        <ButtonCalculator text="del" color="#9B9B9B" />
        <ButtonCalculator text="/" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="7" />
        <ButtonCalculator text="8" />
        <ButtonCalculator text="9" />
        <ButtonCalculator text="X" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="4" />
        <ButtonCalculator text="5" />
        <ButtonCalculator text="6" />
        <ButtonCalculator text="-" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="1" />
        <ButtonCalculator text="2" />
        <ButtonCalculator text="3" />
        <ButtonCalculator text="+" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="0" ancho={true} />
        <ButtonCalculator text="." />
        <ButtonCalculator text="=" color="#FF9427" />
      </View>
    </View>
  )
}

export default CalculatorScreen
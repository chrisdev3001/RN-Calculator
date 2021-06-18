import React from 'react'
import { View, Text} from 'react-native'
import ButtonCalculator from '../components/ButtonCalculator'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    cleanPrevNumbers, 
    buildNumber, 
    positiveNegative, 
    deleteLastNumber, 
    btnPlus, 
    btnMinus, 
    btnMult, 
    btnDiv, 
    calculate 
  } = useCalculator()

   return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{prevNumber}</Text>
      <Text 
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalculator text="C" color="#9B9B9B" action={cleanPrevNumbers} />
        <ButtonCalculator text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalculator text="del" color="#9B9B9B" action={deleteLastNumber} />
        <ButtonCalculator text="/" color="#FF9427" action={btnDiv} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="7" action={buildNumber} />
        <ButtonCalculator text="8" action={buildNumber} />
        <ButtonCalculator text="9" action={buildNumber} />
        <ButtonCalculator text="X" color="#FF9427" action={btnMult} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="4" action={buildNumber} />
        <ButtonCalculator text="5" action={buildNumber} />
        <ButtonCalculator text="6" action={buildNumber} />
        <ButtonCalculator text="-" color="#FF9427" action={btnMinus} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="1" action={buildNumber} />
        <ButtonCalculator text="2" action={buildNumber} />
        <ButtonCalculator text="3" action={buildNumber} />
        <ButtonCalculator text="+" color="#FF9427" action={btnPlus} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="0" ancho={true} action={buildNumber} />
        <ButtonCalculator text="." action={buildNumber} />
        <ButtonCalculator text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  )
}

export default CalculatorScreen
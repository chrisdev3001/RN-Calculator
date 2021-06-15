import React, { useState } from 'react'
import { View, Text} from 'react-native'
import ButtonCalculator from '../components/ButtonCalculator'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
  const [prevNumber, setPrevNumber] = useState('0')
  const [number, setNumber] = useState('100')

  const buildNumber = (textNumber: string) => {
    setNumber(number + textNumber)
  }

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
        <ButtonCalculator text="C" color="#9B9B9B" action={() => setNumber('0')} />
        <ButtonCalculator text="+/-" color="#9B9B9B" action={() => setNumber('0')} />
        <ButtonCalculator text="del" color="#9B9B9B" action={() => setNumber('0')} />
        <ButtonCalculator text="/" color="#FF9427" action={() => setNumber('0')} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="7" action={buildNumber} />
        <ButtonCalculator text="8" action={buildNumber} />
        <ButtonCalculator text="9" action={buildNumber} />
        <ButtonCalculator text="X" color="#FF9427" action={buildNumber} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="4" action={buildNumber} />
        <ButtonCalculator text="5" action={buildNumber} />
        <ButtonCalculator text="6" action={buildNumber} />
        <ButtonCalculator text="-" color="#FF9427" action={buildNumber} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="1" action={buildNumber} />
        <ButtonCalculator text="2" action={buildNumber} />
        <ButtonCalculator text="3" action={buildNumber} />
        <ButtonCalculator text="+" color="#FF9427" action={() => setNumber('0')} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="0" ancho={true} action={buildNumber} />
        <ButtonCalculator text="." action={buildNumber} />
        <ButtonCalculator text="=" color="#FF9427" action={() => setNumber('0')} />
      </View>
    </View>
  )
}

export default CalculatorScreen
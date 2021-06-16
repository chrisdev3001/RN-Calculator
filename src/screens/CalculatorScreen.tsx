import React, { useState } from 'react'
import { View, Text} from 'react-native'
import ButtonCalculator from '../components/ButtonCalculator'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
  const [prevNumber, setPrevNumber] = useState('0')
  const [number, setNumber] = useState('100')

  const buildNumber = (textNumber: string) => {
    // Do not accept double dot
    if(number.includes('.') && textNumber === '.') return

    if(number.startsWith('0') || number.startsWith('-0')){
      // Decimal dot
      if(textNumber === '.'){
        setNumber(number + textNumber)
      }
      
      // Check if is another cero and there is dot
      else if(textNumber === '0' && number.includes('.')){
        setNumber(number + textNumber)
      }

      // Check if is not equals to cero and it hasn't dot
      else if(textNumber !== '0' && !number.includes('.')){
        setNumber(textNumber)
      }

      // Prevent 0000.0
      else if(textNumber === '0' && !number.includes('.')){
        setNumber(number)
      }

      else{
        setNumber(number + textNumber)
      }

    }else{
      setNumber(number + textNumber)
    }
  }

  const positiveNegative = () => {
    if(number.includes('-')){
      setNumber(number.replace('-', ''))
    }else{
      setNumber('-' + number)
    }
  }

  const deleteLastNumber = () => {
    let negative = ''
    let tempNumber = number

    if(number.includes('-')){
      negative = '-'
      tempNumber = number.substr(1)
    }

    if(tempNumber.length > 1){
      setNumber(negative + tempNumber.slice(0, -1))
    }else{
      setNumber('0')
    }
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
        <ButtonCalculator text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalculator text="del" color="#9B9B9B" action={deleteLastNumber} />
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
import { useRef, useState } from "react"

enum Operators {
    plus, minus, mult, div
  }

export const useCalculator = () => {
    const [prevNumber, setPrevNumber] = useState('')
    const [number, setNumber] = useState('100')
  
    // We dont need to re render the comnponent...
    const lastOperationRef = useRef<Operators>()
  
    const cleanPrevNumbers = () => {
      setNumber('0')
      setPrevNumber('')
    }
  
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
  
    const changePrevNumber = () => {
      let finalNumber = number
      if(number.endsWith('.')){
        finalNumber = number.slice(0, -1)
      }
  
      setPrevNumber(finalNumber)
      setNumber('0')
    }
  
    // We dont need to re render the comnponent...
    const btnPlus = () => {
      changePrevNumber()
      lastOperationRef.current = Operators.plus
    }
  
    // We dont need to re render the comnponent...
    const btnMinus = () => {
      changePrevNumber()
      lastOperationRef.current = Operators.minus
    }
  
    // We dont need to re render the comnponent...
    const btnMult = () => {
      changePrevNumber()
      lastOperationRef.current = Operators.mult
    }
  
    // We dont need to re render the comnponent...
    const btnDiv = () => {
      changePrevNumber()
      lastOperationRef.current = Operators.div
    }
  
    const calculate = () => {
      const num1 = Number(number)
      const num2 = Number(prevNumber)
  
      switch (lastOperationRef.current) {
        case Operators.plus:
          setNumber(`${num1 + num2}`)        
          break;
  
        case Operators.minus:
          setNumber(`${num2 - num1}`)        
          break;
  
        case Operators.mult:
          setNumber(`${num1 * num2}`)       
          break;
  
        case Operators.div:
          setNumber(`${num2 / num1}`)       
          break;
      }
  
      setPrevNumber('0')
    }
    
    return {
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
    }
}

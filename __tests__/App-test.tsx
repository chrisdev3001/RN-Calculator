import React from 'react'
import { render } from '@testing-library/react-native'
import App from '../App'

let component:any

describe("<App />", () => {
  beforeEach(()=>{
    component = render(<App/>)
  })

  it("renderiza ok el componente", () => {
    expect(component).toBeDefined()
  })

})

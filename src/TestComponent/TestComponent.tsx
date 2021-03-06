import React from 'react'
import { TestComponentProps } from './TestComponent.types'

import './TestComponent.scss'

const TestComponent = ({ theme }: TestComponentProps) => (
  <div data-testid="test-component" className={`test-component test-component-${theme}`}>
    <h1 className="heading">I amm the test component</h1>
    <h2>Made with love by Harvey - the manx?</h2>
  </div>
)

export default TestComponent

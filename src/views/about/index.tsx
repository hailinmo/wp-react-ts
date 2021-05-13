import React, { useState } from 'react'
import './index.less'

import { MyInput, Example } from './components/index'
import { Input } from 'antd'

const About: React.FC = () => {
  const [andInput] = useState(0)
  return (
    <div>
      <h2 className="about">About</h2>
      <MyInput placeholder="select input" />
      <Input value={andInput} placeholder="select input" />
      {andInput}
      <Example />
    </div>
  )
}
export default About

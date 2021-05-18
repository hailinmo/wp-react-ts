import React, { useState } from 'react'
import './index.css'

// import { Content, Banner } from './components/index'

const Home: React.FC = () => {
  const [name, setName] = useState('zhaosanfen')
  return (
    <div className="bg">
      <h2 className="home">Home</h2>
      {/* <Content name={name} onSetName={(value: string) => setName(value)} /> */}
      {/* <Banner /> */}
    </div>
  )
}
export default Home

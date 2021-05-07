import React from 'react'
import ReactDOM from 'react-dom'

import LayoutView from './layout/index'

import 'antd/dist/antd.css'
import '@/styles/index.css'
import '@/styles/tailwind.css'

const App = () => {
  return <LayoutView />
}

ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'

import LayoutView from './layout/index'

import 'antd/dist/antd.css'
import '@/styles/index.css'
// TODO 引入过大，待处理
import '@/styles/tailwind.css'

const App = () => {
  return <LayoutView />
  // return <div>测试</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

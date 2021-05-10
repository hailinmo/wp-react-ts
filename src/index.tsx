import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import 'antd/dist/antd.css'
import '@/styles/index.css'
// TODO 引入过大，待处理
import '@/styles/tailwind.css'

ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'

import LayoutView from './layout/index'

// import 'antd/dist/antd.css' 按需加载插件完成了css的引入；
import '@/styles/index.css'
// TODO 引入过大，待处理
import '@/styles/tailwind.css'

const App = () => {
  return <LayoutView />
}

ReactDOM.render(<App />, document.getElementById('root'))

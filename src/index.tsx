import React from 'react'
import ReactDOM from 'react-dom'

import '@/styles/index.css'
import "@/styles/tailwind.css"

const App = () => {
  return <div className="example h-3">hello world</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

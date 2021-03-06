import React from 'react'
import LayoutView from './layout/index'
import ComponentProvider from './store/index'

const App: React.FC = () => {
  return (
    <ComponentProvider>
      <LayoutView />
    </ComponentProvider>
  )
}
export default App

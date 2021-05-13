import React from 'react'
import './index.scss'
import {
  CreateRef,
  UseMemo,
  UseState,
  UseCallback,
  Test,
} from './components/index'

const Dashboard: React.FC = () => {
  console.log('dashboard render')

  return (
    <div>
      {/* <CreateRef /> */}
      <UseMemo />
      {/* <UseState /> */}
      <Test />
      <UseCallback />
      <h2 className="dashboard">Dashboard</h2>
    </div>
  )
}
export default Dashboard

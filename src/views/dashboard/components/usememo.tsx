import React, { useEffect } from 'react'
import { useStore, useDispatch } from '@/store/index'

const Store: React.FC = () => {
  const store = useStore()
  const dispatchAsync = useDispatch()

  useEffect(() => {
    dispatchAsync({ type: 'UPDATE_USER' })
  }, [])

  console.log('store render')

  return <div>store:{store.user.username}</div>
}
export default Store

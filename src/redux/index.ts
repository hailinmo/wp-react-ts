import React, { useReducer } from 'react'
import reducers from './reducers'
import store from './store'

const initStore = () => {
  const [state, dispatch] = useReducer(reducers, store)

  const actions = (value) => {
    dispatch(value)
  }
  return [state, actions]
}

export default initStore

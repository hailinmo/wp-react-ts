import React from 'react'
import reducers from './reducers'
import store from './store'
import actions from './actions'
import { Action } from './types'

const StoreCtx = React.createContext(store)
const DispatchCtx = React.createContext((() => 0) as React.Dispatch<Action>)

const Provider = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducers, store)

  const dispatchAsync = actions(state, dispatch)

  return (
    <DispatchCtx.Provider value={dispatchAsync}>
      <StoreCtx.Provider value={state}>{props.children}</StoreCtx.Provider>
    </DispatchCtx.Provider>
  )
}

export const useStore = () => React.useContext(StoreCtx)
export const useDispatch = () => React.useContext(DispatchCtx)
export default Provider

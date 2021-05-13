import { Reducer } from './types'
const reducers: Reducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case 'UPDATE_USER':
      return { ...state, ...payload }
    case 'CLEAR_USER':
      return { ...state, ...payload }
    default:
      return state
  }
}
export default reducers

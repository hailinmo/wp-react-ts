import types from './types'

function reducers(state: any, action: any): any {
  const { payload, type } = action
  switch (type) {
    case types.START:
      return { ...state, stat: 'start', ...payload }
    case types.PAUSE:
      return { ...state, stat: 'pause', ...payload }
    case types.STOP:
      return { ...state, stat: 'stop', ...payload }
    default:
      return state
  }
}
export default reducers

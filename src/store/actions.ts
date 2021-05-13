import React from 'react'
import { State, Action } from './types'

const sleep = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

const actions = (state: State, dispatch: React.Dispatch<Action>) => async (
  action: Action
) => {
  const { type } = action
  switch (type) {
    case 'UPDATE_USER': {
      await sleep(5000)
      const body: State = {
        status: 'success',
        user: {
          username: '完成',
          auth: '',
        },
      }
      dispatch({ type, payload: body })
      break
    }
    case 'CLEAR_USER':
      dispatch(action)
      break
  }
  dispatch(action)
}

export default actions

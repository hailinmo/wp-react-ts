import React, { useReducer } from 'react'

declare interface state {
  theme: string
  updateTheme: any
}

const initialState = {
  theme: 'dark-init',
  updateTheme: (value: string): void => {
    value
  },
}

export const ThemeContext = React.createContext(initialState)
const ComponentProvider: React.FC = ({ children }) => {
  const themeReducer = (state: state, action: string) => {
    switch (action) {
      case 'dark':
        return { ...state, theme: 'dark-hello' }
      case 'white':
        return { ...state, theme: 'white-hello' }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(themeReducer, initialState)
  const myState = {
    ...state,
    updateTheme: (value: string) => {
      return dispatch(value)
    },
  }
  return (
    <ThemeContext.Provider value={myState}>{children}</ThemeContext.Provider>
  )
}
export default ComponentProvider

import React from 'react'
import { ThemeContext } from '@/context'

const Banner: React.FC = () => {
  const getString = (str?: string) => {
    return `this is the ${str}`
  }
  return (
    <div>
      <ThemeContext.Consumer>
        {({ theme, updateTheme }) => (
          <div>
            <span>{getString(theme)}</span>
            <button onClick={() => updateTheme('white')}>white</button>
            <button onClick={() => updateTheme('dark')}>dark</button>
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}
export default Banner

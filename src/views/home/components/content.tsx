import React, { useContext } from 'react'
import { ThemeContext } from '@/context'

interface ContentProps {
  name: string
  onSetName: (value: string) => void
}

const Content: React.FC<ContentProps> = ({ name, onSetName }: ContentProps) => {
  const { theme, updateTheme } = useContext(ThemeContext)
  return (
    <div>
      {theme}
      <button onClick={() => updateTheme('white')}>changeTheme</button>
      <span>{name}</span>
      <button onClick={() => onSetName('yuezhao')}>changeName</button>
    </div>
  )
}
export default Content

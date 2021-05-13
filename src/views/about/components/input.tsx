import React, { useState } from 'react'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [state, setState] = useState('')
  // const inputRef = useRef(null)
  console.log('Input render')
  return (
    <input
      // ref={inputRef}
      value={state}
      placeholder={props.placeholder}
      onChange={(e) => setState(e.target.value)}
    />
  )
}

export default Input

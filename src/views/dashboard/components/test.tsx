import React, { useState, useEffect } from 'react'
function Counter() {
  const position = useWindowPosition()
  return (
    <div>
      <p>{JSON.stringify(position)}</p>
    </div>
  )
}

function useWindowPosition() {
  const [position, setPosition] = useState({ left: 0, top: 0 })
  useEffect(() => {
    function handleWindowMouseMove(e: MouseEvent) {
      setPosition((state) => ({ ...state, left: e.pageX, top: e.pageY }))
    }
    window.addEventListener('mousemove', handleWindowMouseMove)
    return () => window.removeEventListener('mousemove', handleWindowMouseMove)
  }, [])

  return position
}

export default Counter

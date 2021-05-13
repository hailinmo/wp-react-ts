import React from 'react'
import { useState, useEffect } from 'react'
function WithCreateRef() {
  const [minus, setMinus] = useState(0)
  // 每次render都会重新创建`ref`
  const ref = React.createRef()

  const handleClick = () => {
    setMinus(minus + 1)
  }

  // 这里每次都是`null`
  console.log(`ref.current=${ref.current}`)

  useEffect(() => {
    console.log(`denp[minus]>`, ref.current)
  }, [minus])

  return (
    <div className="App">
      <h1 ref={ref} id="createRef">
        Num: {minus}
      </h1>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}
export default WithCreateRef

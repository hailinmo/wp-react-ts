import React, { useMemo, useState } from 'react'
const Count: React.FC = () => {
  const [count, setCount] = useState(0)

  const increase = () => setCount((count) => count + 1)
  const reduce = () => setCount((count) => count - 1)

  // const isStop = count === 0

  const isStopM = useMemo(() => count === 0, [count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>增加</button>
      <button disabled={isStopM} onClick={reduce}>
        减少
      </button>
    </div>
  )
}
export default Count

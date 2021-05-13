import React, { useMemo, useState } from 'react'

const UseState: React.FC = () => {
  const [state, setState] = useState(0)

  // setTimeout(() => {
  //   setState(state + 1)
  //   setState(state + 1)
  // }, 5000)

  // useMemo(() => {
  //   setTimeout(() => {
  //     setState(state + 1)
  //     setState(state + 1)
  //     setState(state + 1)
  //   }, 0)
  // }, [])

  useMemo(() => {
    setState(state + 1)
    setState(state + 1)
    setState(state + 1)
  }, [])

  console.log('UseState render', state)

  return (
    <div>
      <p>UseState:{state}</p>
      <Child />
    </div>
  )
}
export default UseState

function Child() {
  console.log('child render')
  return (
    <div>
      <p>child</p>
      <ChildA />
    </div>
  )
}

function ChildA() {
  console.log('child-child render')
  return <div>child-child</div>
}

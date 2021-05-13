import React, { useCallback, useEffect, useState } from 'react'
let count = 0

interface ChildProps {
  val: string
  getData: () => void
}

function UseCallback() {
  const [val, setVal] = useState('init_data')

  const getData = useCallback(() => {
    setTimeout(() => {
      console.log(val, count)
      setVal('new data ' + count)
    }, 0)
  }, [])

  return (
    <div>
      <Child val={val} getData={getData} />
      <button onClick={() => setVal('new data click' + count)}>
        更新val{val}
      </button>
    </div>
  )
}

function Child(props: ChildProps) {
  const { val, getData } = props
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div>
      <p>{val}</p>
      <button
        onClick={() => {
          getData()
          count++
        }}
      >
        jidian
      </button>
    </div>
  )
}
export default UseCallback

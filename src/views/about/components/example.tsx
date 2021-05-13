import React, { Fragment, useMemo } from 'react'
import { useState, useEffect } from 'react'

// 产品名称列表
const nameList = ['apple', 'peer', 'banana', 'lemon']

const example = () => {
  // 产品名称、价格
  const [price, setPrice] = useState(0)
  const [name, setName] = useState('apple')

  // 假设有一个业务函数  获取产品的名字
  function getProductName() {
    console.log('getProductName触发')
    return name
  }

  const menoGetProductName = useMemo(() => {
    console.log('menoGetProductName触发')
    return () => name
  }, [name])

  // 只对name响应
  useEffect(() => {
    console.log('name effect 触发')
    getProductName()
  }, [name])

  // 只对price响应
  useEffect(() => {
    console.log('price effect 触发')
  }, [price])

  console.log('Example render')

  return (
    <Fragment>
      <p>{name}</p>
      <p>{price}</p>
      <p>{getProductName()}</p>
      <p>{menoGetProductName()}</p>
      <button onClick={() => setPrice(price + 1)}>价钱+1</button>
      <button
        onClick={() =>
          setName(nameList[(Math.random() * nameList.length) << 0])
        }
      >
        修改名字
      </button>
    </Fragment>
  )
}
export default example

import useCarContext from 'hooks/useCarContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Car = () => {
  const [total, setTotal] = useState(null)

  const { carList, setCarList } = useCarContext()

  const handlerDeleteElement = (id, quantt) => {
    const element = carList.filter( ({element, quantity}) => element.id !== id && quantity !== quantt )
    setCarList(element)
  }

  const reducer = (prev, act) => {
    const quantity = act.quantity
    const price = act.price
    const total = quantity * price
    return prev + total
  }

  const arrObj = () => carList.map(({element, quantity}) => {
    return {
      price: element.price,
      quantity 
    }
  })

  const totalCost = () => {
    const arr = arrObj()
    const result = arr.reduce(reducer, 0)
    return (result) 
  } 

  const subTotal = () => {
    const element = arrObj()
    const total = element.map(el => el.quantity).reduce((prev, act) => Number(prev) + Number(act), 0)
    return total
  }

    return (
    <>
      {carList.map(({ element, quantity }) => (
        <article className='Car__Container' key={element.id}>
          <div className='Car__Image'>
            <Image
              src={element.image}
              alt={element.name}
              width={150}
              height={150}
            />
          </div>

          <div className='Car__Text'>
            <Link href={`product/${element.id}`}>
              <a>{element.name}</a>
            </Link>
            <span>{quantity} x {element.price}</span>
            <p>{element.attributes.description}</p>
            <button onClick={() => handlerDeleteElement(element.id, quantity)}>X</button>
          </div>
        </article>
      ))}
      <div className='Total__Container'>
        {
          total ? 
          <p>Total <span>{totalCost()}$</span></p> :
          <p>Subtotal: <span>{subTotal()} products</span></p> 
        }
          
        <button 
          disabled={carList.length === 0}
        onClick={() => setTotal(true)}>Total</button>
      </div>
    </>
  )
}

export default Car
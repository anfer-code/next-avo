import useCarContext from 'hooks/useCarContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Car = () => {

  const { carList, setCarList } = useCarContext()

  const handlerDeleteElement = (id, quantt) => {
    const element = carList.filter( ({element, quantity}) => element.id !== id && quantity !== quantt )
    setCarList(element)
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

    </>
  )
}

export default Car
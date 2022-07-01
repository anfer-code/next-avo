import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const ListOfProducts = ({ products }) => {

  const productsMap = (products) => (
    products.map(({ name, image, price, id }) => (
      <Link key={id} href={`product/${id}`}>
        <div className="Card-Container" >
          <Image
            src={`${image}`}
            alt={name}
            height={333}
            width={333}
          />
          <div className='Card__Text container'>
            <p>{name}</p>
            <p>{price}</p>
          </div>
        </div>
      </Link>
    ))
  )

  return (
    <div className="Grid Container-List">
      {
        productsMap(products)
      }
    </div>
  )
}

export default ListOfProducts
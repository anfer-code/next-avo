import React, { useEffect, useState } from 'react'

import ListOfProducts from '@components/ListOfProducts'

const Home = () => {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    const controler = new AbortController()
    const signal = controler.signal

    fetch('api/avo', { signal })
      .then(res => res.json())
      .then(({ data }) => setProductList(data))
      .catch(console.log)
    return () => {
      controler.abort()
      console.log('Cancell call')
    }
  }, [])


  return (
    <>
      <h1>AvoStore</h1>
      <p>Los aguacates del puestico, en tu cocina</p>
      <ListOfProducts products={productList} />
    </>
  )
}

export default Home
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import InfoAguacate from '@components/InfoAguacate'
import DescriptionAvo from '@components/DescriptionAvo'

const ProductItem = () => {
  const { query: { id } } = useRouter()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const controler = new AbortController()
    const signal = controler.signal

    setLoading(true)
    fetch(`/api/avo/${id}`, { signal })
      .then(res => res.json())
      .then((res) => {
        setProduct(res)
        setLoading(false)
      })
      .catch(console.log)
    return () => {
      controler.abort()
      console.log('Cancell call')
    }
  }, [id])

  return (
    <>
      <h1>Hey, Don&apos;t leave without buying your Avocados</h1>
      {
        loading
          ? <p>Cargando...</p>
          : <>
            <InfoAguacate avo={product} />
            <DescriptionAvo attributes={product.attributes} />
          </>
      }
    </>
  )
}

export default ProductItem
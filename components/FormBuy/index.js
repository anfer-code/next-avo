import useCarContext from 'hooks/useCarContext'
import React, { useEffect } from 'react'
import { useState } from 'react'

import style from './style.module.css'

const FormBuy = ({ avo }) => {
  const [quantity, setQuantity] = useState("")
  const [added, setAdded] = useState(false)
  const { setCarList } = useCarContext()

  useEffect(() => {
    if(!added) return

    let timer = setTimeout(() => {
      setAdded(false)
    }, 1000)
    
    return () => {
      clearTimeout(timer)
    }
  }, [added])
  

  const handlerSubmit = (ev) => {
    ev.preventDefault()
    setCarList(prev => prev.concat({ element: avo, quantity }))
    setAdded(true)
    setQuantity("")
  }

  const handlerChange = (ev) => {
    setQuantity(ev.target.value)
  }
  return (
    <>
      <form className={style.container} onSubmit={handlerSubmit}>
        <input
          className={style.input}
          value={quantity}
          min="1"
          step="1"
          type="number"
          onChange={handlerChange}
          placeholder='Quantity'
        />
        <button
          className={style.button}
        >Add to Car</button>
      </form>
      <p className={added ? style.visible : style.invisible}>✔ Added to car</p>
    </>

  )
}

export default FormBuy
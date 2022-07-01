import {useContext} from 'react'
import { context } from '@context/articleContext'

const useCarContext = () => {

  const {carList, setCarList} = useContext(context)

  if(context === undefined) throw new Error("No hay un provider disponible")
  
  return {carList, setCarList}
}

export default useCarContext
import { createContext, useState } from "react";

export const context = createContext()

export const ArticlesProvider = ({children}) => {

  const [carList, setCarList] = useState([])

  const values = {
    carList,
    setCarList
  }

  return (
    <context.Provider value={values}>
      {children}
    </context.Provider>
  )
}

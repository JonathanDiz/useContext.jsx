import React, { createContext, useState } from 'react'

export const ContextoValores = createContext()

export const Datos = ({ children }) => {
  const [valores, setValores] = useState("")


  return (
    <ContextoValores.Provider value={{ valores, setValores }}>
      {children}
    </ContextoValores.Provider>
  );

}
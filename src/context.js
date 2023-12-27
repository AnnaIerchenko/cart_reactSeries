import React, { useContext, useReducer, useState } from 'react'
import cartItems from './data'
import reducer from './reducer'

const AppContext = React.createContext()
const url = 'https://course-api.com/react-useReducer-cart-project'

const inititalState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, inititalState)

  return (
    <AppContext.Provider value={{
      ...state,
      }}>
      {children}
    </AppContext.Provider>
  )
}
//make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export {AppProvider, AppContext}
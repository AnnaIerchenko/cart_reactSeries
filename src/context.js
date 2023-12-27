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

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART'})
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id})
  }
  return (
    <AppContext.Provider value={{
      ...state,
      clearCart,
      remove,
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
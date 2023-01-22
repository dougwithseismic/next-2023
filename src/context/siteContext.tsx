import React, { createContext, useReducer, useCallback } from 'react'

// Create a default state object
const defaultState = {}

// Create a context object
const SiteContext = createContext(defaultState)

// Define a type for the state object
type State = typeof defaultState

// Define an action type
type Action = { type: 'SET_VALUE'; key: string; value: any }

// Define a reducer function
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.key]: action.value
      }
    default:
      return state
  }
}

type Props = {
  children: React.ReactNode
}
// Define a provider component
const SiteProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  // Wrap dispatch function in a useCallback hook so that it doesn't change on every render
  const value = useCallback(() => [state, dispatch], [state, dispatch])

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

// Export the context object and provider component
export default SiteContext
export { SiteProvider }

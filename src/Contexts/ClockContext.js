import React from 'react'

let defaultContext = {
  paused: true
}
  
export const ClockContext = React.createContext(defaultContext);
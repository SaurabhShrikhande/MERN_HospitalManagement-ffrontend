import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const context = createContext({})

const AppWrapper = () => {
  const [isAuthenticated , setisAuthenticated] = useState();
  const [user , setuser] = useState({}); 


return (
  <context.Provider value={{isAuthenticated, setisAuthenticated,user,setuser }} >
       <App />
  </context.Provider>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>
)

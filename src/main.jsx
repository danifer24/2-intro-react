import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp
     user ={ { name: 'Pepe', lastname: 'Fernández'} } 
     id = { 1 }
     />
  </React.StrictMode>,
)
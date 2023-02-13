import React from 'react'
import ReactDOM from 'react-dom/client'
//import HooksApp from './Components/HooksApp'
//import CounterWithCustomHook from './Components/useState/CounterWithCustomHook'
//import SimpleForm from './Components/useEffect/SimpleForm'
import './body.css'
import FormWithCustomHook from './Components/useEffect/FormWithCustomHook'


//import CounterApp from './Components/useState/CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>,
)

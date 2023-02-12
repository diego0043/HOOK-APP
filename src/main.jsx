import React from 'react'
import ReactDOM from 'react-dom/client'
//import HooksApp from './Components/HooksApp'
//import CounterWithCustomHook from './Components/useState/CounterWithCustomHook'
import './body.css'
import SimpleForm from './Components/useEffect/SimpleForm'


//import CounterApp from './Components/useState/CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
)

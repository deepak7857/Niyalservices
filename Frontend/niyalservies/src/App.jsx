import { useState } from 'react'

import './App.css'
import Navbar from './componets/Navbar'
import Header from './componets/header'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
       
<Navbar></Navbar>
<Header></Header>
    
    </>
  )
}

export default App

import { useState } from 'react'
import './styles/global.css'
import Header from './Components/Header'
import Home from './Components/Home/Home'
import Proyectos from './Components/pages/Proyectos'
import Servicios from './Components/pages/Servicios'

function App() {
  return (

    <>
      <Header />

      <main className='layaut'>

        <Home />
        <Proyectos />
        <Servicios/>

      </main>

    </>

  )
}

export default App


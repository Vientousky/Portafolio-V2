import { useState } from 'react'
import './styles/global.css'
import Header from './Components/Header'
import Home from './Components/Home/Home'
import Proyectos from './Components/pages/Proyectos'

function App() {
  return (

    <>
      <Header />

      <main className='layaut'>

        <Home />
        <Home />
        <Home />
        <Home />
        <Proyectos />

      </main>

    </>

  )
}

export default App


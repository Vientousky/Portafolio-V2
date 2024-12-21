import Header from './Components/layout/Header'
import Home from './Components/pages/Home'
import Servicios from './Components/pages/Servicios'
import SobreMi from './Components/pages/SobreMi'
import Proyectos from './Components/projects/Proyectos'
import Contacto from './Components/pages/Contacto'
import './styles/global.css'

function App() {
  return (

    <>
      <Header />

      <main className='layaut'>
        <Home />
        <Servicios />
        <SobreMi />
        <Proyectos />
        <Contacto />
      </main>

    </>

  )
}

export default App


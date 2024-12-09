import React from 'react'
import '../../styles/home.css'
import HomerNumer from './HomeNumber'
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section className='Inicio' id='Home'>
      <div className='home-central'>

        <div className='home-texto'>

          <h1>Jose David Mancuello</h1>
          <h2>Futuro: <span>
            <Typewriter
              words={['Full-Stack', 'Ingeniero Informatico', 'Tenico Informatico']}
              loop={0} // 0 para infinito
              cursor
              cursorStyle="|"
              typeSpeed={125} // Velocidad de tipeo
              deleteSpeed={90} // Velocidad de borrado
              delaySpeed={1000} // Pausa entre palabras
            />
            </span>

          </h2>
          <p>Un joven que desde muy chico le ha gustado la tecnología y explorar como estas se desarrollan con el paso de los tiempos  y el avance tecnológico </p>

          <article className='button-enlaces'>

            <a className='CV' href="">Descargar CV</a>

            <a className='About' href="">Saber mas</a>
          </article>
          
        </div>

        <figure className='user-img'>
          <img src="official.jpeg" alt="Foto de jose Mancuello" />
        </figure>

      </div>

      <HomerNumer />

    </section>
  )
}

export default Home
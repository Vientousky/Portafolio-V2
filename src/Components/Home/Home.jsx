import React from 'react'
import '../../styles/home.css'
import HomerNumer from './HomeNumber'
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section className='Inicio' id='Home'>
      <div className='home-central'>

        <div className='home-texto'>

          <h1>Soy <span>Jose David Mancuello</span></h1>
          <h2>Futuro: <span>
            <Typewriter
              words={['Front-End', 'Ingeniero Informatico', 'Tenico Informatico']}
              loop={0} // 0 para infinito
              cursor
              cursorStyle="|"
              typeSpeed={125} // Velocidad de tipeo
              deleteSpeed={100} // Velocidad de borrado
              delaySpeed={1000} // Pausa entre palabras
            />
            </span>

          </h2>
          <p>Un joven que desde muy chico le ha gustado la tecnología y explorar como estas se desarrollan con el paso de los tiempos  y el avance tecnológico </p>

          <article className='button-enlaces'>

            <a className='CV'>
              <span><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-file-description"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 17h6" /><path d="M9 13h6" /></svg></span>
              Descargar CV
            </a>

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
import React from 'react'
import '../../styles/sobre-mi.css'

function SobreMi() {
    return (
        <section id='SobreMi' className='category-sobre-mi'>

            <div className='title-general'>
                <h1>Sobre Mi</h1>
                <p>Te intenresa conocerme ?</p>
            </div>

            <div className='container-sobre-mi'>

                <article className='img-sobre-mi'>
                    <img src='https://via.placeholder.com/150' alt='Foto de perfil' />
                </article>

                <div className='text-sobre-mi'>
                    <h2>¿Quien soy?</h2>
                    <p>Me llamo <strong>Jose David Mancuello, tengo 17 Años</strong> Estoy aprendiendo hacer un desarrollador Front End </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perspiciatis non officiis ducimus. Hic magni vitae laboriosam aliquam eos voluptatem!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perspiciatis non officiis ducimus. Hic magni vitae laboriosam aliquam eos voluptatem!</p>
                </div>

            </div>
        </section>
    )
}

export default SobreMi
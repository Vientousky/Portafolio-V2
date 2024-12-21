import React from 'react';
import '../../styles/contacto.css';

const Contacto = () => {
    return (
        <div className='contact-container'>
             <div className='title-general'>
                <h1>Contacto</h1>
            </div>
            <form className='form-contact'>
                <div className='form-title'>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className='form-email'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className='form-subject'>
                    <label htmlFor="subject">Asunto(opcional)</label>
                    <select name="" id="">
                        <option value="0">--Seleccione--</option>
                        <option value="1">Tecnico Informatico</option>
                        <option value="2">Ingenieria Informatica</option>
                        <option value="3">Desarrollo front End</option>
                    </select>
                </div>
                <div className='form-message'>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit" className='button-submi' >Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;
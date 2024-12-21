import React from 'react';
import ProyectoCard from './ProyectoCard';
import '../../styles/proyectos.css';


function Proyectos() {
  const proyectos = [
    {
      imagen: "proyect1.webp",
      titulo: "Colegio Bachi 73",
      descripcion: "Este proyecto buscaba hacer que el colegio EES N59 sea mas conocido por la comunidad y que sepa que ofrece la institucion",
      tecnologias: ["HTML", "CSS", "React"],
      repoLink: "https://github.com/Vientousky/centenario",
      demoLink: "https://escuela-del-centenario.netlify.app"
    },
    {
      imagen: "proyect2.webp",
      titulo: "Perfil boxeador",
      descripcion: "Este proyecto se encuentra en desarrollo",
      tecnologias: ["HTML", "React", "CSS"],
      repoLink: "https://github.com/Vientousky/boxeo",
      demoLink: "https://boxeadorprofile.netlify.app"
    },

    {
      imagen: "proyect3.webp",
      titulo: "Menu de confeteria",
      descripcion: "Fue creado para ayudar a la confiteria para que las ordenes sea mas facil de recibir dentro del personal ",
      tecnologias: ["HTML", "CSS", "JS"],
      repoLink: "#",
      demoLink: "#"
    },
  ];

  return (
    <section id='proyectos' className='container-projects'>

      <div className='title-general'>
        <h1>Proyectos</h1>
        <p>Proyectos destacados realizados durante mi aprendizaje en Frontend.</p>
      </div>

      <div className='sub-projects'>
        {proyectos.map((proyecto, index) => (
          <ProyectoCard
            key={index}
            imagen={proyecto.imagen}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            repoLink={proyecto.repoLink}
            demoLink={proyecto.demoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
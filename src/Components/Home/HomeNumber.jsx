import React, { useEffect, useState } from 'react'

const estadísticas = [

    { target: 1, duration: 2000, label: "Años de experiencia" },
    { target: 10, duration: 2000, label: "Proyectos Completado" },
    { target: 1, duration: 2000, label: "Clientes satifechos" },
    { target: 500, duration: 200, label: "Linea de codigo" },
]

function AnimarNumeros({ target, duration }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const stepTime = Math.floor(duration / target); // Tiempo entre incrementos
        let current = 0;

        const interval = setInterval(() => {
            current += 1;
            setCount(current);
            if (current === target) {
                clearInterval(interval);
            }
        }, stepTime);

        return () => clearInterval(interval); // Limpia si se desmonta
    }, [target, duration]);

    return <h3>+{count}</h3>;
}

function HomerNumer() {
    return (
        <div className="sección-estadísticas">
            {estadísticas.map((stat, index) => (
                <div key={index} className="info">
                    <AnimarNumeros target={stat.target} duration={stat.duration} />
                    <p>{stat.label}</p>
                </div>
            ))}
        </div>
    );
}

export default HomerNumer
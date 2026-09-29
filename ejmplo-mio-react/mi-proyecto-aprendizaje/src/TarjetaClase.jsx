import { useState } from 'react';

export default function TarjetaClase ({ nombre, horario, entrenador, plazasIniciales }) {
    const [plazas, setPlazas] = useState(plazasIniciales) 
    // plazas son las que hay disponibles, setPlazas son las que habrá al pulsarlo
    // useState para crear variable de estado

    const apuntarse = () => {
        if (plazas > 0){
            setPlazas(plazas-1)
        }
    }
    return (
        <div>
        <h2>Clase: {nombre} </h2>
        <p>Hora {horario} </p>
        <p>Entrenador: {entrenador}</p>
        <p>Plazas: {plazas}</p>
        
        <button onClick={apuntarse} disabled={plazas === 0}>{plazas > 0 ? 'Reservar mi plaza' : 'Agotado'}</button>

        </div>
    );
}


import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import TarjetaClase from './TarjetaClase'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TarjetaClase
    nombre={"Pesas"}
    horario={"10:00"}
    entrenador={"José"}
    plazasIniciales={5}
    />
    <TarjetaClase
    nombre={"Cardio"}
    horario={"12:00"}
    entrenador={"Marina"}
    plazasIniciales={2}
    />
      </>
  )
}

export default App

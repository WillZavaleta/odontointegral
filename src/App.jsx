import styles from './App.module.css'
import { Barra } from './components/Barra/Barra'
import { Contacto } from './components/Contacto/Contacto'
import { Galeria } from './components/Galeria/Galeria'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Opiniones } from './components/Opiniones/Opiniones'
import { Pie } from './components/Pie/Pie'
import { Servicios } from './components/Servicios/Servicios'
import { Sobre } from './components/Sobre/Sobre'

function App() {

  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <Barra />
        <Servicios />
        <Sobre />
        <Galeria />
        <Opiniones />
        <Contacto />
        <Pie />
      </div>
    </>
  )
}

export default App

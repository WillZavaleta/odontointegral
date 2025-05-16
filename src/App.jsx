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
import { getImageUrl } from './utils'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import 'animate.css'

function App() {

  return (
    <>
      <div className={styles.App}>
        <FloatingWhatsApp 
          phoneNumber={"+522283556682"} 
          accountName={"OdontoIntegral"} 
          statusMessage={"Normalmente responde en menos de 30 min"} 
          chatMessage={"Hola! 🤝 \n Cómo puedo ayudarte?"} 
          placeholder={"Escribe un mensaje"} 
          darkMode={false} 
          avatar={getImageUrl("sobre/hero3.jpg")}
        />
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

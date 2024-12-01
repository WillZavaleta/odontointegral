import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

export const Navbar = () => {
    const [burger_class, setBurgerClass] = useState(`${styles.burgerBar} ${styles.unclicked}`)
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <div className={styles.circulofondo}></div>
            <a to="/" className={styles.title}><img className={styles.logo} src={getImageUrl("navbar/logo.png")} alt="" />Odontología Integral</a>
            <div className={styles.menu} onClick={() => {
                setMenuOpen(!menuOpen)
                menuOpen ? setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`) : setBurgerClass(`${styles.burgerBar} ${styles.clicked}`)
            }}>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
            </div>
            <ul className={`${menuOpen ? styles.open : ""}`}>
                <li>
                    <a href="#inicio">Inicio</a>
                </li>
                <li>
                    <a href="#servicios">Servicios</a>
                </li>
                <li>
                    <a href="#nosotros">Nosotros</a>
                </li>
                <li>
                    <a href="#contacto">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

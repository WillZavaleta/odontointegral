import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

export const Navbar = () => {
    const [burger_class, setBurgerClass] = useState(`${styles.burgerBar} ${styles.unclicked}`)
    const [menuOpen, setMenuOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const changeNavbar = () => {
        window.scrollY >= 600 ? setNavbar(true) : setNavbar(false)
    }

    window.addEventListener("scroll", changeNavbar)

    return (
        <nav className={`${navbar && styles.changeNavbar}`}>
            {/* <div className={styles.circulofondo}></div> */}
            <a to="/" className={ `${styles.title} animate__animated animate__swing animate__delay-1s`}><img className={styles.logo} src={getImageUrl("navbar/logo.png")} alt="" />Odontología Integral</a>
            <div className={styles.menu} onClick={() => {
                setMenuOpen(!menuOpen)
                menuOpen ? setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`) : setBurgerClass(`${styles.burgerBar} ${styles.clicked}`)
            }}>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
            </div>
            <ul className={`${menuOpen ? styles.open : ""} animate__animated animate__fadeInDown`}>
                <li>
                    <a href="#inicio" onClick={() =>{setMenuOpen(false); setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`);} }>Inicio</a>
                </li>
                <li>
                    <a href="#servicios" onClick={() => {setMenuOpen(false); setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`);} }>Servicios</a>
                </li>
                <li>
                    <a href="#nosotros" onClick={() => {setMenuOpen(false); setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`);} }>Nosotros</a>
                </li>
                <li>
                    <a href="#contacto" onClick={() => {setMenuOpen(false); setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`);} }>Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

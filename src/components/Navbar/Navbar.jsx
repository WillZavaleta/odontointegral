import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

export const Navbar = () => {
    const [burger_class, setBurgerClass] = useState(`${styles.burgerBar} ${styles.unclicked}`)
    const [menuOpen, setMenuOpen] = useState(false)
    //Para navbar que se muestra cuando scrolleo hacia abajo y siempre esta visible
    // const [navbar, setNavbar] = useState(false)

    // const changeNavbar = () => {
    //     window.scrollY >= 600 ? setNavbar(true) : setNavbar(false)
    // }

    // window.addEventListener("scroll", changeNavbar)

    //Para que se muestre el navbar solo cuando scrolleo hacia arriba
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navbarShadow, setNavbarShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Bajando
                setShowNavbar(false);
                
            } else {
                // Subiendo
                setShowNavbar(true);
            }
            currentScrollY >= 100 ? setNavbarShadow(true) : setNavbarShadow(false)

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(()=>{
        console.log(showNavbar)
    },[showNavbar])

    return (
        // <nav className={`${navbar && styles.changeNavbar}`}>
        <nav className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden} ${navbarShadow && styles.changeNavbar}`}>
            {/* <div className={styles.circulofondo}></div> */}
            <a to="/" className={`${styles.title} animate__animated animate__swing animate__delay-1s`}><img className={styles.logo} src={getImageUrl("navbar/logo.png")} alt="" />Odontología Integral</a>
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
                    <a href="#inicio" onClick={() => { setMenuOpen(false); setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`); }}>Inicio</a>
                </li>
                <li>
                    <a href="#servicios" onClick={() => { setMenuOpen(false); setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`); }}>Servicios</a>
                </li>
                <li>
                    <a href="#nosotros" onClick={() => { setMenuOpen(false); setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`); }}>Nosotros</a>
                </li>
                <li>
                    <a href="#contacto" onClick={() => { setMenuOpen(false); setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`); }}>Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

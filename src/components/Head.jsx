import { NavLink } from "react-router-dom";
import { useState } from 'react';

export const Head = () => {

    const toggleMenu = () => setBurgerOpen(!burgerOpen);

    const [burgerOpen, setBurgerOpen] = useState(false);

    const theme = () => document.body.classList.toggle('dark');

    return (
        <>
            <header>
                <div className="logo" />

                <nav>
                    <NavLink to='cursos' className="link" >Cursos</NavLink>
                    <NavLink to='tecnologia' className="link" >Tecnologia</NavLink>
                    <NavLink to='videos' className="link" >Videos</NavLink>
                    <NavLink to='software' className="link" >Software</NavLink>
                    <NavLink to='medianav' className="link" >Medianav</NavLink>
                    <NavLink to='comprar' className="link" >Comprar</NavLink>
                </nav>

                <div className="rrss">
                    <NavLink to='https://www.youtube.com/@natsoftx' className="youtube" target="_blank" />
                    <NavLink to='https://www.facebook.com/natsoftx' className="facebook" target="_blank" />
                    <NavLink to='https://twitter.com/natsoftx' className="x" target="_blank" />

                    <NavLink to='https://wa.me/573142015171' className="whatsapp" target="_blank" />
                </div>

                <div className={`burger ${burgerOpen ? 'abierto' : ''}`} onClick={toggleMenu} >
                    <div className="barra superior"></div>
                    <div className="barra media"></div>
                    <div className="barra inferior"></div>
                </div>

                <div className="theme" onClick={theme} />


            </header >
            <menu className={`burger ${burgerOpen ? 'abierto' : ''}`}>
                <nav>
                    <div className="theme-burguer" onClick={theme} />
                    <hr />
                    <NavLink to="cursos" onClick={toggleMenu}>Cursos</NavLink>
                    <hr />
                    <NavLink to="tecnologia" onClick={toggleMenu}>Tecnología</NavLink>
                    <hr />
                    <NavLink to="videos" onClick={toggleMenu}>Videos</NavLink>
                    <hr />
                    <NavLink to="software" onClick={toggleMenu}>Software</NavLink>
                    <hr />
                    <NavLink to="medianav" onClick={toggleMenu}>Medianav</NavLink>
                    <hr />
                    <NavLink to="comprar" onClick={toggleMenu}>Comprar</NavLink>
                    <hr />
                </nav>
            </menu >
        </>
    );
};
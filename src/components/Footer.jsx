import { Link } from "react-router-dom"
export const Footer = () => {
    return (
        <>
            <footer>

                <div className="social">
                    <a href="https://wa.me/573142015171" target="_blank" rel="noopener noreferrer">
                        <img src="../../../assets/rrss/footer/whatsapp.svg" width="24" height="24" alt="Whatsapp" />
                    </a>
                    <a href="https://www.youtube.com/@natsoftx" target="_blank" rel="noopener noreferrer">
                        <img src="../../../assets/rrss/footer/youtube.svg" width="24" height="24" alt="Youtube" />
                    </a>
                    <a href="https://www.facebook.com/natsoftx" target="_blank" rel="noopener noreferrer">
                        <img src="../../../assets/rrss/footer/facebook.svg" width="24" height="24" alt="Faceboox" />
                    </a>
                    <a href="https://twitter.com/natsoftx" target="_blank" rel="noopener noreferrer">
                        <img src="../../../assets/rrss/footer/x.svg" width="24" height="24" alt="X" />
                    </a>
                    <a href="https://www.instagram.com/natsoft/" target="_blank" rel="noopener noreferrer">
                        <img src="../../../assets/rrss/footer/instagram.svg" width="24" height="24" alt="Instagram" />
                    </a>
                    <a href="https://www.threads.net/@natsoft" target="_blank" rel="noopener noreferrer">
                        <img src="../../../assets/rrss/footer/threads.svg" width="24" height="24" alt="Threads" />
                    </a>
                </div>

                <div className="contact">
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contacta con Nosotros</Link>
                </div>

                <div className="logoFooter1">
                    <img src="../../../assets/rrss/footer/wipo.svg" width="120" height="27" alt="Natsoft" />
                </div>
                <div className="logoFooter2">
                    <img src="../../../assets/rrss/footer/dnda1.svg" width="120" height="27" alt="Natsoft" />
                </div>

                <div className="logoFooter">
                    <img src="../../../assets/rrss/footer/logo_footer.svg" width="120" height="27" alt="Natsoft" />
                </div>
                <div className="rights" />
                <div className="rights" />
                <div className="rights">
                    Developed by &copy; Natsoft 2024
                </div>

            </footer>
        </>
    )
}
import { Link } from "react-router-dom"

export const Comprar = () => {

    return (
        <>
            <div className="comprar">
                <div className="card">
                    <img className="img"
                        src={`../../../assets/medianav/mediaskin.jpg`}
                        width="640" height="360" alt="Medianav" loading="lazy" />
                    <h2>MEDIASKIN 💲17 USD</h2>
                    <p>💎 Para versiones 9.1.3 - 9.1.2 - 9.1.1 - 8.0.5 - 7.0.5 - 6.0.4 - 6.0.3 - 5.2.8 - 5.2.7.A - 5.2.7.</p>
                    <p>🎁 Obsequio Converter.</p>
                    <div className="button-cont">
                        <Link to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HZSNY8877PQCJ" target="_blank" rel="noopener noreferrer"><button></button></Link>
                    </div>
                </div>

                <div className="card">
                    <img className="img"
                        src={`../../../assets/medianav/multimedia.jpg`}
                        width="640" height="360" alt="Medianav" loading="lazy" />
                    <h2>MULTIMEDIA 💲17 USD</h2>
                    <p>💎 Para versiones 9.1.3 - 9.1.2 - 9.1.1 - 8.0.5 - 7.0.5 - 6.0.4 - 6.0.3 - 5.2.8 - 5.2.7.A - 5.2.7.</p>
                    <p>🎁 Obsequio Converter.</p>
                    <div className="button-cont">
                        <Link to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TZVK22R83B49J" target="_blank" rel="noopener noreferrer"><button></button></Link>
                    </div>
                </div>

                <div className="card">
                    <img className="img"
                        src={`../../../assets/medianav/player.jpg`}
                        width="640" height="360" alt="Medianav" loading="lazy" />
                    <h2>VIDEO PLAYER 💲15 USD</h2>
                    <p>💎 Para versiones 4.1.0 - 4.0.6 - 4.0.5 - 4.0.3- 4.0.2.</p>
                    <p>🎁 Obsequio Converter.</p>
                    <div className="button-cont">
                        <Link to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UY894YK9HQR6Q" target="_blank" rel="noopener noreferrer"><button></button></Link>
                    </div>
                </div>
                <div className="card">
                    <img className="img"
                        src={`../../../assets/medianav/bancos.jpg`}
                        width="640" height="360" alt="Medianav" loading="lazy" />
                    <h2>PAGOS EN COLOMBIA 🟡🔵🔴</h2>
                    <p>📨 Por favor contáctanos.</p>
                    <p>📱 O escríbenos en <a href="https://wa.me/573142015171" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
                    <div className="button-cont">
                        <Link to="/contact" target="_blank" rel="noopener noreferrer"><button className="contact">CONTACTO</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
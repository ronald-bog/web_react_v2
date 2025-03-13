import { Link } from "react-router-dom";
export const Pet = () => {
    return (
        <>
            <div className="pet">
                <div className="card">
                    <h2>Aplicación Web PHP, Angular, MySQL (My Pets)</h2>
                    <br />
                    <a href="https://pet.natsoftx.com/" target="_blank" rel="noopener noreferrer">🌎 https://pet.natsoftx.com</a>
                    <br />
                    <br />
                    <a href="https://www.youtube.com/watch?v=8FptNv2a_sQ&list=PLnfNQrX0jBr0YgKgX2BvXmuc9gwSNC9e0" target="_blank" rel="noopener noreferrer">
                        🎞️ Lista de reproducción en Youtube.
                    </a>
                    <br />
                    <br />
                    <a href="https://natsoftx.com/download/pet.zip">💾 Script SQL para construir la base de datos.</a>
                    <br />
                    <br />
                    <a href="https://natsoftx.com/download/php.zip">💾 Archivos necesarios para el backend PHP.</a>
                    <br />
                    <br />
                    <Link to="/code/header.component.html"><a>📜 Código Html: header.component.html</a></Link>
                    <br />
                    <br />
                    <Link to="/code/styles.scss"><a>🖌️ Código Scss: styles.scss</a></Link>
                    <br />
                    <br />
                    <Link to="/code/_header.scss"><a>🖌️ Código Scss: _header.scss</a></Link>
                    <br />
                    <br />
                    <Link to="/code/home.component.html"><a>📜 Código Html: home.component.html</a></Link>
                    <br />
                    <br />
                    <Link to="/code/_home.scss"><a>🖌️ Código Scss: _home.scss</a></Link>
                    <br />
                    <br />
                    <Link to="/code/footer.component.html"><a>📜 Código Html: footer.component.html</a></Link>
                    <br />
                    <br />
                    <Link to="/code/_footer.scss"><a>🖌️ Código Scss: _footer.scss</a></Link>
                    <br />
                    <br />
                    <Link to="/code/galeria.component.html"><a>📜 Código Html: galeria.component.html</a></Link>
                    <br />
                    <br />
                    <Link to="/code/_gallery.scss"><a>🖌️ Código Scss: _gallery.scss</a></Link>
                    <br />
                    <br />
                    <Link to="/code/_lightbox.scss"><a>🖌️ Código Scss: _lightbox.scss</a></Link>
                    <br />
                    <br />
                    <Link to="/code/spinner.component.html"><a>📜 Código Html: spinner.component.html</a></Link>
                    <br />
                    <br />
                    <Link to="/code/_spinner.scss"><a>🖌️ Código Scss: _spinner.scss</a></Link>
                    <br />
                    <br />
                    <Link to="/code/login.component.html"><a>📜 Código Html: login.component.html</a></Link>
                    <br />
                    <br />
                    <Link to="/code/_login.scss"><a>🖌️ Código Scss: _login.scss</a></Link>
                    <br />
                    <br />
                </div>
                <div className="card">
                    <a href="https://pet.natsoftx.com/" target="_blank" rel="noopener noreferrer">
                        <img src="../../assets/pet.webp" width="355" height="360"
                            alt="Cursos de programación y desarrollo de software" />
                    </a>
                </div>
            </div>
        </>
    );
};
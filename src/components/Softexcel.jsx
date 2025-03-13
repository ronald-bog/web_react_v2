import { Link } from "react-router-dom";
export const Softexcel = () => {
    return (
        <>
            <div className="pet">
                <div className="card">
                    <h2>Generador dinámico hoja de Excel con datos random.</h2>
                    <br />
                    <Link to="/code/excelJava"><a>☕ Java</a></Link>
                    <br />
                    <br />
                    <Link to="/code/excelPython"><a>🐍 Python</a></Link>
                    <br />
                    <br />
                    <Link to="/code/excelJavascript"><a>🟡 Javascript</a></Link>
                    <br />
                    <br />
                    <br />
                    <a>⭐ Importante: En cada archivo puedes modificar las variables de filas y columnas para establecer la cantidad que se generará en el resultado. ⭐</a>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <div className="card">
                    <a href="https://pet.natsoftx.com/" target="_blank" rel="noopener noreferrer">
                        <img src="../../assets/excel.webp" width="355" height="360"
                            alt="Cursos de programación y desarrollo de software" />
                    </a>
                </div>
            </div>
        </>
    );
};
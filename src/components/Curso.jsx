import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Curso = () => {

    const [item, setItem] = useState(0);

    const list = [
        {
            "language": "javascript",
            "title": "JavaScript",
            "que_es": "JavaScript es un lenguaje de programación que se ejecuta en el navegador web del usuario. Permite la creación de aplicaciones web interactivas, dinámicas y ricas en contenido, mejorando la experiencia del usuario en los sitios web. JavaScript se utiliza para manipular el Document Object Model (DOM) de una página web, lo que significa que puede modificar elementos HTML, responder a eventos del usuario y realizar peticiones a servidores web para cargar o enviar datos sin necesidad de recargar la página.",
            "por_que": "JavaScript es importante de aprender debido a su papel central en el desarrollo web moderno y su capacidad para crear experiencias interactivas y dinámicas en el navegador. Es una habilidad esencial para cualquier persona interesada en programación web y puede ser un trampolín para una carrera exitosa en desarrollo web y tecnología.",
            "temas": [
                "Variables y tipos de datos.",
                "Operadores aritméticos y de comparación.",
                "Declaraciones condicionales (if, else).",
                "Bucles (for, while).",
                "Manejo de switch.",
                "Funciones en JavaScript.",
                "Manipulación de Strings.",
                "Arreglos y Bucles.",
                "Creación de objetos, propiedades y métodos.",
                "Eventos y Manipulación del DOM.",
                "Recopilación de datos de formularios.",
                "Callbacks y funciones asincrónicas.",
                "Objeto Window y Navegador.",
                "Ajax y Comunicación con el Servidor."
            ]
        },
        {
            "language": "python",
            "title": "Python",
            "que_es": "Python es un lenguaje de programación interpretado, de código abierto y multiparadigma. Fue creado en la década de 1990 por Guido van Rossum y se ha convertido en uno de los lenguajes de programación más utilizados en una amplia variedad de aplicaciones, desde desarrollo web y científico hasta automatización de tareas y aprendizaje automático.",
            "por_que": "Por su versatilidad, facilidad de uso y relevancia en una variedad de aplicaciones, así como a su demanda en el mercado laboral y su papel en tecnologías emergentes como la inteligencia artificial. Ya sea que desees desarrollar sitios web, realizar análisis de datos, automatizar tareas o explorar el aprendizaje automático, Python es una herramienta valiosa en tu conjunto de habilidades.",
            "temas": [
                "Configuración y entorno de desarrollo.",
                "Variables y tipos de datos.",
                "Operadores aritméticos y de comparación.",
                "Declaraciones condicionales (if, elif, else).",
                "Bucles (for y while).",
                "Listas, tuplas y diccionarios.",
                "Acceso y manipulación de elementos.",
                "Definición de funciones.",
                "Argumentos y parámetros.",
                "Retorno de valores.",
                "Ámbito de las variables (scope).",
                "Entrada de usuario (input).",
                "Salida a la consola (print).",
                "Importación de módulos.",
                "Uso de bibliotecas estándar (por ejemplo, math, random).",
                "Manipulación de cadenas.",
                "Convenciones de nomenclatura."
            ]
        },
        {
            "language": "java",
            "title": "Java",
            "que_es": "Java es un lenguaje de programación de alto nivel, orientado a objetos y de propósito general. Fue desarrollado por Sun Microsystems (ahora propiedad de Oracle) en la década de 1990. Java se caracteriza por su portabilidad, lo que significa que el código Java puede ejecutarse en múltiples plataformas sin necesidad de modificaciones, gracias a la Máquina Virtual Java (JVM, Java Virtual Machine).",
            "por_que": "Java es importante de aprender debido a su versatilidad, portabilidad y su papel en una amplia gama de aplicaciones y sistemas. También es un lenguaje de programación que brinda una base sólida para el aprendizaje de conceptos de programación y tiene una demanda constante en el mercado laboral, lo que lo convierte en una habilidad valiosa para programadores y desarrolladores.",
            "temas": [
                "Variables y tipos de datos.",
                "Operadores aritméticos y de comparación.",
                "Estructuras de control (if, else, switch).",
                "Bucles (for, while, do-while).",
                "Uso de operadores lógicos.",
                "Definición y llamada de métodos.",
                "Parámetros y retorno de valores.",
                "Listas y colecciones (ArrayList).",
                "Clases y objetos.",
                "Atributos y métodos.",
                "Encapsulamiento y constructores.",
                "Herencia.",
                "Polimorfismo básico.",
                "Uso de clases Scanner e InputStreamReader",
                "Manejo basico de Excepciones."
            ]
        },
        {
            "language": "react",
            "title": "React",
            "que_es": "React JS es una biblioteca de JavaScript desarrollada por Facebook, utilizada para construir interfaces de usuario interactivas y eficientes. Permite crear componentes reutilizables que gestionan su propio estado, facilitando el desarrollo y mantenimiento de aplicaciones web complejas. Su enfoque basado en componentes y su virtual DOM optimizan el rendimiento y la experiencia del usuario.",
            "por_que": "React facilita el desarrollo de aplicaciones web mediante componentes reutilizables, lo que mejora la productividad y el mantenimiento del código. Además, su popularidad en la industria asegura una gran demanda laboral y una comunidad activa, proporcionando abundantes recursos y soporte..",
            "temas": [
                "Instalación y configuración del entorno de desarrollo.",
                "Creación y uso de componentes",
                "JSX: Sintaxis extendida de JavaScript",
                "Pasando datos con props",
                "Estado y Ciclo de Vida.",
                "Manejo de eventos en React.",
                "Estilos SCSS en React.",
                "Creación y control de formularios.",
                "Validación de datos de entrada.",
                "Introducción a React Router.",
                "Configuración de rutas y navegación entre páginas.",
                "Fetching de datos con Fetch API y Axios.",
                "Manejo de estados de carga y errores.",
            ]
        },
        {
            "language": "angular",
            "title": "Angular",
            "que_es": "Angular es un framework de desarrollo web que se utiliza para crear aplicaciones web de una sola página (SPA) y aplicaciones web dinámicas. Está escrito en TypeScript y se basa en el patrón de diseño Modelo-Vista-Controlador (MVC). El enfoque principal de Angular es proporcionar una estructura y herramientas para la creación de aplicaciones web robustas, escalables y mantenibles.",
            "por_que": "Es uno de los principales frameworks en el desarrollo de aplicaciones web modernas y dinámicas. Ofrece una serie de características y patrones de diseño que mejoran la productividad del desarrollador, la reactividad de las aplicaciones y la organización del código. Con la creciente demanda de aplicaciones web de alta calidad, Angular se ha convertido en una habilidad valiosa en el campo del desarrollo web.",
            "temas": [
                "Configuración del entorno de desarrollo.",
                "Creación y estructura de la aplicación.",
                "Creación y estructura de componentes.",
                "Directivas en Angular.",
                "Módulos en Angular.",
                "Uso de inyección de dependencias en Angular.",
                "Creación de servicios y su inyección.",
                "Realización de solicitudes HTTP.",
                "Consumo de servicios web en Angular.",
                "Configuración de enrutamiento en Angular.",
                "Navegación entre vistas.",
                "Uso de observables en Angular.",
                "Mostrar mensajes de error al usuario.",
                "Interceptores.",
                "Ejecucion de la aplicacion en desarrollo.",
                "Preparación y despliegue de una aplicación Angular."
            ]
        },
        {
            "language": "html",
            "title": "Html y CSS",
            "que_es": "HTML es el lenguaje de marcado utilizado para crear la estructura y el contenido de las páginas web. Es el esqueleto de una página web y se utiliza para definir los elementos y su jerarquía. CSS es un lenguaje utilizado para dar estilo y diseño a las páginas web creadas con HTML. Define la apariencia de los elementos HTML, como colores, fuentes, márgenes, espaciado y diseño.",
            "por_que": "Aprender HTML y CSS es fundamental para cualquiera interesado en el desarrollo web, ya que son la base de la creación y el diseño de páginas web. Son las habilidades esenciales para la construcción de sitios web atractivos y funcionales, y son el punto de partida para adentrarse en tecnologías web más avanzadas, como JavaScript, Angular, React y otros.",
            "temas": [
                "Estructura de una página HTML.",
                "Etiquetas HTML:",
                "Creación de enlaces (a).",
                "Inserción de imágenes (img).",
                "Diseño de formularios (form, input, label, button).",
                "Incorporación de CSS en un documento HTML.",
                "Cambio de colores, fuentes y márgenes.",
                "Entender el modelo de caja (box model).",
                "Ajuste del espaciado, borde y relleno.",
                "Uso de propiedades como display y float.",
                "Diseño de enlaces y botones con CSS.",
                "Diseño responsivo con CSS.",
                "Conceptos básicos de flexbox.",
                "Conceptos básicos de CSS Grid."
            ]
        },
        {
            "language": "php",
            "title": "PHP",
            "que_es": "PHP es un lenguaje de programación de servidor diseñado específicamente para la creación de aplicaciones web dinámicas. PHP se ejecuta en el servidor web y se utiliza para generar contenido web de manera dinámica, lo que significa que puedes crear páginas web que se generan en tiempo real en función de la interacción del usuario, datos de la base de datos u otras fuentes.",
            "por_que": "PHP es importante de aprender debido a su papel fundamental en el desarrollo web dinámico y su amplia adopción en la industria. Es una herramienta esencial para cualquier persona interesada en crear aplicaciones web interactivas y dinámicas, y ofrece oportunidades de empleo en el campo del desarrollo web y la programación.",
            "temas": [
                "Variables y tipos de datos.",
                "Operadores aritméticos y de comparación.",
                "Estructuras de control (if, else, switch).",
                "unciones en PHP.",
                "Declaración y uso de arrays.",
                "Iteración sobre arrays (for, foreach).",
                "Uso de include y require.",
                "Formateo y cálculos de tiempo.",
                "Conexión a bases de datos MySQL.",
                "Consultas SQL básicas.",
                "Errores y excepciones en PHP.",
                "Uso de bloques try-catch.",
                "Organización de código en múltiples archivos.",
                "Funciones predefinidas de PHP."
            ]
        }
    ];

    const location = useLocation();

    useEffect(() => {
        const endpoint = location.pathname.split('/')[2];
        switch (endpoint) {
            case 'javascript': setItem(0); break;
            case 'python': setItem(1); break;
            case 'java': setItem(2); break;
            case 'react': setItem(3); break;
            case 'angular': setItem(4); break;
            default: setItem(5);
        }
    }, [location]);


    return (
        <>
            <div className="curso">
                <div className="card-img500">
                    <img src={`../../../assets/cursos/${list[item].language}.svg`} width="50" height="50"
                        alt="Cursos de programación" />
                </div>
                <div className="card">
                    <h2>
                        ¿Qué es {list[item].title}?
                    </h2>
                    <p>
                        {list[item].que_es}
                    </p>
                    <h2>
                        ¿Por qué aprender {list[item].title}?
                    </h2>
                    <p>
                        {list[item].por_que}
                    </p>
                </div>
                <div className="card-img">
                    <img src={`../../../assets/cursos/${list[item].language}.svg`} width="328.5" height="400"
                        alt="Cursos de programación" />
                </div>
                <div className="card-2">
                    <div className="contenido">
                        <h2>Que aprenderás en este curso:</h2>
                        <p>
                            {list[item].temas.map((i, index) => (
                                <li key={index}>⭐ {i}</li>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="card-3">
                    <div className="contenido">
                        <h2>Metodología:</h2>
                        <p>
                            <li>✅ Clases en vivo online e interactivas.</li>
                            <li>✅ Clases personalizadas.</li>
                            <li>✅ Flexibilidad.</li>
                            <li>✅ Sin tanto tecnicismo.</li>
                            <li>✅ Prácticas constantes.</li>
                            <li>✅ Ayuda permanente.</li>
                            <li>✅ Trato ameno y cordial.</li>
                            <br />
                            <br />
                        </p>
                        <h2>👍 COMIENZA HOY MISMO 💻</h2>
                        <Link to="/contact"><button>CONTACTAME</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}


import { Link } from "react-router-dom";

export const Cursos = () => {
  return (
    <>
      <div className="cursos">
        <div className="card">
          <img className="img" src="../../../assets/cursos/javascript.webp" width="673" height="631" alt="javascript" />
          <div className="contenido">
            <h2>Curso JavaScript Básico</h2>
            <p>Aprende a programar en JavaScript desde cero.</p>
            <h2>¿Por qué aprender JavaScript?</h2>
            <p>JavaScript es uno de los lenguajes de programación más populares en la actualidad. Con él, puedes agregar
              interactividad a sitios web, crear aplicaciones web, y mucho más. Aprender JavaScript es un paso fundamental
              para cualquier desarrollador web.</p>
            <Link to="/cursos/javascript"><button>MÁS INFORMACIÓN DE JAVASCRIPT</button></Link>
          </div>
        </div>
        <div className="card">
          <img src="../../../assets/cursos/python.webp" alt="python" />
          <div className="contenido">
            <h2>Curso Fundamentos de Python</h2>
            <p>Iníciate en la programación con Python.</p>
            <h2>¿Por qué aprender Python?</h2>
            <p>Python es esencial para principiantes y profesionales. Su sintaxis clara, versatilidad y amplia comunidad
              hacen que sea ideal para la programación de aplicaciones web, análisis de datos, IA y más. ¡Domina Python para
              abrir un mundo de oportunidades en la programación!</p>
            <Link to="/cursos/python"><button>MÁS INFORMACIÓN DE PYTHON</button></Link>
          </div>
        </div>
        <div className="card">
          <img className="img" src="../../../assets/cursos/java.webp" width="729" height="436" alt="java" />
          <div className="contenido">
            <h2>Curso Fundamentos de Java</h2>
            <p>Afianza tu viaje en la programación con Java.</p>
            <h2>¿Por qué aprender Java?</h2>
            <p>Java es un pilar de la programación. Con su portabilidad, seguridad y amplia adopción en aplicaciones
              empresariales, móviles y juegos, dominar Java es una inversión segura en tu futuro como programador. ¡Aprende
              Java y desbloquea un abanico de oportunidades en la programación!</p>
            <Link to="/cursos/java"><button>MÁS INFORMACIÓN DE JAVA</button></Link>
          </div>
        </div>
        <div className="card">
          <img className="img" src="../../../assets/cursos/react.webp" width="855" height="682" alt="react" />
          <div className="contenido">
            <h2>Curso React JS</h2>
            <p>Iníciate en este framework reactivo.</p>
            <h2>¿Por qué aprender React?</h2>
            <p>React facilita el desarrollo de aplicaciones web mediante componentes reutilizables, lo que mejora la
              productividad y el mantenimiento del código. Además, su popularidad en la industria asegura una gran demanda
              laboral y una comunidad activa, proporcionando abundantes recursos y soporte.</p>
            <Link to="/cursos/react"><button>MÁS INFORMACIÓN DE REACT</button></Link>
          </div>
        </div>
        <div className="card">
          <img className="img" src="../../../assets/cursos/angular.webp" width="529" height="532" alt="angular" />
          <div className="contenido">
            <h2>Curso Angular Framework</h2>
            <p>Aprende Angular, desarrollo web dinámico.</p>
            <h2>¿Por qué aprender Angular?</h2>
            <p>Puedes crear aplicaciones web de alto rendimiento y fáciles de
              mantener. Ofrece gran comunidad de soporte, ventajas SEO, y te prepara con
              tecnologías modernas como TypeScript. Su flexibilidad y escalabilidad te permiten afrontar desafíos de
              desarrollo con confianza, su popularidad en la industria aumenta tu empleabilidad.</p>
            <Link to="/cursos/angular"><button>MÁS INFORMACIÓN DE ANGULAR</button></Link>
          </div>
        </div>
        <div className="card">
          <img className="img" src="../../../assets/cursos/html.webp" width="768" height="337" alt="html css" />
          <div className="contenido">
            <h2>Curso HTML y CSS</h2>
            <p>Crea sitios web atractivos y da vida a tu creatividad.</p>
            <h2>¿Por qué aprender HTML y CSS?</h2>
            <p>Aprender HTML y CSS es esencial para crear sitios web. HTML estructura el contenido, mientras que CSS
              controla el diseño y estilo. Estas habilidades son fundamentales para cualquier carrera en diseño web,
              desarrollo, o marketing digital, permitiéndote construir y personalizar sitios atractivos y funcionales.</p>
            <Link to="/cursos/html"><button>MÁS INFORMACIÓN DE HTML Y CSS</button></Link>
          </div>
        </div>
      </div>

    </>
  );
};
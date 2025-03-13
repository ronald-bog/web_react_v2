import { Link } from "react-router-dom";
export const Software = () => {
  return (
    <>
      <div className="software">
        <div className="card">
          <Link to="/pet">
            <img src="../../assets/pet.webp" width="355" height="236" alt="News" loading="lazy" />
            <h2>Aplicación Web PHP, Angular, MySQL (My Pets)</h2>
          </Link>
        </div>
        <div className="card">
          <Link to="/soft_excel">
            <img src="../../assets/excel.webp" width="355" height="236" alt="News" loading="lazy" />
            <h2>Generador dinámico hoja de Excel con datos random.</h2>
          </Link>
        </div>
      </div>
    </>
  );
};



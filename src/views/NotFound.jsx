import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="error-page">
      <div className="error-inner">
        <p className="error-code">404</p>
        <h1 className="error-title">Esta página no existe.</h1>
        <p className="error-text">
          Puede que hayas escrito mal la URL o que la página se haya movido.
        </p>
        <div className="error-actions">
          <Link to="/" className="btn-more">
            Volver al inicio ↗
          </Link>
          <Link to="/portfolio" className="btn-more">
            Ver proyectos ↗
          </Link>
        </div>
      </div>
    </main>
  );
}

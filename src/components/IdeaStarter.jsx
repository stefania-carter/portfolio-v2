import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function IdeaStarter() {
  return (
    <section className="idea" id="idea">
      <div className="idea-card" data-appear>
        <div className="idea-header">
          <h2 className="idea-title">¿Tienes una idea en mente?</h2>
          <p className="idea-sub">
            Cuéntame qué estás pensando. Elige lo que más se acerque.
          </p>
        </div>

        <div className="idea-chips">
          {services.map(({ id, label }) => (
            <Link
              to={`/contact?servicio=${id}`}
              className={`idea-chip${
                id === "orientacion" ? " idea-chip--wide" : ""
              }`}
              key={id}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="idea-links">
          <span className="idea-links-label">¿Prefieres mirar primero?</span>
          <Link to="/portfolio" className="idea-link">
            Ver proyectos →
          </Link>
          <Link to="/about" className="idea-link">
            Sobre mí →
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAppear } from "../hooks/useAppear";
import portfolio from "../data/portfolio";

export default function Portfolio() {
  useAppear();

  return (
    <main className="portfolio-page" id="portfolio">
      <section className="portfolio-header" data-appear>
        <div className="portfolio-header-main">
          <h1 className="portfolio-title">Proyectos</h1>
          <p className="portfolio-subtitle">
            Una selección de trabajos que cruzan diseño gráfico, editorial,
            motion graphics, producción audiovisual y campañas para televisión,
            educación, marcas y proyectos personales.
          </p>
        </div>
        <p className="portfolio-count">{portfolio.length} proyectos</p>
      </section>

      <section className="portfolio-grid">
        {portfolio.map(
          ({ title, slug, cover, description, preview, category }) => (
            <ProjectCard
              key={slug}
              title={title}
              slug={slug}
              cover={cover}
              description={description}
              preview={preview}
              category={category}
            />
          ),
        )}
      </section>
    </main>
  );
}

function ProjectCard({ title, slug, cover, description, preview, category }) {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => {
    if (!preview || !videoRef.current) return;
    setIsHovering(true);
    videoRef.current.play().catch(() => {});
  };

  const handleLeave = () => {
    if (!preview || !videoRef.current) return;
    setIsHovering(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link
      to={`/portfolio/${slug}`}
      className="portfolio-card"
      data-appear
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <figure className="portfolio-figure">
        {category && (
          <span className="project-badge">
            <span className="badge-dot"></span>
            {category}
          </span>
        )}
        <img src={cover} alt={title} loading="lazy" />
        {preview && (
          <video
            ref={videoRef}
            className={`portfolio-preview ${isHovering ? "is-playing" : ""}`}
            src={preview}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        )}
      </figure>
      <div className="portfolio-meta">
        <div className="portfolio-caption">
          <h3 className="portfolio-caption-name">
            {title}
            <span className="portfolio-caption-arrow">↗</span>
          </h3>
        </div>
        <p className="portfolio-desc">{description}</p>
      </div>
    </Link>
  );
}

import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppear } from "../hooks/useAppear";
import { getFeatured } from "../data/portfolio";
import IdeaStarter from "../components/IdeaStarter";

// Tarjeta de proyecto con preview de video en hover
function ProjectCardHome({
  slug,
  title,
  category,
  description,
  cover,
  preview,
}) {
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
      className="project-card"
      data-appear
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <div className="project-link">
        <span className="project-badge">
          <span className="badge-dot"></span>
          {category}
        </span>
        <figure className="project-figure">
          <img src={cover} alt={title} loading="lazy" />
          {preview && (
            <video
              ref={videoRef}
              className={`project-preview ${isHovering ? "is-playing" : ""}`}
              src={preview}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            />
          )}
        </figure>
        <div className="project-overlay"></div>
        <div className="project-cta">Ver proyecto</div>
      </div>
      <div className="project-meta">
        <h3 className="project-name">
          {title}
          <span className="project-name-arrow">↗</span>
        </h3>
        <p className="project-desc">{description}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  useAppear();

  const featured = getFeatured();

  const tickerRef = useRef(null);
  const positionRef = useRef(0);
  const velocityRef = useRef(0.5);
  const pausedRef = useRef(false);
  const rafRef = useRef(null);

  // Refs para el drag
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const lastXRef = useRef(0);
  const dragVelocityRef = useRef(0);

  const tickerArtworks = [
    "/assets/gallery/obra-01.webp",
    "/assets/gallery/obra-02.webp",
    "/assets/gallery/obra-03.webp",
    "/assets/gallery/obra-04.webp",
    "/assets/gallery/obra-05.webp",
    "/assets/gallery/obra-06.webp",
  ];

  const instagramPosts = [
    {
      url: "https://www.instagram.com/p/Dd3_DktRiOs/",
      image: "/assets/ig/ig-01.webp",
      alt: "Post de Instagram 1",
    },
    {
      url: "https://www.instagram.com/p/DWPooecAQqh/",
      image: "/assets/ig/ig-02.webp",
      alt: "Post de Instagram 2",
    },
    {
      url: "https://www.instagram.com/p/CC661itH88y/",
      image: "/assets/ig/ig-03.webp",
      alt: "Post de Instagram 3",
    },
  ];

  useEffect(() => {
    const track = tickerRef.current?.querySelector(".ticker-track");
    if (!track) return;

    const CARD_WIDTH = 474;
    const TOTAL_WIDTH = tickerArtworks.length * CARD_WIDTH;

    function animate() {
      if (!pausedRef.current && !isDraggingRef.current) {
        // Aplicar inercia después de soltar
        if (Math.abs(dragVelocityRef.current) > 0.05) {
          positionRef.current += dragVelocityRef.current;
          dragVelocityRef.current *= 0.95;
        } else {
          dragVelocityRef.current = 0;
          positionRef.current -= velocityRef.current;
        }

        // Loop infinito
        if (positionRef.current <= -TOTAL_WIDTH) {
          positionRef.current += TOTAL_WIDTH;
        } else if (positionRef.current > 0) {
          positionRef.current -= TOTAL_WIDTH;
        }
      }

      track.style.transform = `translateX(${positionRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tickerArtworks.length]);

  // Flechas
  const scrollTicker = (direction) => {
    const track = tickerRef.current?.querySelector(".ticker-track");
    if (!track) return;

    const CARD_WIDTH = 474;

    pausedRef.current = true;
    dragVelocityRef.current = 0;

    track.style.transition = "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    positionRef.current += direction * CARD_WIDTH;
    track.style.transform = `translateX(${positionRef.current}px)`;

    setTimeout(() => {
      track.style.transition = "";
      pausedRef.current = false;
    }, 500);
  };

  // Drag handlers — distingue click de drag con umbral de 8px
  const handlePointerDown = (e) => {
    // Ignorar si el target es un botón (flechas)
    if (e.target.closest("button")) return;

    isDraggingRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartPosRef.current = positionRef.current;
    lastXRef.current = e.clientX;
    dragVelocityRef.current = 0;

    const track = tickerRef.current?.querySelector(".ticker-track");
    if (track) track.style.transition = "none";

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (e.buttons === 0) return;

    const totalDelta = Math.abs(e.clientX - dragStartXRef.current);

    // Solo activamos el modo drag si el usuario movió más de 8px
    if (!isDraggingRef.current && totalDelta < 8) return;

    isDraggingRef.current = true;

    const deltaX = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;

    positionRef.current += deltaX;
    dragVelocityRef.current = deltaX;

    const track = tickerRef.current?.querySelector(".ticker-track");
    if (track) track.style.transform = `translateX(${positionRef.current}px)`;
  };

  const handlePointerUp = (e) => {
    // Ignorar si el target es un botón
    if (e.target.closest("button")) return;

    const wasDragging = isDraggingRef.current;
    const totalDelta = Math.abs(e.clientX - dragStartXRef.current);

    isDraggingRef.current = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    const track = tickerRef.current?.querySelector(".ticker-track");
    if (track) track.style.transition = "";

    // Si HUBO drag significativo → bloquear el click que viene después
    if (wasDragging || totalDelta >= 8) {
      const blockClick = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        document.removeEventListener("click", blockClick, true);
      };
      document.addEventListener("click", blockClick, true);

      // Fallback por si el click nunca llega
      setTimeout(() => {
        document.removeEventListener("click", blockClick, true);
      }, 100);
    }

    // Resetear velocidad SIEMPRE
    dragVelocityRef.current = 0;
  };

  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <div className="hero-avatar" data-appear>
              <img src="/assets/profile/profile.webp" alt="Stefania Carter" />
            </div>

            <div className="hero-heading" data-appear>
              <div className="hero-heading-left">
                <p className="hero-greeting">
                  Hola{" "}
                  <span className="hero-wave" aria-hidden="true">
                    👋
                  </span>
                </p>

                <div className="hero-bottom">
                  <div className="hero-divider"></div>
                  <Link
                    to="/contact"
                    className="hero-status"
                    aria-label="Contactar"
                  >
                    <div className="status-dot"></div>
                    <div className="status-text">
                      <span className="status-label">Disponible</span>
                      <span className="status-cta">· Hablemos →</span>
                    </div>
                  </Link>
                </div>
              </div>

              <h3 className="hero-subtitle">
                Creo experiencias visuales donde la imagen, el movimiento y la
                tecnología se encuentran.
              </h3>
            </div>
          </div>

          {/* Scroll cue — invita a seguir bajando */}
          <div className="hero-scroll-cue" aria-hidden="true">
            <span className="hero-scroll-label">Scroll</span>
            <span className="hero-scroll-line"></span>
          </div>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <main className="projects" id="projects">
        <section className="projects-header" data-appear>
          <h2 className="projects-title">Proyectos Destacados</h2>
        </section>

        <section className="projects-grid">
          {featured.map(
            ({ slug, title, category, description, cover, preview }) => (
              <ProjectCardHome
                key={slug}
                slug={slug}
                title={title}
                category={category}
                description={description}
                cover={cover}
                preview={preview}
              />
            ),
          )}
        </section>

        <Link to="/portfolio" className="btn-more" data-appear>
          Más proyectos ↗
        </Link>
      </main>

      {/* PRIMER CONTACTO */}
      <IdeaStarter />

      {/* INSTAGRAM */}
      <section className="instagram-section" id="instagram">
        <div className="instagram-header" data-appear>
          <div className="instagram-header-left">
            <p className="instagram-kicker">@studio.drolett</p>
            <h2 className="instagram-title">En Instagram</h2>
            <p className="instagram-subtitle">
              Procesos, experimentos y el día a día en el estudio.
            </p>
          </div>
          <a
            href="https://www.instagram.com/studio.drolett/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-cta"
          >
            Seguir en Instagram ↗
          </a>
        </div>

        <div className="instagram-grid" data-appear>
          {instagramPosts.map(({ url, image, alt }) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post"
              key={url}
            >
              <img src={image} alt={alt} loading="lazy" />
              <div className="instagram-post-overlay">
                <span className="instagram-post-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TICKER — Galería */}
      <main className="ticker-section">
        <div className="ticker-header" data-appear>
          <h2 className="ticker-title">Galería de Arte</h2>
          <Link to="/gallery" className="ticker-cta">
            Ver todas las obras ↗
          </Link>
        </div>

        <div className="ticker-wrapper">
          <button
            className="ticker-arrow ticker-arrow-left"
            onClick={() => scrollTicker(1)}
            aria-label="Anterior"
          >
            ←
          </button>

          <Link
            to="/gallery"
            className="ticker"
            ref={tickerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onClick={(e) => {
              // Si hubo drag, evitar navegación
              if (isDraggingRef.current) {
                e.preventDefault();
              }
            }}
          >
            <div className="ticker-track">
              {[...tickerArtworks, ...tickerArtworks].map((src, i) => (
                <div className="ticker-item" key={i}>
                  <img src={src} alt={`Obra ${i + 1}`} draggable="false" />
                </div>
              ))}
            </div>
          </Link>

          <button
            className="ticker-arrow ticker-arrow-right"
            onClick={() => scrollTicker(-1)}
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </main>
    </>
  );
}

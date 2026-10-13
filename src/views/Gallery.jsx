import { useState, useEffect, useRef } from "react";
import { useAppear } from "../hooks/useAppear";

export default function Gallery() {
  useAppear();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Refs para el swipe en mobile
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const wasSwipeRef = useRef(false);

  // 👇 Añade aquí tus obras reales.
  //    Guarda las imágenes en: public/assets/gallery/
  //    Y nómbralas: obra-01.webp, obra-02.webp, obra-03.webp...
  const artworks = [
    {
      id: 1,
      title: "Sureño",
      year: "2018",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-01.webp",
    },
    {
      id: 2,
      title: "Euphoria",
      year: "2018",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-02.webp",
    },
    {
      id: 3,
      title: "Tarde",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-03.webp",
    },
    {
      id: 4,
      title: "Olvidado",
      year: "2020",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-04.webp",
    },
    {
      id: 5,
      title: "Tinte",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-05.webp",
    },
    {
      id: 6,
      title: "Borderline",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-06.webp",
    },
    {
      id: 7,
      title: "Selvático",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-07.webp",
    },
    {
      id: 8,
      title: "Infierno",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-08.webp",
    },
    {
      id: 9,
      title: "Small landscape of a garden",
      year: "2010",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-09.webp",
    },
    {
      id: 10,
      title: "Inquieto",
      year: "2020",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-10.webp",
    },
    {
      id: 11,
      title: "Ilusión",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-11.webp",
    },
    {
      id: 12,
      title: "Senda",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-12.webp",
    },
    {
      id: 13,
      title: "Vacilante",
      year: "2020",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-13.webp",
    },
    {
      id: 14,
      title: "Aterrizaje",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-14.webp",
    },
    {
      id: 15,
      title: "Temperamento Vol.3",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-15.webp",
    },
    {
      id: 16,
      title: "Deep",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-16.webp",
    },
    {
      id: 17,
      title: "Bagaje",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-17.webp",
    },
    {
      id: 18,
      title: "Florecer",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-18.webp",
    },
    {
      id: 19,
      title: "Acarrear",
      year: "2020",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-19.webp",
    },
    {
      id: 20,
      title: "Primavera",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-20.webp",
    },
    {
      id: 21,
      title: "Revoltijo",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-21.webp",
    },
    {
      id: 22,
      title: "Sutil",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-22.webp",
    },
    {
      id: 23,
      title: "Jorge",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-23.webp",
    },
    {
      id: 24,
      title: "Semillero",
      year: "2020",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-24.webp",
    },
    {
      id: 25,
      title: "Viaje al óxido",
      year: "2019",
      medium: "Acrílico sobre tela",
      img: "/assets/gallery/obra-25.webp",
    },
  ];

  const current = lightboxIndex !== null ? artworks[lightboxIndex] : null;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i - 1 + artworks.length) % artworks.length);
  const next = () => setLightboxIndex((i) => (i + 1) % artworks.length);

  // Swipe handlers para mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
    wasSwipeRef.current = false;
  };

  const handleTouchEnd = (e) => {
    touchEndXRef.current = e.changedTouches[0].screenX;
    const deltaX = touchEndXRef.current - touchStartXRef.current;
    const SWIPE_THRESHOLD = 50;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      wasSwipeRef.current = true;
      if (deltaX > 0) {
        // Swipe hacia la derecha → anterior
        prev();
      } else {
        // Swipe hacia la izquierda → siguiente
        next();
      }
    }
  };

  const handleLightboxClick = () => {
    // Si fue swipe, no cerrar el lightbox
    if (wasSwipeRef.current) {
      wasSwipeRef.current = false;
      return;
    }
    closeLightbox();
  };

  // Teclado: Escape, ←, →
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <main className="gallery-page" id="gallery">
      {/* INTRO */}
      <section className="gallery-intro" data-appear>
        <p className="gallery-kicker">Galería de Arte</p>
        <h1 className="gallery-title">Sala Abierta</h1>
        <p className="gallery-subtitle">Color, textura y gesto.</p>
        <p className="gallery-subtitle">
          Esta es mi galería personal. El espacio donde exploro mi lado más
          íntimo como artista. Aquí reúno pinturas abstractas que nacen de una
          búsqueda libre del color, la textura y el gesto, sin más reglas que la
          intuición.
        </p>
        <p className="gallery-subtitle">
          Cada obra busca transmitir una fuerza expresiva que conecta lo visual
          con lo sensible, y se abre a múltiples lecturas según quién la mira.
          Es un proyecto que desarrollo en paralelo a mi trabajo profesional, y
          que forma parte esencial de mi identidad como creadora.
        </p>
        <p className="gallery-cue">
          Haz clic en cualquier obra para verla en grande.
        </p>
      </section>

      {/* GRID DE OBRAS */}
      <section className="gallery-grid">
        {artworks.map(({ id, title, year, medium, img }, index) => (
          <figure
            className="gallery-item"
            data-appear
            key={id}
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") openLightbox(index);
            }}
          >
            <img src={img} alt={title} loading="lazy" />
            <figcaption className="gallery-caption">
              <span className="gallery-caption-title">{title}</span>
              <span className="gallery-caption-meta">
                {medium} · {year}
              </span>
            </figcaption>
          </figure>
        ))}
      </section>

      {/* LIGHTBOX */}
      {current && (
        <div
          className="lightbox"
          onClick={handleLightboxClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            Cerrar ✕
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
          >
            ←
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={current.img} alt={current.title} />
            <div className="lightbox-info">
              <p className="lightbox-title">{current.title}</p>
              <p className="lightbox-meta">
                {current.medium} · {current.year}
              </p>
              <p className="lightbox-counter">
                {lightboxIndex + 1} / {artworks.length}
              </p>
            </div>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      )}
    </main>
  );
}

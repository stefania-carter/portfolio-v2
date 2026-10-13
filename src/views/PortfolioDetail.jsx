import { useCallback, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useAppear } from "../hooks/useAppear";
import portfolio, { getBySlug } from "../data/portfolio";

// Saca el ID de cualquier formato de link de YouTube
function getYouTubeId(input) {
  if (!input) return null;
  const value = input.trim();
  if (/^[\w-]{11}$/.test(value)) return value;
  const match = value.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/,
  );
  return match ? match[1] : null;
}

// Miniatura con botón de play. Al hacer clic se reproduce aquí mismo.
function VideoEmbed({ url, title }) {
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(null);
  const id = getYouTubeId(url);

  useEffect(() => {
    if (!id) return;

    const high = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
    const medium = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

    const tryLoad = (url, onSuccess, onFail) => {
      const img = new Image();
      img.onload = () => {
        if (img.naturalWidth <= 120) {
          onFail();
        } else {
          onSuccess();
        }
      };
      img.onerror = onFail;
      img.src = url;
    };

    tryLoad(
      high,
      () => setThumbSrc(high),
      () => setThumbSrc(medium),
    );
  }, [id]);

  if (!id) return null;

  return (
    <figure className="pd-video">
      <div className="pd-video-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title || "Video de YouTube"}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
        ) : (
          <button
            type="button"
            className="pd-video-play"
            onClick={() => setPlaying(true)}
            aria-label={`Reproducir video${title ? `: ${title}` : ""}`}
          >
            {thumbSrc && (
              <img
                src={thumbSrc}
                alt={title || "Miniatura del video"}
                loading="lazy"
              />
            )}
            <span className="pd-video-overlay" aria-hidden="true"></span>
            <span className="pd-video-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="28"
                height="28"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {title && <figcaption className="pd-video-caption">{title}</figcaption>}
    </figure>
  );
}

// Arma la lista de bloques y numera las imágenes para el lightbox.
function buildContent(item) {
  if (!item) return { blocks: [], images: [] };

  const source =
    item.blocks && item.blocks.length > 0
      ? item.blocks
      : item.images.map((src) => ({ type: "image", src }));

  const images = [];
  const blocks = source.map((block) => {
    if (block.type === "image") {
      images.push(block.src);
      return { ...block, index: images.length - 1 };
    }
    if (block.type === "grid") {
      const indexes = block.images.map((src) => {
        images.push(src);
        return images.length - 1;
      });
      return { ...block, indexes };
    }
    return block;
  });

  return { blocks, images };
}

// Un texto o una lista de textos -> lista
const toList = (value) => (Array.isArray(value) ? value : value ? [value] : []);

// El key={slug} reinicia el estado al pasar de un proyecto a otro
export default function PortfolioDetail() {
  const { slug } = useParams();
  return <PortfolioItem key={slug} slug={slug} />;
}

function PortfolioItem({ slug }) {
  const item = getBySlug(slug);
  const [active, setActive] = useState(null);
  useAppear();

  const { blocks, images } = buildContent(item);
  const total = images.length;

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + total) % total)),
    [total],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % total)),
    [total],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  if (!item) return <Navigate to="/404" replace />;

  const index = portfolio.findIndex((p) => p.slug === slug);
  const nextItem = portfolio[(index + 1) % portfolio.length];

  const info = item.info;
  const intro = toList(item.intro);
  const hasDetails = intro.length > 0 || Boolean(info);

  const renderImage = (src, i) => (
    <button
      type="button"
      className="pd-media"
      onClick={() => setActive(i)}
      aria-label={`Ver imagen ${i + 1} de ${total}`}
      key={`${src}-${i}`}
    >
      <img src={src} alt={`${item.title} ${i + 1}`} loading="lazy" />
    </button>
  );

  const renderBlock = (block, key) => {
    switch (block.type) {
      case "image":
        return (
          <div className="pd-block" data-appear key={key}>
            {renderImage(block.src, block.index)}
          </div>
        );

      case "grid":
        return (
          <div
            className="pd-block pd-grid"
            style={{ "--cols": block.columns || 2 }}
            data-appear
            key={key}
          >
            {block.images.map((src, j) => renderImage(src, block.indexes[j]))}
          </div>
        );

      case "text": {
        const paragraphs = toList(block.body);
        return (
          <section
            className={`pd-text${block.heading ? "" : " pd-text--plain"}`}
            data-appear
            key={key}
          >
            {block.heading && (
              <h2 className="pd-text-heading">{block.heading}</h2>
            )}
            <div className="pd-text-body">
              {paragraphs.map((t, j) => (
                <p key={j}>{t}</p>
              ))}
              {block.list && (
                <ul>
                  {block.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        );
      }

      case "video":
        return (
          <div className="pd-block" data-appear key={key}>
            <VideoEmbed url={block.url} title={block.title} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="pd-page">
      <Link to="/portfolio" className="pd-back" data-appear>
        ← Proyectos
      </Link>

      {/* 1. Título + descripción breve */}
      <header className="pd-header" data-appear>
        <div className="pd-header-main">
          <p className="pd-meta">{item.category}</p>
          <h1 className="pd-title">{item.title}</h1>
        </div>
        <p className="pd-desc">{item.description}</p>
      </header>

      {/* 2. Hero visual: video si existe, sino la primera imagen */}
      {item.video ? (
        <div className="pd-hero-video" data-appear>
          <VideoEmbed url={item.video.url} title={item.video.title} />
        </div>
      ) : (
        item.images &&
        item.images.length > 0 && (
          <div className="pd-hero-image" data-appear>
            <button
              type="button"
              className="pd-media pd-media--hero"
              onClick={() => setActive(0)}
              aria-label="Ver imagen en grande"
            >
              <img src={item.images[0]} alt={item.title} loading="eager" />
            </button>
          </div>
        )
      )}

      {/* 3. Links externos (demo, repo, figma, etc.) */}
      {item.links && item.links.length > 0 && (
        <div className="pd-external-links" data-appear>
          {item.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-external-link"
            >
              <span className="pd-external-link-label">{link.label}</span>
              <span className="pd-external-link-arrow">↗</span>
            </a>
          ))}
        </div>
      )}

      {/* 4. Intro larga a la izquierda, ficha técnica simplificada a la derecha */}
      {hasDetails && (
        <section className="pd-details" data-appear>
          <div className="pd-intro">
            {intro.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          {info && (info.client || info.team) && (
            <div className="pd-sheet">
              {info.client && (
                <div className="pd-sheet-item">
                  <span className="pd-sheet-label">Cliente</span>
                  <p>{info.client}</p>
                </div>
              )}
              {info.team && info.team.length > 0 && (
                <div className="pd-sheet-item">
                  <span className="pd-sheet-label">Equipo</span>
                  <ul>
                    {info.team.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* 5. Bloques de contenido (imágenes, grids, videos, textos) */}
      <div className="pd-blocks">
        {blocks.map((block, i) => renderBlock(block, i))}
      </div>

      {/* 6. Siguiente proyecto */}
      <Link to={`/portfolio/${nextItem.slug}`} className="pd-next" data-appear>
        <div className="pd-next-text">
          <span className="pd-next-label">Siguiente proyecto</span>
          <span className="pd-next-name">{nextItem.title}</span>
        </div>
        <span className="pd-next-arrow">→</span>
      </Link>

      {/* Lightbox */}
      {active !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" onClick={close}>
            Cerrar
          </button>

          {total > 1 && (
            <>
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
            </>
          )}

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={images[active]} alt={`${item.title} ${active + 1}`} />
            <span className="lightbox-meta">{item.category}</span>
          </div>
        </div>
      )}
    </main>
  );
}

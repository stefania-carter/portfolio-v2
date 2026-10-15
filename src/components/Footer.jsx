import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-social">
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/stefaniacarter/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/studio.drolett"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12C21.33 1.36 20.66.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>

            {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/@stefaniacarterdrolett"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/stefania-carter"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
              </svg>
            </a>

            {/* VIMEO */}
            <a
              href="https://vimeo.com/stefaniacarter"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vimeo"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.976 6.15c-.106 2.323-1.734 5.506-4.886 9.548-3.258 4.218-6.015 6.327-8.27 6.327-1.398 0-2.578-1.29-3.542-3.87-.644-2.365-1.288-4.73-1.933-7.095-.717-2.58-1.485-3.87-2.31-3.87-.18 0-.81.378-1.888 1.134L0 7.006c1.187-1.043 2.357-2.086 3.51-3.128C5.093 2.474 6.278 1.752 7.06 1.674c1.85-.178 2.99 1.09 3.416 3.806.46 2.93.78 4.752.96 5.467.532 2.417 1.116 3.625 1.755 3.625.496 0 1.24-.783 2.234-2.348 1.02-1.566 1.564-2.758 1.634-3.575.142-1.35-.39-2.026-1.594-2.026-.567 0-1.152.13-1.755.39 1.166-3.817 3.394-5.672 6.682-5.566 2.437.072 3.587 1.648 3.448 4.732z" />
              </svg>
            </a>
          </div>

          <div className="footer-contact">
            <h2 className="footer-h2">Hablemos.</h2>
            <Link to="/contact" className="footer-cta">
              Contacto ↗
            </Link>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/">Inicio</Link>
          <Link to="/portfolio">Proyectos</Link>
          <Link to="/about">Sobre mí</Link>
          <Link to="/gallery">Galería de Arte</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/privacy">Privacidad</Link>
        </div>

        <p className="footer-copy">
          © 2009 - {new Date().getFullYear()} STUDIO DROLETT
        </p>
      </div>
    </footer>
  );
}

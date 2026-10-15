import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarPulse, setAvatarPulse] = useState(false);
  const { isDark, toggle } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  const handleAvatarClick = (e) => {
    e.preventDefault();
    setAvatarPulse(true);
    setTimeout(() => {
      setAvatarPulse(false);
      navigate("/");
    }, 700);
  };

  return (
    <>
      <nav className="nav-mobile">
        <div className="nav-inner">
          <div className="nav-left">
            <Link
              to="/"
              className={`avatar-smile ${avatarPulse ? "is-pulsing" : ""}`}
              aria-label="Ir al inicio"
              onClick={handleAvatarClick}
            >
              <svg viewBox="0 0 40 40" width="100%" height="100%">
                <rect
                  className="avatar-bg"
                  width="40"
                  height="40"
                  fill="#FFCE2C"
                />

                {/* Estado normal: punto */}
                <circle
                  className="avatar-dot"
                  cx="20"
                  cy="20"
                  r="6"
                  fill="#030885"
                />

                {/* Estado hover: letras SCD */}
                <text
                  className="avatar-letters"
                  x="20"
                  y="20"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontFamily="Geist Mono, monospace"
                  fontSize="13"
                  fontWeight="600"
                  letterSpacing="-0.5"
                  fill="#030885"
                >
                  SCD
                </text>
              </svg>
            </Link>

            <Link to="/" className="nav-name">
              studio.drolett
            </Link>
          </div>

          <div className="nav-center">
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/stefaniacarter/"
              className="nav-social"
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
              className="nav-social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12C21.33 1.36 20.66.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/stefania-carter"
              className="nav-social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
              </svg>
            </a>
          </div>

          <div className="nav-right">
            {/* CONTACTO — siempre visible */}
            <Link to="/contact" className="nav-contact">
              Contacto <span className="nav-contact-arrow">↗</span>
            </Link>

            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label="Cambiar tema"
            >
              <span
                className="theme-knob"
                style={{ left: isDark ? "calc(100% - 26.25px)" : "3.75px" }}
              ></span>
            </button>
            <button
              className="nav-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <span className="nav-menu-label">Menu</span>
              <span className="nav-menu-icon">☰</span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`menu-overlay ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-overlay-inner">
          <button
            className="menu-close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            Cerrar
          </button>

          <nav className="menu-links">
            <Link
              to="/"
              onClick={closeMenu}
              className={isActive("/") ? "is-active" : ""}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={isActive("/about") ? "is-active" : ""}
            >
              Sobre mí
            </Link>
            <Link
              to="/portfolio"
              onClick={closeMenu}
              className={isActive("/portfolio") ? "is-active" : ""}
            >
              Proyectos
            </Link>
            <Link
              to="/gallery"
              onClick={closeMenu}
              className={isActive("/gallery") ? "is-active" : ""}
            >
              Arte
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={isActive("/contact") ? "is-active" : ""}
            >
              Contacto
            </Link>
          </nav>

          <div className="menu-social">
            <a
              href="https://www.linkedin.com/in/stefaniacarter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com/studio.drolett"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.behance.net/stefaniacarter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance ↗
            </a>
            <a
              href="https://www.youtube.com/@stefaniacarterdrolett"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube ↗
            </a>
            <a
              href="https://github.com/stefania-carter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://vimeo.com/stefaniacarter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vimeo ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

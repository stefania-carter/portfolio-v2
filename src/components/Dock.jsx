import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dock() {
  const [hovered, setHovered] = useState(null);
  const [tappedId, setTappedId] = useState(null);
  const [visible, setVisible] = useState(true);
  const [isTouch, setIsTouch] = useState(false);

  // Detectar si es touch
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  // Ocultar el dock cuando el footer entra en el viewport
  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -80px 0px",
        threshold: 0,
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // Resetear el estado tapped al hacer scroll
  useEffect(() => {
    const onScroll = () => setTappedId(null);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handler de tap para mobile
  const handleTouchStart = (id) => {
    setTappedId(id);
    setTimeout(() => setTappedId(null), 200);
  };

  const items = [
    {
      id: "home",
      label: "Inicio",
      href: "/",
      isInternal: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
    },
    {
      id: "portfolio",
      label: "Proyectos",
      href: "/portfolio",
      isInternal: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/stefania-carter-drolett-739ab763/",
      isInternal: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/studio.drolett",
      isInternal: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12C21.33 1.36 20.66.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`dock-wrapper ${visible ? "" : "dock-hidden"}`}
      {...(isTouch ? {} : { onMouseLeave: () => setHovered(null) })}
    >
      {items.map((item) => {
        const isHovered = !isTouch && hovered === item.id;
        const isNeighborLeft =
          !isTouch && hovered === items[items.indexOf(item) - 1]?.id;
        const isNeighborRight =
          !isTouch && hovered === items[items.indexOf(item) + 1]?.id;
        const isTapped = tappedId === item.id;

        let scale = 1;
        if (isHovered) scale = 1.4;
        else if (isNeighborLeft || isNeighborRight) scale = 1.15;
        else if (isTapped) scale = 0.95;

        const content = (
          <>
            {isHovered && <span className="dock-tooltip">{item.label}</span>}
            <span
              className="dock-icon"
              style={{ transform: `scale(${scale})` }}
            >
              {item.icon}
            </span>
          </>
        );

        const commonProps = {
          className: `dock-item ${isTapped ? "is-tapped" : ""}`,
          onTouchStart: () => handleTouchStart(item.id),
          "aria-label": item.label,
          ...(isTouch
            ? {}
            : {
                onMouseEnter: () => setHovered(item.id),
              }),
        };

        if (item.isInternal) {
          return (
            <Link key={item.id} to={item.href} {...commonProps}>
              {content}
            </Link>
          );
        }

        return (
          <a
            key={item.id}
            href={item.href}
            target={item.download ? undefined : "_blank"}
            rel={item.download ? undefined : "noopener noreferrer"}
            download={item.download ? true : undefined}
            {...commonProps}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}

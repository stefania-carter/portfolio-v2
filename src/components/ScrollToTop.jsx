import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // 1. Al cambiar de ruta → scroll al top inmediato
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 2. Al clickear un link a la MISMA ruta → scroll al top suave
  useEffect(() => {
    const handleClick = (e) => {
      // Buscar el link más cercano
      const link = e.target.closest("a");
      if (!link) return;

      // Ignorar links con target="_blank" o con hash (#seccion)
      if (link.target === "_blank") return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      // Obtener el pathname del link (sin query ni hash)
      let linkPath;
      try {
        linkPath = new URL(link.href, window.location.origin).pathname;
      } catch {
        return;
      }

      // Si el link apunta a la MISMA ruta en la que estamos → scroll al top
      if (linkPath === pathname) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}

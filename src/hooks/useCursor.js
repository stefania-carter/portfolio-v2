import { useEffect } from "react";

export function useCursor() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const cursor = document.getElementById("cursor");
    const canvas = document.getElementById("cursorCanvas");
    if (!cursor || !canvas) return;

    const ctx = canvas.getContext("2d");
    let w, h;
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let cursorPos = { x: mouse.x, y: mouse.y };
    let trailPoint = { x: mouse.x, y: mouse.y };

    // 👇 Cola de puntos (una sola polilínea)
    const points = [];

    const MAX_LIFE = 400;
    const MIN_DIST = 2; // ← mucho más bajo para que sea continuo
    const TRAIL_LERP = 0.08;
    const CURSOR_LERP = 0.2;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    }
    resize();

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onLeave = () => {
      cursor.style.opacity = "0";
      points.length = 0;
    };
    const onEnter = () => {
      cursor.style.opacity = "1";
      points.length = 0;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    // Detección de hover
    let hoverTimeout = null;

    const hoverHandler = (e) => {
      const target = e.target;

      const isClickable = target.closest(
        "a, button, .project-link, .gallery-item",
      );
      if (isClickable) {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        cursor.classList.add("is-hover");
        cursor.classList.remove("is-text");
        cursor.classList.remove("is-text-active");
        return;
      }

      const isText = target.closest(
        "p, h1, h2, h3, h4, h5, h6, li, blockquote, span, pre, .hero-mono pre",
      );
      if (isText) {
        cursor.classList.remove("is-hover");
        cursor.classList.add("is-text");

        if (hoverTimeout) clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
          cursor.classList.add("is-text-active");
        }, 80);
        return;
      }

      if (hoverTimeout) clearTimeout(hoverTimeout);
      cursor.classList.remove("is-hover");
      cursor.classList.remove("is-text");
      cursor.classList.remove("is-text-active");
    };

    document.addEventListener("mouseover", hoverHandler);

    let rafId;
    function render() {
      cursorPos.x += (mouse.x - cursorPos.x) * CURSOR_LERP;
      cursorPos.y += (mouse.y - cursorPos.y) * CURSOR_LERP;

      trailPoint.x += (mouse.x - trailPoint.x) * TRAIL_LERP;
      trailPoint.y += (mouse.y - trailPoint.y) * TRAIL_LERP;

      cursor.style.transform = `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`;

      // 👇 Añadimos el punto si se ha movido lo suficiente
      const lastP = points[points.length - 1];
      if (!lastP) {
        points.push({
          x: trailPoint.x,
          y: trailPoint.y,
          born: performance.now(),
        });
      } else {
        const d = Math.hypot(trailPoint.x - lastP.x, trailPoint.y - lastP.y);
        if (d > MIN_DIST) {
          points.push({
            x: trailPoint.x,
            y: trailPoint.y,
            born: performance.now(),
          });
        }
      }

      // Filtramos los caducados
      const now = performance.now();
      for (let i = points.length - 1; i >= 0; i--) {
        if (now - points[i].born > MAX_LIFE) points.splice(i, 1);
      }

      // Render
      ctx.clearRect(0, 0, w, h);

      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? "255, 206, 44" : "3, 8, 133";
      const baseOpacity = 0.6;

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // 👇 Dibujamos la polilínea segmento por segmento,
      //    con opacidad/grosor según la edad de cada punto.
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];

        const age = (now - curr.born) / MAX_LIFE;
        const alpha = Math.max(0, 1 - age);
        const opacity = baseOpacity * alpha;

        ctx.strokeStyle = `rgba(${color}, ${opacity})`;
        ctx.lineWidth = 2 * (1 - age * 0.5);

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);
        ctx.stroke();
      }

      rafId = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", hoverHandler);
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, []);
}

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = total > 0 ? scrolled / total : 0;

      // Aparece cuando el usuario pasó el 50% de la página
      setVisible(progress > 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-top-btn ${visible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <span className="scroll-top-arrow">↑</span>
    </button>
  );
}

// Opciones que ve el visitante, en lenguaje de cliente (no de diseñadora).
// Se usan en el Home (IdeaStarter) y en el formulario de Contacto.
// Para agregar o quitar una opción, edita solo esta lista.
export const services = [
  { id: "marca", label: "Marca o logo" },
  { id: "sitio-web", label: "Página web" },
  { id: "app", label: "App" },
  { id: "video-explicativo", label: "Video" },
  { id: "motion", label: "Motion graphics" },
  { id: "otra", label: "Otra idea" },
  { id: "orientacion", label: "No sé por dónde empezar" },
];

export const getService = (id) => services.find((s) => s.id === id);

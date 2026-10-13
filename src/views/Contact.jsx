import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useAppear } from "../hooks/useAppear";
import { services, getService } from "../data/services";

export default function Contact() {
  useAppear();

  const [searchParams, setSearchParams] = useSearchParams();
  const paramService = searchParams.get("servicio");

  const [servicio, setServicio] = useState(
    getService(paramService) ? paramService : "",
  );

  useEffect(() => {
    if (getService(paramService)) setServicio(paramService);
  }, [paramService]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  // Hora en vivo de Chile
  const [horaChile, setHoraChile] = useState("");

  useEffect(() => {
    const updateHora = () => {
      const ahora = new Date();
      const hora = ahora.toLocaleTimeString("es-CL", {
        timeZone: "America/Santiago",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setHoraChile(hora);
    };

    updateHora();
    const intervalo = setInterval(updateHora, 60000);

    return () => clearInterval(intervalo);
  }, []);

  // Email visible para el usuario (en el aside, mailto, etc.)
  const emailPublic = "scarterdrolett@gmail.com";

  // Hash de FormSubmit que oculta el email real del código fuente
  const emailHash = "1db57a9aa019c0615997c0e2fb7c9f37";

  const selected = getService(servicio);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const toggleService = (id) => {
    setServicio((current) => (current === id ? "" : id));
  };

  const messagePlaceholder = selected
    ? selected.id === "orientacion"
      ? "Sin problema. Cuéntame qué tienes en mente, aunque sea una frase suelta. Yo te ayudo a ordenarlo."
      : `Cuéntame un poco más sobre tu ${selected.label.toLowerCase()}. ¿Para qué la necesitas? ¿Quién la va a ver?`
    : "Una o dos líneas bastan. Qué quieres lograr, para quién, o simplemente qué tienes en mente.";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevenir doble submit
    if (status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${emailHash}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          Necesita: selected ? selected.label : "No indicó",
          _subject: `Nuevo mensaje desde tu web${
            selected ? ` — ${selected.label}` : ""
          }`,
        }),
      });

      // Verificar status HTTP y contenido
      const data = await res.json().catch(() => ({}));
      const isSuccess = res.ok && data.success !== "false";

      if (isSuccess) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setServicio("");
        setSearchParams({}, { replace: true });
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 8000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 8000);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailPublic);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textarea = document.createElement("textarea");
      textarea.value = emailPublic;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="contact-page" id="contact">
      {/* HERO */}
      <section className="contact-hero" data-appear>
        <p className="contact-kicker">Contacto</p>
        <h1 className="contact-title">Hablemos.</h1>
        <p className="contact-subtitle">
          Cuéntame tu idea, aunque todavía no esté clara del todo.
        </p>
      </section>

      {/* LAYOUT PRINCIPAL */}
      <section className="contact-layout" data-appear>
        {/* FORMULARIO O MENSAJE DE ÉXITO */}
        {status === "success" ? (
          <div className="contact-success" role="status" aria-live="polite">
            <p className="contact-success-title">¡Mensaje enviado!</p>
            <p className="contact-success-text">
              Gracias por escribirme. Te responderé a la brevedad al correo que
              me dejaste.
            </p>
            <button
              type="button"
              className="contact-success-reset"
              onClick={() => setStatus("idle")}
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* PASO 01 — QUÉ NECESITA */}
            <div className="contact-step">
              <div className="contact-step-header">
                <span className="contact-step-number">01</span>
                <span className="contact-step-label">¿Qué necesitas?</span>
              </div>
              <p className="contact-hint">
                Elige lo que más se acerque. Si no lo tienes claro, marca la
                última opción.
              </p>
              <div className="contact-chips">
                {services.map(({ id, label }) => (
                  <button
                    type="button"
                    key={id}
                    className={`contact-chip${
                      servicio === id ? " is-selected" : ""
                    }`}
                    onClick={() => toggleService(id)}
                    aria-pressed={servicio === id}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* PASO 02 — CUÉNTAME */}
            <div className="contact-step">
              <div className="contact-step-header">
                <span className="contact-step-number">02</span>
                <span className="contact-step-label">Cuéntame tu idea</span>
              </div>
              <textarea
                id="message"
                name="message"
                className="contact-textarea"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={messagePlaceholder}
                aria-label="Cuéntame tu idea"
              />
            </div>

            {/* PASO 03 — TUS DATOS */}
            <div className="contact-step">
              <div className="contact-step-header">
                <span className="contact-step-number">03</span>
                <span className="contact-step-label">Tus datos</span>
              </div>
              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="name" className="contact-field-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact-input"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email" className="contact-field-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact-input"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="contact-submit-row">
              <div className="contact-submit-info">
                <span className="contact-submit-hint">
                  Te responderé en 24-48 horas.
                </span>
              </div>
              <button
                type="submit"
                className="contact-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                <span className="contact-submit-arrow">↗</span>
              </button>
            </div>

            {/* AVISO DE PRIVACIDAD */}
            <p className="contact-privacy-note">
              Tus datos solo se usan para responder tu mensaje.{" "}
              <Link to="/privacy">Ver política de privacidad</Link>.
            </p>

            {/* ERROR */}
            {status === "error" && (
              <p
                className="contact-feedback contact-feedback--error"
                role="alert"
                aria-live="assertive"
              >
                Algo falló. Escríbeme directo a{" "}
                <a href={`mailto:${emailPublic}`}>{emailPublic}</a>.
              </p>
            )}
          </form>
        )}

        {/* ASIDE — INFO DE APOYO */}
        <aside className="contact-aside">
          <div className="contact-aside-block">
            <span className="contact-aside-label">O escríbeme directo</span>
            <button
              type="button"
              className="contact-email"
              onClick={copyEmail}
              aria-label="Copiar email al portapapeles"
            >
              <span className="contact-email-text">{emailPublic}</span>
              <span className="contact-email-action">
                {copied ? "✓ Copiado" : "Copiar"}
              </span>
            </button>
          </div>

          <div className="contact-aside-block">
            <span className="contact-aside-label">Zona horaria</span>
            <p className="contact-aside-value">
              {horaChile ? `${horaChile} · GMT-3` : "Cargando…"}
            </p>
          </div>
        </aside>
      </section>

      {/* TOAST */}
      {copied && (
        <div className="toast" role="status" aria-live="polite">
          ¡Email copiado!
        </div>
      )}
    </main>
  );
}

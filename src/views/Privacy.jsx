import { useAppear } from "../hooks/useAppear";

export default function Privacy() {
  useAppear();

  const email = "scarterdrolett@gmail.com";
  const lastUpdate = "Octubre 2026";

  return (
    <main className="privacy-page" id="privacy">
      <section className="privacy-hero" data-appear>
        <p className="privacy-kicker">Legal</p>
        <h1 className="privacy-title">Política de Privacidad</h1>
        <p className="privacy-date">Última actualización: {lastUpdate}</p>
      </section>

      <section className="privacy-content" data-appear>
        <div className="privacy-block">
          <h2 className="privacy-heading">Qué datos recopilo</h2>
          <p>
            Solo recopilo los datos que tú decides entregarme a través del
            formulario de contacto:
          </p>
          <ul>
            <li>Tu nombre</li>
            <li>Tu dirección de correo electrónico</li>
            <li>El mensaje que me escribes</li>
          </ul>
          <p>
            No uso cookies de seguimiento, no hago perfilado de usuarios y no
            recopilo datos de navegación con fines publicitarios.
          </p>
        </div>

        <div className="privacy-block">
          <h2 className="privacy-heading">Para qué los uso</h2>
          <p>
            Uso tus datos únicamente para <strong>responder tu mensaje</strong>{" "}
            y, si corresponde, coordinar un proyecto o colaboración. No los uso
            para enviar publicidad ni para ningún otro fin.
          </p>
        </div>

        <div className="privacy-block">
          <h2 className="privacy-heading">Cómo se procesan</h2>
          <p>
            El formulario de este sitio usa el servicio{" "}
            <strong>FormSubmit</strong> para reenviar el mensaje a mi correo
            electrónico. FormSubmit recibe el contenido del formulario y lo
            entrega a mi bandeja de entrada. Puedes revisar su política de
            privacidad en{" "}
            <a
              href="https://formsubmit.co/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              formsubmit.co/privacy-policy
            </a>
            .
          </p>
          <p>
            Este sitio también está alojado en <strong>Vercel</strong>, que
            puede registrar datos técnicos básicos (como la dirección IP) para
            el funcionamiento del servicio.
          </p>
        </div>

        <div className="privacy-block">
          <h2 className="privacy-heading">Con quién NO los comparto</h2>
          <p>
            No vendo, alquilo ni comparto tus datos con terceros para fines
            comerciales. Solo uso los servicios mencionados arriba (FormSubmit y
            Vercel) para que el sitio funcione.
          </p>
        </div>

        <div className="privacy-block">
          <h2 className="privacy-heading">Cuánto tiempo los conservo</h2>
          <p>
            Guardo los mensajes solo el tiempo necesario para responderte y, si
            se concreta un proyecto, mientras dure la relación profesional.
            Después de eso, los elimino.
          </p>
        </div>

        <div className="privacy-block">
          <h2 className="privacy-heading">Tus derechos</h2>
          <p>
            Puedes solicitarme en cualquier momento{" "}
            <strong>acceder, corregir o eliminar</strong> los datos que me hayas
            entregado. Solo escríbeme y te responderé lo antes posible.
          </p>
        </div>

        <div className="privacy-block">
          <h2 className="privacy-heading">Cambios a esta política</h2>
          <p>
            Si en el futuro modifico esta política, actualizaré la fecha al
            inicio de esta página. Te recomiendo revisarla si tienes dudas sobre
            cómo trato tus datos.
          </p>
        </div>
      </section>
    </main>
  );
}

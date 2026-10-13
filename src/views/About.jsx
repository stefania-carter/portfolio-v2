import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppear } from "../hooks/useAppear";

export default function About() {
  useAppear();

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const workExperience = [
    {
      role: "Postproducción y Motion Graphics",
      company: "Universidad Viña del Mar UVM",
      year: "2019 - Hoy",
      website: "https://www.uvm.cl",
      desc: "Encargada del diseño, desarrollo y asesoría de piezas gráficas y contenido audiovisual para campañas de comunicación interna y externa, alineadas a los objetivos de marketing y posicionamiento de marca. Mi labor se enfoca en potenciar el impacto comunicacional, garantizar la calidad visual y la coherencia institucional, así como la correcta aplicación de la identidad de marca de la Universidad Viña del Mar, contribuyendo al fortalecimiento de su imagen y engagement con sus audiencias.",
    },
    {
      role: "Motion Graphics",
      company: "TVN (Televisión Nacional de Chile)",
      website: "https://www.24horas.cl",
      year: "2014 - 2018",
      desc: "Diseño y desarrollo de piezas gráficas y Motion Graphics para diversos programas de prensa de Televisión Nacional de Chile, destacándose especialmente el programa 24 Horas, que es el de mayor audiencia. También otras plataformas informativas, como Canal 24 Horas, dedicado a la cobertura de noticias en tiempo real las 24 horas del día, así como 24horas.cl, plataforma online del Departamento de Prensa.",
    },
    {
      role: "Diseño Gráfico Freelance",
      company: "Lynx Design",
      year: "2013 - Hoy",
      website: "https://www.instagram.com/lynxdesignfr/",
      desc: "Diseñadora de piezas gráficas editoriales para exposiciones en galerías de arte en Francia, Suiza, Londres y Nueva York, donde desarrollo materiales visuales que capturan la esencia de cada exhibición. El trabajo se centra en crear diseños que no solo complementan las obras expuestas, sino que también enriquecen la experiencia del visitante, asegurando que cada pieza gráfica refleje la temática y el estilo del evento artístico.",
    },
  ];

  const press = [
    {
      title: "Séptima versión de las Jornadas Internacionales de Diseño",
      media: "El Mercurio de Valparaíso",
      date: "Ver publicación",
      excerpt:
        "Reconocidos expositores del área de las artes, publicidad y comunicaciones asistieron a este evento. El cierre de estas conferencias estuvo marcado por los diseñadores. El mexicano Alejandro Magallanes expuso sobre sus escritos en la disciplina; los argentinos Gianina Manuele y Gustavo Mancini dieron a conocer su trabajo en lettering como una herramienta de innovación; y finalmente la chilena Stefania Carter, miembro del Departamento de Gráfica de Prensa en TVN.",
      image: "/assets/press/Press-01.webp",
    },
  ];

  const awards = [
    {
      name: 'Conferencista invitada: "Diseño Gráfico en la Televisión"',
      year: "2017",
      date: "Ver video",
      link: "https://www.youtube.com/watch?v=zj3HdS0bx6U",
    },
  ];

  return (
    <main className="about-page" id="about">
      <section className="about-hero" data-appear>
        <p className="about-hero-kicker">Studio Drolett</p>
        <h1 className="about-hero-title">Stefania Carter Drolett</h1>
      </section>

      {/* BIO + FOTO — ambos dentro del mismo layout */}
      <section className="about-bio-layout" data-appear>
        <div className="about-bio-text">
          <p>
            Diseñadora gráfica y especialista en motion graphics, con más de 15
            años de experiencia en diseño, comunicación audiovisual, animación y
            medios digitales. Su trabajo se sitúa en la intersección entre el
            diseño visual, la narrativa y el movimiento. A lo largo de su
            trayectoria ha desarrollado proyectos para televisión, educación,
            comunicación institucional y contenidos digitales, combinando
            pensamiento conceptual, lenguaje gráfico y una especial atención a
            la claridad y el ritmo de las imágenes.
          </p>
          <p>
            Inició su carrera profesional en 2014 y desde entonces ha trabajado
            en distintos contextos creativos, construyendo una mirada versátil
            que combina diseño gráfico y producción audiovisual. Durante más de
            cuatro años formó parte del departamento de prensa de Televisión
            Nacional de Chile (TVN), donde desarrolló piezas gráficas y motion
            graphics para contenidos informativos y de actualidad, trabajando en
            un entorno de producción rápida y con exigencias de entrega para
            televisión.
          </p>
          <p>
            También ha desarrollado proyectos para el ámbito educacional e
            institucional, incluyendo su trabajo en la Universidad Viña del Mar
            - Chile, donde participa en proyectos de motion graphics,
            postproducción audiovisual, comunicación digital y contenidos
            institucionales. Su experiencia abarca desde sistemas gráficos
            animados y piezas audiovisuales hasta tutoriales, campañas y
            contenidos destinados a comunicar información de manera clara y
            atractiva.
          </p>
          <p>
            En paralelo a su trayectoria en diseño y audiovisual, Carter ha
            ampliado sus competencias hacia el desarrollo digital. Completó su
            formación en Full Stack JavaScript, incorporando conocimientos de
            HTML, CSS, JavaScript, React, SQL y desarrollo backend. Esta
            formación le permite abordar el diseño desde una perspectiva más
            amplia, entendiendo también la tecnología y el desarrollo como parte
            de la experiencia visual y digital.
          </p>
          <p>
            Su práctica creativa también se extiende al arte abstracto, donde
            desarrolla una búsqueda más personal y experimental a través de la
            pintura. En sus obras explora el color, las formas, las texturas y
            el gesto como elementos capaces de comunicar sensaciones e ideas más
            allá de una representación figurativa. Esta dimensión artística
            constituye un espacio de exploración independiente de su trabajo
            profesional y forma parte de su identidad como creadora.
          </p>
          <p>
            Sus intereses abarcan el diseño, la tecnología, la educación, la
            historia, la creatividad, el medioambiente y el arte. Existe un
            especial interés por transformar información e ideas complejas en
            experiencias visuales simples, atractivas y fáciles de comprender,
            explorando las posibilidades del motion graphics, la narrativa
            digital y las nuevas tecnologías aplicadas a la creatividad. Desde
            Viña del Mar, desarrolla su práctica entre el diseño gráfico, el
            motion graphics, la postproducción audiovisual, el desarrollo
            digital y la creación artística, combinando más de una década de
            experiencia creativa con una constante búsqueda de aprendizaje,
            experimentación y nuevas formas de comunicación visual.
          </p>
        </div>

        <aside className="about-bio-photo">
          <img src="/assets/profile/profile-about.webp" alt="Stefania Carter" />
        </aside>
      </section>

      {/* EXPERIENCIA */}
      <section className="about-section" id="experience">
        <div className="about-section-left" data-appear>
          <div className="line"></div>
          <h2 className="section-title-muted">Experiencia</h2>
        </div>
        <div className="about-section-right">
          {workExperience.map((item, i) => (
            <details className="exp-item" key={`${item.company}-${i}`}>
              <summary>
                <div className="exp-head">
                  <p className="exp-role">{item.role}</p>
                  <p className="exp-company">{item.company}</p>
                </div>
                <span className="exp-plus">+</span>
                <span className="exp-year">{item.year}</span>
              </summary>
              <div className="exp-content">
                <p className="exp-desc">{item.desc}</p>
                {item.website && (
                  <p className="exp-more-info">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-more-info-link"
                    >
                      Ver sitio web ↗
                    </a>
                  </p>
                )}
              </div>
            </details>
          ))}

          {/* Link discreto a LinkedIn */}
          <p className="exp-more-info">
            Más info en{" "}
            <a
              href="https://www.linkedin.com/in/stefania-carter-drolett-739ab763/"
              target="_blank"
              rel="noopener noreferrer"
              className="exp-more-info-link"
            >
              LinkedIn ↗
            </a>
          </p>
        </div>
      </section>

      {/* PRENSA Y RECONOCIMIENTOS */}
      <section className="about-section" id="press">
        <div className="about-section-left" data-appear>
          <div className="line"></div>
          <h2 className="section-title-muted">Prensa y reconocimientos</h2>
        </div>
        <div className="about-section-right">
          {press.map((item, i) => (
            <details className="exp-item" key={`press-${i}`}>
              <summary>
                <div className="exp-head">
                  <p className="exp-role">{item.title}</p>
                  <p className="exp-company">{item.media}</p>
                </div>
                <span className="exp-plus">+</span>
                <span className="exp-year">{item.date}</span>
              </summary>

              <div className="press-content">
                <p className="exp-desc">{item.excerpt}</p>
                <button
                  type="button"
                  className="press-thumb"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Ver recorte de prensa en grande"
                >
                  <img src={item.image} alt={item.title} />
                </button>
              </div>
            </details>
          ))}

          {awards.map((item, i) => (
            <div className="exp-item" key={`award-${i}`}>
              <div className="exp-static-row">
                <div className="exp-head">
                  <p className="exp-role">{item.name}</p>
                  <p className="exp-company">{item.year}</p>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-link"
                  >
                    {item.date} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta" data-appear>
        <Link to="/contact" className="btn-more">
          Contactar ↗
        </Link>
      </section>

      {/* LIGHTBOX PRENSA */}
      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Cerrar"
          >
            Cerrar ✕
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={press[0].image} alt={press[0].title} />
            <div className="lightbox-info">
              <p className="lightbox-title">{press[0].title}</p>
              <p className="lightbox-meta">
                {press[0].media} · {press[0].date}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

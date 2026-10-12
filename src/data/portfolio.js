const BASE = "/assets/portfolio";

const pad = (n) => String(n).padStart(2, "0");

// gallery('2-cuadros', 'cuadros', 10) -> lista 01-cuadros.webp ... 10-cuadros.webp
const gallery = (folder, slug, count) =>
  Array.from(
    { length: count },
    (_, i) => `${BASE}/${folder}/${pad(i + 1)}-${slug}.webp`,
  );

// pic('1-cultura', 'cultura', 3) -> /assets/portfolio/1-cultura/03-cultura.webp
const pic = (folder, slug, n) => `${BASE}/${folder}/${pad(n)}-${slug}.webp`;

/* ------------------------------------------------------------
   ESTRUCTURA DE CADA PROYECTO
   ------------------------------------------------------------ */

// Atajos para las imágenes de cada proyecto
const cultura = (n) => pic("1-cultura", "cultura", n);
const cuadros = (n) => pic("2-cuadros", "cuadros", n);
const moda = (n) => pic("3-moda", "moda", n);
const campanaUvm = (n) => pic("4-campana-uvm", "campana-uvm", n);
const oficio = (n) => pic("16-oficio-cine", "oficio", n);
const exploradores = (n) => pic("5-exploradores", "exploradores", n);
const mandu = (n) => pic("6-mandu-gourmet", "mandu", n);
const theBest = (n) => pic("7-the-best", "the-best", n);
const aviadora = (n) => pic("8-still-aviadora", "aviadora", n);
const loCurro = (n) => pic("9-lo-curro", "locurro", n);
const bigApple = (n) => pic("10-big-apple", "bigapple", n);
const lynx = (n) => {
  const num = String(n).padStart(2, "0");
  const ext = n === 2 ? "gif" : "webp";
  return `/assets/portfolio/11-lynx-design/${num}-lynx.${ext}`;
};
const max = (n) => pic("12-serigrafia-max", "max", n);
const seagull = (n) => pic("13-seagull", "seagull", n);
const lafete = (n) => pic("14-lafete", "lafete", n);
const entreLibros = (n) => pic("15-entre-libros", "entre-libros", n);

const portfolio = [
  // ============================================================
  // 1. CULTURA 24 (tiene video)
  // ============================================================
  {
    id: 1,
    slug: "cultura",
    title: "Cultura 24",
    cover: cultura(1),
    category: "Motion Graphics",
    preview: "/assets/portfolio/1-cultura/preview.mp4",
    year: "2017",
    description:
      "Cortina de presentación para la sección Cultura 24, del canal 24 Horas de Televisión Nacional de Chile.",
    featured: true,
    video: {
      url: "https://www.youtube.com/watch?v=QiM6RDfB0HI",
      title: "Cortina Cultura 24",
    },
    intro: [
      "La cortina de presentación para la sección Cultura 24, diseñada por Stefania Carter Drolett para el canal 24 Horas de Televisión Nacional de Chile, es una pieza gráfica que destaca por su enfoque moderno y su conexión con la identidad cultural chilena.",
      "Utilizando técnicas de motion graphics y animación 2D, la propuesta combina elementos visuales que evocan la riqueza artística del país, integrando referencias a la poesía y otros aspectos culturales.",
    ],
    info: {
      client: "Televisión Nacional de Chile · 24 Horas",
      role: "Diseño y animación de la cortina, con motion graphics y animación 2D.",
      skills: ["Dirección artística", "Collage"],
      tools: ["After Effects", "Illustrator", "Photoshop"],
    },
    images: gallery("1-cultura", "cultura", 5),
    blocks: [
      { type: "image", src: cultura(1) },
      { type: "grid", columns: 2, images: [cultura(2), cultura(3)] },
      { type: "image", src: cultura(4) },
      { type: "image", src: cultura(5) },
    ],
  },

  // ============================================================
  // 2. 24 CUADROS POR SEGUNDO (tiene video)
  // ============================================================
  {
    id: 2,
    slug: "cuadros",
    title: "24 cuadros por Segundo",
    cover: cuadros(6),
    category: "Motion Graphics",
    preview: "/assets/portfolio/2-cuadros/preview.mp4",
    year: "2018",
    description:
      "Rebranding visual para el programa 24 Cuadros del canal 24 Horas de TVN, dedicado al cine y los estrenos.",
    featured: true,
    video: {
      url: "https://www.youtube.com/watch?v=7Zz8PQFK8fQ",
      title: "Cortina de presentación",
    },
    intro: [
      "La propuesta de rebranding para el programa 24 Cuadros del canal 24 Horas de TVN, desarrollada por Stefania Carter Drolett, presenta una renovación visual que moderniza la identidad del espacio televisivo dedicado al cine y los estrenos.",
      "El rediseño incluye una nueva cortina de presentación, separadores y style frames, que aportan dinamismo y coherencia gráfica al programa.",
      "La actualización busca reflejar la evolución del contenido y conectar con una audiencia contemporánea, manteniendo la esencia informativa y cultural del espacio.",
    ],
    info: {
      client: "TVN · Canal 24 Horas",
      role: "Dirección artística, gráficos animados y desarrollo de marcas.",
      skills: ["Dirección artística", "Gráficos animados", "Marcas"],
      tools: ["After Effects", "Illustrator", "Photoshop"],
    },
    images: gallery("2-cuadros", "cuadros", 10),
    blocks: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=3bO5lV5UjIk",
        title: "Separadora",
      },
      { type: "grid", columns: 2, images: [cuadros(1), cuadros(2)] },
      { type: "grid", columns: 2, images: [cuadros(3), cuadros(4)] },
      { type: "grid", columns: 2, images: [cuadros(5), cuadros(6)] },
      { type: "grid", columns: 2, images: [cuadros(7), cuadros(8)] },
      { type: "grid", columns: 2, images: [cuadros(9), cuadros(10)] },
    ],
  },

  // ============================================================
  // 3. PROMO MODA (tiene video)
  // ============================================================
  {
    id: 3,
    slug: "moda",
    title: "Promo Moda",
    cover: moda(10),
    category: "Motion Graphics",
    preview: "/assets/portfolio/3-moda/preview.mp4",
    year: "2018",

    description:
      "Cortina de presentación para la sección de moda del canal 24 Horas de TVN, con animación 2D y efecto scribble.",
    featured: true,
    video: {
      url: "https://www.youtube.com/watch?v=FpSgh9xXFsg",
      title: "Cortina de presentación",
    },
    intro: [
      "El proyecto Moda, desarrollado por Stefania Carter Drolett para Televisión Nacional de Chile (TVN), presenta una cortina de presentación dinámica y contemporánea para la sección de moda del canal 24 Horas.",
      "Utilizando técnicas de animación 2D y el efecto scribble, la pieza gráfica aporta una estética fresca y moderna que refleja la creatividad y el estilo del contenido.",
      "La combinación de elementos visuales dibujados a mano con animaciones digitales crea una identidad visual distintiva que capta la atención del espectador y refuerza la temática de moda del programa.",
    ],
    info: {
      client: "TVN · Canal 24 Horas",
      role: "Diseño gráfico, gráficos animados y animación.",
      skills: ["Diseño gráfico", "Gráficos animados", "Animación"],
      tools: ["After Effects"],
    },
    images: gallery("3-moda", "moda", 14),
    blocks: [
      { type: "grid", columns: 2, images: [moda(1), moda(2)] },
      { type: "grid", columns: 2, images: [moda(3), moda(4)] },
      { type: "grid", columns: 2, images: [moda(5), moda(6)] },
      { type: "grid", columns: 2, images: [moda(7), moda(8)] },
      { type: "grid", columns: 2, images: [moda(9), moda(10)] },
      { type: "grid", columns: 2, images: [moda(11), moda(12)] },
      { type: "grid", columns: 2, images: [moda(13), moda(14)] },
    ],
  },

  // ============================================================
  // 4. CAMPAÑA UVM 2020 (tiene video)
  // ============================================================
  {
    id: 4,
    slug: "campana-uvm",
    title: "Campaña UVM 2020",
    cover: campanaUvm(1),
    category: "Campaña",
    preview: "/assets/portfolio/4-campana-uvm/preview.mp4",
    year: "2020",

    description:
      "Postproducción y adaptación de piezas digitales y gráficas para la estrategia de medios masivos de la Universidad Viña del Mar.",
    featured: false,
    video: {
      url: "https://www.youtube.com/watch?v=jKt3AobRvLU",
      title: "Video 1",
    },
    intro: [
      "Campaña digital para la Admisión 2020 de la Universidad Viña del Mar, bajo la frase Conectamos tu pasión al éxito.",
      "El proyecto incluyó postproducción y adaptación de piezas digitales y gráficas para una estrategia de medios masivos. En soportes que van desde vía pública y metro hasta cine, televisión y prensa escrita, cada pieza fue optimizada según su formato.",
    ],
    info: {
      client: "Universidad Viña del Mar",
      role: "Postproducción y adaptación de piezas para múltiples soportes.",
      skills: [
        "Postproducción",
        "Adaptación multiplataforma",
        "Diseño gráfico",
      ],
      tools: ["After Effects", "Premiere", "Photoshop", "Illustrator"],
    },
    images: gallery("4-campana-uvm", "campana-uvm", 2),
    blocks: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=Fp-2d8FMoUw",
        title: "Video 2",
      },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=krRg2I9DFDE",
        title: "Video 3",
      },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=n7liRAgFdB4",
        title: "Video 4",
      },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=GeNiuGm7yok",
        title: "Video 5",
      },
      { type: "image", src: campanaUvm(1) },
      { type: "image", src: campanaUvm(2) },
    ],
  },
  // ============================================================
  // 16. EL OFICIO DEL CINE
  // ============================================================
  {
    id: 16,
    slug: "oficio-del-cine",
    title: "El Oficio del Cine",
    cover: oficio(7),
    category: "Motion Graphics",
    preview: "/assets/portfolio/16-oficio-cine/preview.mp4",
    year: "2021",
    description:
      "Identidad visual y motion graphics para el programa de TVN que destaca la labor detrás de la industria cinematográfica.",
    featured: true,
    video: {
      url: "https://www.youtube.com/watch?v=p7c6w-xROZ4",
      title: "Teaser El Oficio del Cine",
    },
    intro: [
      "El proyecto El Oficio del Cine, desarrollado para Televisión Nacional de Chile, es una propuesta de diseño gráfico que busca destacar la labor detrás de la industria cinematográfica.",
      "A través de una estética sobria y profesional, se presenta una identidad visual coherente que resalta la importancia del cine nacional y sus protagonistas.",
      "La composición visual y el uso de elementos gráficos refuerzan el carácter informativo y cultural del programa, ofreciendo una experiencia visual atractiva y alineada con los valores de TVN.",
    ],
    info: {
      client: "TVN (Televisión Nacional de Chile)",
      role: "Diseño gráfico y animación.",
      skills: ["Motion Graphics", "Diseño gráfico", "Dirección de arte"],
      tools: ["After Effects", "Illustrator", "Photoshop"],
      team: [
        "Conducción: Andrea Arístegui",
        "Edición: Sebastián González, Alan Carvajal",
        "Realización Audiovisual: Ida Miranda",
        "Diseño y animación: Stefania Carter",
      ],
    },
    images: Array.from({ length: 7 }, (_, i) => oficio(i + 1)),
    blocks: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=dl6Xel-w3CQ",
        title: "Cortina de presentación",
      },
      { type: "grid", columns: 2, images: [oficio(2), oficio(3)] },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=LTUDWe_-jhw",
        title: 'Poster para película "La Nana"',
      },
      { type: "grid", columns: 2, images: [oficio(4), oficio(5)] },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=snB0Ss4b1JQ",
        title: 'Fotos backstage "Karadima"',
      },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=bM_ZitzQgLo",
        title: 'Collage película "Karadima"',
      },
      { type: "grid", columns: 2, images: [oficio(6), oficio(7)] },
    ],
  },
  // ============================================================
  // 5. EXPLORADORES (tiene video)
  // ============================================================
  {
    id: 5,
    slug: "exploradores",
    title: "Exploradores",
    cover: exploradores(1),
    category: "Motion Graphics",
    preview: "/assets/portfolio/5-exploradores/preview.mp4",
    year: "2018",
    description:
      "Identidad visual y gráfica animada para el programa científico Exploradores de TVN.",
    featured: false,
    video: {
      url: "https://www.youtube.com/watch?v=1X_9phiUEzc",
      title: "Opener Programa",
    },
    intro: [
      "El proyecto Exploradores: del Átomo al Cosmos, desarrollado para Televisión Nacional de Chile (TVN), es una propuesta de diseño gráfico y motion graphics que da identidad visual al programa científico del mismo nombre.",
      "La propuesta busca acercar la ciencia al público general, destacando la investigación y los avances en áreas como biomedicina, ingeniería, innovación y astronomía, mediante una presentación visual atractiva y coherente con la temática del programa.",
      "A través de una estética moderna y dinámica, la gráfica incluye elementos como cortina de presentación, separadoras y gc, que reflejan el espíritu de exploración y descubrimiento del programa.",
    ],
    info: {
      client: "TVN (Televisión Nacional de Chile)",
      role: "Diseño gráfico, animación y dirección artística.",
      skills: ["Animación", "Dirección artística", "Marcas"],
      tools: ["Photoshop", "After Effects"],
    },
    images: gallery("5-exploradores", "exploradores", 13),
    blocks: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=XyEFT9GQDJw",
        title: "Cortina de Presentación",
      },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=DTCyFlWN3oo",
        title: "Separadora",
      },
      { type: "grid", columns: 2, images: [exploradores(1), exploradores(2)] },
      { type: "grid", columns: 2, images: [exploradores(3), exploradores(4)] },
      { type: "grid", columns: 2, images: [exploradores(5), exploradores(6)] },
      { type: "grid", columns: 2, images: [exploradores(7), exploradores(8)] },
      { type: "grid", columns: 2, images: [exploradores(9), exploradores(10)] },
      {
        type: "grid",
        columns: 2,
        images: [exploradores(11), exploradores(12)],
      },
      { type: "image", src: exploradores(13) },
    ],
  },

  // ============================================================
  // 6. MANDÚ GOURMET (sin video — primera imagen movida a hero)
  // ============================================================
  {
    id: 6,
    slug: "mandu",
    title: "Mandu Gourmet",
    cover: mandu(1),
    category: "Rebranding",
    year: "2021",
    description:
      "Rediseño de marca para Mandu Gourmet: una propuesta visual contemporánea para la empresa de catering y café gourmet.",
    featured: false,
    intro: [
      "El proyecto de rediseño de marca para Mandu Gourmet, realizado por Stefania Carter Drolett, presenta una propuesta visual contemporánea que revitaliza la identidad de esta empresa de catering y café gourmet.",
      "El rediseño incluye un logotipo elegante y una paleta de colores sobria que reflejan la calidad y sofisticación del servicio. Los elementos gráficos y mockups aplicados en diversos soportes, como packaging y material promocional, demuestran coherencia y atención al detalle, consolidando una imagen de marca profesional y atractiva.",
    ],
    info: {
      client: "Mandu Gourmet",
      role: "Rebranding e identidad visual.",
      skills: ["Identidad visual", "Diseño gráfico"],
      tools: ["Illustrator", "Photoshop"],
    },
    images: gallery("6-mandu-gourmet", "mandu", 11),
    blocks: [
      { type: "grid", columns: 2, images: [mandu(2), mandu(3)] },
      { type: "grid", columns: 2, images: [mandu(4), mandu(5)] },
      { type: "grid", columns: 2, images: [mandu(6), mandu(7)] },
      { type: "grid", columns: 2, images: [mandu(8), mandu(9)] },
      { type: "grid", columns: 2, images: [mandu(10), mandu(11)] },
    ],
  },

  // ============================================================
  // 7. THE BEST (tiene video)
  // ============================================================
  {
    id: 7,
    slug: "the-best",
    title: "Videowall The Best",
    cover: theBest(3),
    category: "Motion Graphics",
    preview: "/assets/portfolio/7-the-best/preview.mp4",
    year: "2021",
    description:
      "Videowall para los finalistas del premio The Best FIFA Football Awards, desarrollado para el noticiero 24 Horas, Deporte de TVN.",
    featured: false,
    video: {
      url: "https://www.youtube.com/watch?v=XVnlBtTpRV0",
      title: "Videowall | Finalistas Premio The Best",
    },
    intro: [
      "Videowall, Finalistas Premio The Best, desarrollado por Stefania Carter Drolett para el noticiero 24 Horas, Deportes de Televisión Nacional de Chile, es una pieza de motion graphics diseñada para presentar a los nominados al premio The Best FIFA Football Awards.",
      "La propuesta destaca por su estética dinámica y moderna, utilizando animaciones y elementos visuales que capturan la emoción y la importancia del evento deportivo.",
      "La gráfica animada se integra de manera efectiva en el videowall del estudio, ofreciendo una experiencia visual impactante y alineada con la identidad del programa.",
    ],
    info: {
      client: "TVN · 24 Horas Deporte",
      role: "Diseño y animación de videowall.",
      skills: ["Motion Graphics", "Dirección artística"],
      tools: ["After Effects", "Photoshop"],
    },
    images: gallery("7-the-best", "the-best", 3),
    blocks: [
      { type: "image", src: theBest(1) },
      { type: "grid", columns: 2, images: [theBest(2), theBest(3)] },
    ],
  },

  // ============================================================
  // 8. STILL AVIADORA (sin video — primera imagen movida a hero)
  // ============================================================
  {
    id: 8,
    slug: "aviadora",
    title: "Still Aviadora",
    cover: aviadora(1),
    category: "Ilustración Digital",
    year: "2021",
    description:
      "Gráfica estática para el videowall del noticiero 24 Horas de TVN, inspirada en el misterio de la aviadora Amelia Earhart.",
    featured: false,
    intro: [
      "Propuesta de diseño gráfico para el noticiero 24 Horas de Televisión Nacional de Chile, desarrollado por Stefania Carter Drolett.",
      "La pieza se centra en la creación de una imagen estática para el videowall del estudio de televisión, utilizando técnicas de ilustración digital y composición visual.",
      "La gráfica está inspirada en la noticia sobre el misterio de la aviadora Amelia Earhart, desaparecida en 1937, y busca transmitir la atmósfera de intriga y exploración asociada a este tema.",
      "La propuesta destaca por su estética moderna y su capacidad para complementar la narrativa del noticiero, aportando un valor visual significativo al espacio televisivo.",
    ],
    info: {
      client: "TVN · 24 Horas",
      role: "Diseño gráfico e ilustración digital.",
      skills: ["Ilustración digital", "Composición visual"],
      tools: ["Photoshop"],
    },
    images: gallery("8-still-aviadora", "aviadora", 2),
    blocks: [{ type: "image", src: aviadora(2) }],
  },

  // ============================================================
  // 9. LO CURRO (tiene video)
  // ============================================================
  {
    id: 9,
    slug: "lo-curro",
    title: "Portadas Crimen Lo Curro",
    cover: loCurro(1),
    category: "Motion Graphics",
    preview: "/assets/portfolio/9-lo-curro/preview.mp4",
    year: "2021",
    description:
      "Gráfica para el reportaje de TVN que revisita, dos décadas después, el homicidio ocurrido en Lo Curro, Santiago.",
    featured: false,
    video: {
      url: "https://www.youtube.com/watch?v=s4I01NbX94w",
      title: "Portada de prensa",
    },
    intro: [
      "El proyecto Portadas Crimen Lo Curro, desarrollado por Stefania Carter Drolett para Reportajes 24 de Televisión Nacional de Chile (TVN), la gráfica fue diseñada para acompañar un reportaje que, dos décadas después, revisita el homicidio de un menor de 9 años ocurrido en el sector de Lo Curro, Santiago.",
      "La composición visual utiliza elementos gráficos que evocan la estética de la prensa escrita, integrando texturas, tipografías y paletas de colores que refuerzan la narrativa periodística del reportaje. La animación se presenta de manera fluida y coherente, aportando dinamismo sin distraer del contenido principal.",
      "Este trabajo demuestra la capacidad del motion graphics para enriquecer la narrativa audiovisual en contextos informativos, aportando una dimensión estética que complementa y potencia el relato periodístico.",
    ],
    info: {
      client: "TVN · Reportajes 24",
      role: "Diseño gráfico y motion graphics para reportaje.",
      skills: ["Motion Graphics", "Diseño editorial", "Dirección artística"],
      tools: ["After Effects", "Photoshop"],
    },
    images: gallery("9-lo-curro", "locurro", 5),
    blocks: [
      { type: "image", src: loCurro(1) },
      { type: "grid", columns: 2, images: [loCurro(2), loCurro(3)] },
      { type: "grid", columns: 2, images: [loCurro(4), loCurro(5)] },
    ],
  },

  // ============================================================
  // 10. BIG APPLE (sin video — primera imagen movida a hero)
  // ============================================================
  {
    id: 10,
    slug: "big-apple",
    title: "Big Apple Learning",
    cover: bigApple(1),
    category: "Identidad Visual",
    year: "2021",
    description:
      "Diseño de logotipo e identidad visual para una escuela de inglés para niños en Francia.",
    featured: false,
    intro: [
      "Big Apple Learning. Diseño de logotipo para una escuela de inglés dirigida a niños en Francia.",
      "La identidad visual se desarrolló con un enfoque simple, cercano y lúdico, buscando conectar con familias bilingües que desean fortalecer la gramática y escritura en inglés de sus hijos a través de clases personalizadas.",
      "El concepto del logotipo incorpora la manzana y el skyline, una referencia directa al origen de los fundadores de la escuela —norteamericanos de Nueva York—, reforzando así la autenticidad y el vínculo cultural con el idioma.",
    ],
    info: {
      client: "Big Apple Learning",
      role: "Diseño de logotipo e identidad visual.",
      skills: ["Identidad visual", "Diseño de logotipo", "Ilustración"],
      tools: ["Illustrator", "Photoshop"],
    },
    images: gallery("10-big-apple", "bigapple", 7),
    blocks: [
      { type: "grid", columns: 2, images: [bigApple(2), bigApple(3)] },
      { type: "grid", columns: 2, images: [bigApple(4), bigApple(5)] },
      { type: "grid", columns: 2, images: [bigApple(6), bigApple(7)] },
    ],
  },

  // ============================================================
  // 11. LYNX DESIGN (sin video — primera imagen movida a hero)
  // ============================================================
  {
    id: 11,
    slug: "lynx-design",
    title: "Lynx Design",
    cover: lynx(3),
    category: "Identidad Visual",
    year: "2013",
    description:
      "Identidad visual para el estudio de diseño de iluminación y mobiliario Lynx Design, con base en Francia.",
    featured: false,
    intro: [
      "El proyecto Lynx Design, desarrollado por la diseñadora Stefania Carter Drolett, es una propuesta de identidad visual para el innovador estudio de diseño de iluminación y muebles Lynx Design, creado por el talentoso diseñador chileno-estadounidense Claudio González. Con base en Francia, Lynx Design se ha destacado por su enfoque en la creación de piezas únicas que fusionan lo moderno con lo artesanal, lo funcional con lo estético.",
      "La propuesta gráfica abarca desde el diseño de un logotipo elegante y sofisticado hasta una paleta cromática cuidadosamente seleccionada, que evoca la exclusividad y calidad premium de la marca. La tipografía y los elementos visuales fueron pensados para destacar tanto la modernidad como la herencia cultural de las piezas, sin perder de vista el enfoque minimalista que caracteriza al estudio.",
      "El proyecto no solo busca crear una identidad visual que represente su alta calidad en diseño de iluminación y mobiliario, sino también transmitir el carácter artesanal de cada pieza, elaborada en colaboración con artesanos de renombre de lugares como Francia, Italia, Suiza y Nueva York. Las colecciones de Lynx Design han sido exhibidas en prestigiosas boutiques de ciudades como Londres, París, Suiza y Nueva York, lo que refuerza aún más la importancia de una identidad gráfica sólida y de alta gama.",
      "Este rediseño busca destacar la esencia de Lynx Design en un mercado global, conectando con una audiencia exigente que valora tanto la innovación como el arte de la manufactura. La propuesta de Stefania Carter Drolett captura la atmósfera de lujo, elegancia y sofisticación que define al estudio de Claudio González.",
    ],
    info: {
      client: "Lynx Design",
      role: "Diseño de identidad visual y logotipo.",
      skills: ["Identidad visual", "Diseño de logotipo", "Dirección de arte"],
      tools: ["Illustrator", "Photoshop", "InDesign"],
    },
    images: gallery("11-lynx-design", "lynx", 12),
    blocks: [
      { type: "grid", columns: 2, images: [lynx(2), lynx(3)] },
      { type: "grid", columns: 2, images: [lynx(4), lynx(5)] },
      { type: "grid", columns: 2, images: [lynx(6), lynx(7)] },
      { type: "grid", columns: 2, images: [lynx(8), lynx(9)] },
      { type: "grid", columns: 2, images: [lynx(10), lynx(11)] },
      { type: "image", src: lynx(12) },
    ],
  },

  // ============================================================
  // 12. SERIGRAFÍA MAX (tiene video)
  // ============================================================
  {
    id: 12,
    slug: "serigrafia-max",
    title: "Serigrafía Proyecto Max",
    cover: max(6),
    category: "Serigrafía",
    preview: "/assets/portfolio/12-serigrafia-max/preview.mp4",
    year: "2021",
    description:
      "Serigrafía creada en homenaje a Max, mi querido perro. Un tributo visual y personal a través del estampado.",
    featured: false,
    video: {
      url: "https://www.youtube.com/watch?v=TUnK4bXYj9c",
      title: "Proceso de Serigrafía",
    },
    intro: [
      "El proyecto Serigrafía Proyecto Max es una pieza muy personal de Stefania Carter Drolett, creada en homenaje a su perro Max. A través de esta serigrafía, Stefania ha querido rendir tributo a su fiel compañero, utilizando la técnica del estampado.",
      "La obra no solo es un tributo visual, sino un proceso catártico de recordar y mantener vivo el espíritu de Max en la creación artística.",
      "Este homenaje a través del arte se convierte en un reflejo del amor incondicional y la importancia de los animales en nuestras vidas.",
    ],
    info: {
      client: "Proyecto personal",
      role: "Serigrafía y diseño.",
      skills: ["Serigrafía", "Ilustración", "Estampado"],
      tools: ["Serigrafía", "Illustrator", "Photoshop"],
    },
    images: Array.from({ length: 9 }, (_, i) => max(i + 1)),
    blocks: [
      { type: "image", src: max(1) },
      { type: "grid", columns: 2, images: [max(2), max(3)] },
      { type: "grid", columns: 2, images: [max(4), max(5)] },
      { type: "grid", columns: 2, images: [max(6), max(7)] },
      { type: "grid", columns: 2, images: [max(8), max(9)] },
    ],
  },

  // ============================================================
  // 13. SEAGULL (sin video — primera imagen movida a hero)
  // ============================================================
  {
    id: 13,
    slug: "seagull",
    title: "Seagull Tour & Travel",
    cover: seagull(1),
    category: "Identidad Visual",
    year: "2022",
    description:
      "Identidad visual para Seagull Tour & Travel, una propuesta de turismo local por los lugares históricos de Viña del Mar, Chile.",
    featured: false,
    intro: [
      "Seagull Tour & Travel surge como una propuesta fresca y dinámica en el ámbito del turismo local, enfocada en ofrecer experiencias únicas por los lugares más atractivos e históricos de Viña del Mar, Chile.",
      "Inspirada en la libertad y elegancia de las gaviotas, símbolo característico de la costa chilena, la identidad visual y conceptual de SEAGULL transmite una fuerte conexión con el mar, la historia y el espíritu explorador de sus visitantes.",
      "La marca destaca por su estética moderna y profesional, utilizando una paleta de colores costeros que evocan tranquilidad, aventura y cercanía con la naturaleza. El logotipo, que integra de forma armónica elementos marítimos, refleja movimiento y libertad, reforzando la idea de un viaje enriquecedor por esta emblemática ciudad.",
      "Los recorridos propuestos combinan hitos históricos, patrimonio arquitectónico y rincones poco conocidos, diseñados para generar una experiencia turística memorable, tanto para visitantes nacionales como internacionales.",
    ],
    info: {
      client: "Seagull Tour & Travel",
      role: "Diseño de identidad visual y conceptual.",
      skills: ["Identidad visual", "Diseño de logotipo", "Branding"],
      tools: ["Illustrator", "Photoshop"],
    },
    images: Array.from({ length: 9 }, (_, i) => seagull(i + 1)),
    blocks: [
      { type: "grid", columns: 2, images: [seagull(2), seagull(3)] },
      { type: "grid", columns: 2, images: [seagull(4), seagull(5)] },
      { type: "grid", columns: 2, images: [seagull(6), seagull(7)] },
      { type: "grid", columns: 2, images: [seagull(8), seagull(9)] },
    ],
  },

  // ============================================================
  // 14. LAFÊTE (sin video — primera imagen movida a hero)
  // ============================================================
  {
    id: 14,
    slug: "lafete",
    title: "Packaging La Fête Chocolat",
    cover: lafete(1),
    category: "Packaging",
    year: "2023",
    description:
      "Propuesta de packaging para La Fête Chocolat, presentada a concurso. Cada empaque es una obra de arte abstracto de Stefania Carter Drolett.",
    featured: false,
    intro: [
      "Este proyecto de packaging para La Fête Chocolat es una propuesta de diseño presentada a concurso por la tienda de chocolates, con el objetivo de renovar la imagen de una línea especial de productos.",
      "La diseñadora y artista Stefania Carter Drolett fusiona el arte abstracto con el diseño gráfico, creando empaques que destacan por su estética sofisticada, expresiva y contemporánea. Cada envoltorio se convierte en una obra visual única, alineada con el carácter gourmet y exclusivo de la marca.",
      "La propuesta no solo busca impactar en el punto de venta, sino también posicionar el chocolate como una experiencia sensorial y artística desde el primer contacto visual.",
      "Propuestas de Packaging: Nueva línea de Chocolates La Fête. Cada propuesta son obras originales de la artista Stefania Carter Drolett.",
    ],
    info: {
      client: "La Fête Chocolat",
      role: "Diseño de packaging y dirección de arte.",
      skills: ["Packaging", "Arte abstracto", "Diseño gráfico"],
      tools: ["Illustrator", "Photoshop"],
    },
    images: Array.from({ length: 5 }, (_, i) => lafete(i + 1)),
    blocks: [
      { type: "grid", columns: 2, images: [lafete(2), lafete(3)] },
      { type: "grid", columns: 2, images: [lafete(4), lafete(5)] },
    ],
  },
  // ============================================================
  // 15. ENTRE LIBROS (Proyecto Fullstack)
  // ============================================================
  {
    id: 15,
    slug: "entre-libros",
    title: "Entre Libros Website",
    cover: entreLibros(1),
    category: "Full Stack",
    year: "2026",
    description:
      "E-commerce de librería con catálogo, carrito de compras, gestión de usuarios y panel de administración. Proyecto de título full stack.",
    featured: false,
    links: [
      {
        label: "Ver demo en vivo",
        url: "https://entre-libros.onrender.com/",
      },
      {
        label: "Ver código en GitHub",
        url: "https://github.com/tonyo-psijas/libreria-entre-libros",
      },
      {
        label: "Ver diseño en Figma",
        url: "https://www.figma.com/design/UeAgKmws47qvwXiesjViE7/Libreria?node-id=0-1&p=f",
      },
    ],
    intro: [
      "Entre Libros es un e-commerce de librería desarrollado como proyecto de título full stack en colaboración con dos compañeros. El sitio incluye catálogo de libros, cómics y mangas, sistema de preventas, carrito de compras, autenticación de usuarios y panel de administración para la gestión de inventario y pedidos.",
      "El proyecto fue desarrollado con React y Vite en el frontend, Node.js y Express en el backend, y PostgreSQL como base de datos. Se trabajó con metodologías ágiles, control de versiones en Git y GitHub, y despliegue en Render. La arquitectura sigue un modelo cliente-servidor con API REST.",
      "Mi rol en el equipo se enfocó principalmente en el diseño de la interfaz, la experiencia de usuario, el diseño responsive y la integración frontend. El proyecto representa mi transición desde el diseño gráfico tradicional hacia el desarrollo web full stack.",
    ],
    info: {
      client: "Proyecto de título · Desafío Latam",
      role: "Diseño UI/UX, integración frontend y arquitectura de la información.",
      skills: [
        "Desarrollo Full Stack",
        "UI/UX Design",
        "API REST",
        "Responsive Design",
      ],
      tools: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Figma"],
      team: ["Stefania Carter Drolett", "Antonio Psijas", "Orlando Monagas"],
    },
    images: Array.from({ length: 8 }, (_, i) => entreLibros(i + 1)),
    blocks: [
      { type: "grid", columns: 2, images: [entreLibros(2), entreLibros(3)] },
      { type: "grid", columns: 2, images: [entreLibros(4), entreLibros(5)] },
      { type: "grid", columns: 2, images: [entreLibros(6), entreLibros(7)] },
    ],
  },
].map((item) => ({ ...item, cover: item.cover || item.images[0] }));

export const getBySlug = (slug) => portfolio.find((item) => item.slug === slug);
export const getFeatured = () => portfolio.filter((item) => item.featured);

export default portfolio;

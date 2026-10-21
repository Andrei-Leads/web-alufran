// Demo de Alufran Aluminios (ALUFRAN C.B., Leganés) sobre carpinteria-metalica-1 «Medida».
// Datos: hoja «Alufran · datos» (Drive), ficha de Google y su web actual (alufranaluminios.com).
// Fotos: las del propietario en su ficha de Google (catalogo.json en andrei-leads-scraper/data/fotos/).
// DEMO con el móvil real del negocio (decisión de Ysst); seo.indexar sin activar.
// Sin precios, marcas ni acreditaciones: no hay datos validados por el cliente.
import { defineSiteConfig } from "@andrei-leads/core";

const f = (archivo: string) => `/fotos/${archivo}.jpg`;

export default defineSiteConfig({
  negocio: {
    nombre: "Alufran Aluminios",
    nombreLegal: "ALUFRAN C.B.",
    nif: "E85427334",
    sector: "Carpintería de aluminio",
    descripcionCorta:
      "Ventanas, cerramientos, puertas, rejas y armarios de aluminio a medida. Taller propio y más de 25 años de oficio.",
    anioFundacion: 2008,
    tipoSchema: ["HomeAndConstructionBusiness"],
  },
  contacto: {
    telefono: "+34625954888", // Móvil del negocio (también fijo +34913418681)
    whatsapp: "+34625954888", // Su web lo da como contacto; WhatsApp sin comprobar
    email: "aluminios.alufran@gmail.com",
    direccion: { calle: "C. Puerto de Navafría, 32", cp: "28919", ciudad: "Leganés", provincia: "Madrid" },
    horario: [
      { dias: ["lunes", "martes", "miercoles", "jueves"], abre: "09:00", cierra: "20:00" },
      { dias: ["viernes"], abre: "09:00", cierra: "13:30" },
    ],
    coordenadas: { lat: 40.3494959, lng: -3.7301481 },
    mensajeWhatsapp: "Hola, os escribo desde vuestra web. Quiero presupuesto para:",
    fichaGoogle: "https://www.google.com/maps/place/?q=place_id:ChIJ4enkXEInQg0R2Z6toJMxtLs",
  },
  zonas: ["Leganés"],
  valoracion: { media: 4.9, total: 72 },
  imagenesHero: [
    {
      src: f("003-puerta-de-entrada-blanca-y-reja-de-arcos-en-porche"),
      alt: "Puerta de entrada de aluminio blanco junto a una reja blanca de arcos en un porche de ladrillo",
    },
  ],
  servicios: [
    {
      titulo: "Ventanas de aluminio",
      descripcion: "Ventanas a medida que aíslan del frío, del calor y del ruido.",
      contenido: [
        "Fabricamos e instalamos ventanas de aluminio a medida de cada hueco, pensando en el aislamiento térmico y acústico de tu casa.",
        "Te ayudamos a elegir la apertura que mejor te viene: corredera, abatible, oscilobatiente o basculante.",
      ],
      incluye: ["Medición", "Fabricación en nuestro taller", "Retirada de la ventana vieja", "Instalación"],
      imagenes: [
        { src: f("012-ventanas-oscilobatientes-blancas-en-un-salon-en-obra"), alt: "Ventanas oscilobatientes de aluminio blanco recién instaladas en un salón" },
        { src: f("028-ventana-de-aluminio-blanco-con-vidrio-translucido"), alt: "Ventana de aluminio blanco con vidrio translúcido recién instalada" },
      ],
      mensajeWhatsapp: "Hola, quiero presupuesto para cambiar ventanas. Os cuento cuántas y de qué tamaño:",
    },
    {
      titulo: "Cerramientos de terraza y balcón",
      descripcion: "Cerramos tu terraza o tu balcón en aluminio para ganar un espacio protegido y aislado.",
      contenido: [
        "Un cerramiento bien hecho convierte la terraza en una habitación más: sin frío en invierno, sin polvo y con menos ruido de la calle.",
        "Venimos a medir, te explicamos las opciones (correderas, plegables, con persiana) y lo fabricamos a medida en nuestro taller.",
      ],
      incluye: ["Medición en tu casa", "Asesoramiento sobre apertura y vidrio", "Fabricación a medida", "Instalación"],
      imagenes: [
        { src: f("009-cerramiento-de-balcon-con-correderas-y-persianas"), alt: "Balcón cerrado con ventanas correderas de aluminio blanco y persianas" },
        { src: f("006-cerramiento-plegable-de-cristal-montado-en-el-taller"), alt: "Cerramiento plegable de cristal y aluminio blanco montado en el taller" },
      ],
      mensajeWhatsapp: "Hola, quiero cerrar mi terraza o balcón. Os envío fotos y medidas aproximadas:",
    },
    {
      titulo: "Puertas de entrada y portales",
      descripcion: "Puertas de aluminio para viviendas y cerramientos de portal para comunidades.",
      contenido: [
        "Hacemos puertas de entrada de aluminio en blanco, marrón o negro, y cerramos portales y soportales con aluminio y vidrio.",
      ],
      incluye: ["Medición", "Fabricación a medida", "Instalación"],
      imagenes: [
        { src: f("005-cerramiento-acristalado-de-portal-con-puerta-de"), alt: "Entrada de portal cerrada con carpintería de aluminio blanco y vidrio entre columnas" },
        { src: f("024-puerta-de-portal-de-aluminio-blanco-con-montante"), alt: "Puerta de portal de aluminio blanco acristalada entre dos columnas" },
        { src: f("057-puerta-doble-de-portal-en-aluminio-marron"), alt: "Puerta doble de aluminio marrón con tiradores largos en un portal" },
      ],
      mensajeWhatsapp: "Hola, quiero presupuesto para una puerta. Os envío una foto:",
    },
    {
      titulo: "Rejas a medida",
      descripcion: "Rejas y puertas-reja fabricadas a medida: de arcos, de forja, torneadas o de barrotes.",
      contenido: [
        "Fabricamos rejas a medida para ventanas, balconeras y puertas, con varios modelos: arcos, nudos y volutas de forja, barrotes torneados o con bolas.",
      ],
      imagenes: [
        { src: f("056-reja-blanca-de-tres-arcos-sobre-ventana-con-persiana"), alt: "Reja blanca de tres arcos en abanico delante de una ventana con persiana" },
        { src: f("041-reja-blanca-de-dos-arcos-delante-de-una-balconera"), alt: "Reja blanca de dos arcos en abanico delante de una balconera" },
        { src: f("001-cerramiento-de-soportales-con-barrotes-de-forja-y"), alt: "Cerramiento de soportales con barrotes de forja torneados y rosetas" },
      ],
      mensajeWhatsapp: "Hola, quiero presupuesto para una reja. Os envío foto de la ventana:",
    },
    {
      titulo: "Armarios de aluminio",
      descripcion: "Armarios de terraza, de contadores y frentes de armario a medida.",
      contenido: [
        "Armarios de aluminio para terrazas y balcones que aguantan la intemperie, armarios de contadores y frentes de armario correderos o abatibles en aluminio y cristal.",
      ],
      imagenes: [
        { src: f("004-armario-de-terraza-de-aluminio-blanco-con-seis"), alt: "Armario de aluminio blanco de seis puertas instalado en una terraza" },
        { src: f("026-armario-de-contadores-de-aluminio-blanco-en-pilar"), alt: "Armario de contadores de aluminio blanco empotrado en un pilar de ladrillo" },
        { src: f("029-armario-de-aluminio-anodizado-de-varias-puertas-en"), alt: "Armario exterior de aluminio anodizado con varias puertas con cerradura" },
      ],
    },
    {
      titulo: "Reparación de ventanas",
      descripcion: "Si tus ventanas ya no corren bien o no cierran, muchas veces no hace falta cambiarlas.",
      contenido: [
        "Cambiamos los rodamientos de ventanas antiguas para que vuelvan a deslizar bien, y ajustamos puertas y ventanas que rozan o no cierran.",
        "También convertimos ventanas de apertura normal en oscilobatientes, para ventilar sin abrirlas del todo.",
      ],
      incluye: ["Cambio de rodamientos", "Ajuste de puertas y ventanas", "Conversión a oscilobatiente", "Mantenimiento"],
      preguntas: [
        {
          pregunta: "¿Merece la pena reparar una ventana antigua?",
          respuesta: "Muchas veces sí: con un cambio de rodamientos o un ajuste vuelve a funcionar sin cambiarla entera. Te decimos qué compensa en tu caso.",
        },
      ],
      mensajeWhatsapp: "Hola, tengo una ventana que no corre bien o no cierra. Os envío una foto:",
    },
    {
      titulo: "Mosquiteras",
      descripcion: "Fijas, correderas, enrollables o plisadas, a medida de cada ventana o puerta.",
      imagenes: [
        { src: f("032-puerta-negra-con-mosquitera-enrollable-g-b-deco"), alt: "Puerta de aluminio negro con mosquitera enrollable" },
      ],
    },
    {
      titulo: "Mamparas de baño",
      descripcion: "Mamparas para ducha y bañera con cristal de seguridad y perfilería de calidad.",
    },
  ],
  trabajos: [
    {
      titulo: "Reja de arcos en el porche de un chalet",
      descripcion: "Reja blanca de arcos a juego con la puerta de entrada de aluminio, para cerrar el porche sin quitarle luz.",
      servicio: "rejas-a-medida",
      imagenes: [
        { src: f("003-puerta-de-entrada-blanca-y-reja-de-arcos-en-porche"), alt: "Porche con puerta de entrada blanca y reja blanca de arcos" },
      ],
      antes: { src: f("059-puerta-de-entrada-blanca-y-cerramiento-de-porche-en"), alt: "El mismo porche antes de colocar la reja" },
    },
    {
      titulo: "Cerramiento de un balcón",
      descripcion: "Cambio de un cerramiento antiguo y deteriorado por correderas de aluminio blanco con persianas.",
      servicio: "cerramientos-de-terraza-y-balcon",
      imagenes: [
        { src: f("009-cerramiento-de-balcon-con-correderas-y-persianas"), alt: "Balcón cerrado con correderas de aluminio blanco y persianas" },
        { src: f("018-balcon-a-medio-cerrar-durante-la-obra"), alt: "El balcón durante la sustitución del cerramiento" },
      ],
      antes: { src: f("027-balcon-con-cerramiento-viejo-antes-de-la-reforma"), alt: "El cerramiento antiguo del balcón antes de cambiarlo" },
    },
    {
      titulo: "Armario de aluminio en una terraza",
      descripcion: "Un armario viejo de melamina sustituido por un armario de aluminio blanco de seis puertas.",
      servicio: "armarios-de-aluminio",
      imagenes: [
        { src: f("004-armario-de-terraza-de-aluminio-blanco-con-seis"), alt: "Armario de aluminio blanco de seis puertas en la terraza" },
      ],
      antes: { src: f("060-balcon-con-armario-viejo-de-melamina-antes-del"), alt: "El armario viejo de melamina antes del cambio" },
    },
    {
      titulo: "Ventanas y rejas en un semisótano",
      descripcion: "Retirada de rejas viejas y oxidadas y colocación de ventanas de aluminio granate con reja a juego.",
      servicio: "ventanas-de-aluminio",
      imagenes: [
        { src: f("015-ventanas-y-reja-granate-terminadas-en-un-semisotano"), alt: "Ventanas de aluminio granate con reja de barras horizontales en un semisótano" },
        { src: f("047-rejas-viejas-retiradas-y-ventanas-granate-puestas"), alt: "Ventanas granate nuevas con las rejas viejas ya retiradas" },
      ],
      antes: { src: f("040-rejas-viejas-oxidadas-con-malla-antes-de-cambiarlas"), alt: "Las rejas viejas y oxidadas antes del cambio" },
    },
  ],
  resenas: [
    {
      autor: "Jesús",
      texto:
        "Tuve un problema con la puerta de la terraza y contacté con ellos. Pudieron venir el mismo día y solucionaron la incidencia de forma rápida y eficaz. Quiero agradecer la rapidez con la que me atendieron, su amabilidad durante todo el proceso y la solución que dieron al problema. Un servicio excelente. Totalmente recomendables.",
      puntuacion: 5,
      fecha: "2026-07-01",
      fuente: "google",
    },
    {
      autor: "Sonia",
      texto:
        "Desde el primer momento que contacte el trato ha sido de 10. Confianza, profesionalidad es lo que me trasmitió y no me equivoqué. Pedí presupuesto para una puerta y ha quedado fenomenal. Javier es una persona cercana, trasmite confianza y es un gran profesional. Lo recomiendo al 100x100.",
      puntuacion: 5,
      fecha: "2026-04-01",
      fuente: "google",
    },
    {
      autor: "Alberto M.",
      texto:
        "Me convirtieron en abatibles 3 ventanas en tiempo record. Ni 2 dias desde que les contacte y ya estan listas. Eso es rapidez. Y ademas profesionales explicando los pormenores del mecanismo con tranquilidad. También me arreglaron un puerta que rozaba por la parte de abajo easy mode, y la ajustaron perfectamente para que cerraran bien. Recomiendo sin dudarlo.",
      puntuacion: 5,
      fecha: "2025-09-30",
      fuente: "google",
    },
    {
      autor: "Juan L.",
      texto:
        "Excelente. Desde el principio transmiten confianza, cercanía y profesionalidad. Son sinceros y no tienen afán por ganar dinero, sino que te recomiendan lo mejor para ti aunque sea más barato. Son rápidos, eficaces, cercanos y agradables en el trato. Sin duda un gran acierto. Y, por supuesto, el trabajo es impecable, preciso y justo lo que necesitábamos.",
      puntuacion: 5,
      fecha: "2025-02-07",
      fuente: "google",
    },
    {
      autor: "Pilar D.",
      texto:
        "Encontré el contacto por internet y me guié por sus reseñas y todo fenomenal. Ágiles, formales, cumplidores y en tiempo, en resumen buenos profesionales. También buena calidad/precio. Ha sido para un cerramiento de terraza en aluminio.",
      puntuacion: 5,
      fecha: "2024-10-17",
      fuente: "google",
    },
    {
      autor: "Carlos G.",
      texto:
        "Javi es un hombre educado, amable, trabajador y especialista en su trabajo. Súper profesional y 100% calidad en los trabajos que hace, lo recomiendo sin dudar a cualquier persona. El cerramiento quedó perfecto.",
      puntuacion: 5,
      fecha: "2022-12-28",
      fuente: "google",
    },
  ],
  garantias: [
    "Consulta y presupuesto sin compromiso",
    "Fabricación en nuestro propio taller",
    "Asesoramiento en cada paso del proyecto",
    "Más de 25 años en el oficio",
  ],
  empresa: {
    historia: [
      "Somos Alufran, carpintería de aluminio en Leganés. Llevamos más de 25 años fabricando e instalando ventanas, cerramientos, puertas y rejas a medida.",
      "Fabricamos en nuestro taller y montamos nosotros. Trabajamos para particulares y también para locales, oficinas y comunidades de vecinos.",
    ],
    imagenes: [
      { src: f("043-cerramiento-acristalado-blanco-preparado-en-el"), alt: "Cerramiento de aluminio blanco y vidrio preparado en el taller de Alufran" },
      { src: f("010-operario-instalando-ventanas-en-un-aula-o-una"), alt: "Operario de Alufran montando ventanas de aluminio" },
    ],
    equipo: [{ nombre: "Javier" }],
  },
  galeria: [
    { src: f("044-puerta-reja-blanca-abierta-en-la-entrada-de-una-casa"), alt: "Puerta-reja blanca y reja de ventana en una fachada de piedra", titulo: "Puerta-reja" },
    { src: f("055-ventanas-con-barrotillo-tras-barandilla-de-arcos"), alt: "Ventanas blancas con barrotillo detrás de una barandilla de arcos", titulo: "Ventanas con barrotillo" },
    { src: f("058-fachada-de-ladrillo-con-ventanas-y-barandillas-de"), alt: "Fachada de ladrillo con ventanas blancas y barandillas ornamentales", titulo: "Ventanas en fachada" },
    { src: f("013-ventana-cuadrada-de-aluminio-blanco-con-vidrio"), alt: "Ventana cuadrada de aluminio blanco con vidrio translúcido", titulo: "Ventana con vidrio translúcido" },
    { src: f("033-armario-de-contador-de-luz-de-aluminio-blanco"), alt: "Armario de contador de luz de aluminio blanco en un muro de ladrillo", titulo: "Armario de contador" },
  ],
  preguntas: [
    {
      pregunta: "¿Fabricáis vosotros?",
      respuesta: "Sí. Tenemos taller propio: medimos, fabricamos y montamos nosotros.",
    },
    {
      pregunta: "¿Hacéis trabajos para empresas y comunidades?",
      respuesta: "Sí: además de particulares, trabajamos para locales comerciales, oficinas y comunidades de vecinos.",
    },
    {
      pregunta: "¿Cobráis por dar presupuesto?",
      respuesta: "No. Cuéntanos qué necesitas y te damos presupuesto sin compromiso.",
    },
  ],
  seo: {
    titulo: "Carpintería de aluminio en Leganés | Alufran Aluminios",
    descripcion:
      "Ventanas, cerramientos de terraza, puertas, rejas y armarios de aluminio a medida en Leganés. Taller propio y más de 25 años de oficio.",
    url: "https://web-alufran.vercel.app",
  },
  redes: { facebook: "https://www.facebook.com/people/Aluminios-Alufran/100067017516814/" },
});

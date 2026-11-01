export const services = [
  {
    title: "Desarrollo web",
    summary:
      "Sitios corporativos rápidos y bien estructurados, que explican con claridad qué haces y facilitan que tus clientes te contacten.",
    items: ["Sitios corporativos y landing pages", "SEO técnico", "Contenido administrable"],
  },
  {
    title: "E-commerce y catálogos",
    summary:
      "Tiendas y catálogos con fichas de producto cuidadas, filtros útiles y medios de pago chilenos integrados.",
    items: ["Webpay · Flow · Mercado Pago", "Gestión de inventario", "Catálogos filtrables"],
  },
  {
    title: "Software y plataformas a medida",
    summary:
      "Herramientas construidas para tu operación: paneles de administración, sistemas de reservas, portales de clientes e intranets.",
    items: ["Paneles internos", "Reservas y agendas", "Roles y permisos"],
  },
  {
    title: "Integraciones y automatización",
    summary:
      "Conectamos tu sitio o sistema con las herramientas que ya usas, para que la información fluya sin trabajo manual.",
    items: ["WhatsApp Business", "CRM y correo", "Notificaciones automáticas"],
  },
];

export const capabilities = [
  {
    title: "Diseño UI/UX",
    body: "Interfaces claras y consistentes, diseñadas a partir de cómo usan tu producto tus clientes.",
  },
  {
    title: "Mantenimiento y evolución",
    body: "Soporte, actualizaciones y nuevas funcionalidades una vez que tu proyecto está en marcha.",
  },
];

export type Project = {
  name: string;
  /** "client": encargo de un cliente · "product": producto propio de Clikium */
  kind: "client" | "product";
  category: string;
  year?: string;
  url: string;
  /** Captura de página completa (se recorre en el marco del navegador) */
  image: { src: string; width: number; height: number };
  need: string;
  solution: string;
  features: string[];
  stack?: string[];
};

export const projects: Project[] = [
  {
    name: "RealCars Company",
    kind: "client",
    category: "Plataforma web · Automotriz",
    year: "2025",
    url: "https://realcarscompany.cl",
    image: { src: "/realcars-full.webp", width: 1440, height: 3818 },
    need: "Una automotora que necesitaba mostrar su inventario, recibir vehículos en consignación y administrar su catálogo sin depender de terceros.",
    solution:
      "Una plataforma a medida con catálogo filtrable, módulo de consignación, pagos en línea y un panel interno para gestionar el inventario.",
    features: [
      "Catálogo con búsqueda por marca, modelo y precio",
      "Módulo de consignación a medida",
      "Pagos integrados con Flow",
      "Panel de administración propio",
      "Integración con WhatsApp Business",
    ],
    stack: ["Next.js", "TypeScript", "Vercel", "Flow API", "WhatsApp API"],
  },
  {
    name: "AuraBook",
    kind: "product",
    category: "SaaS · Reservas y agendamiento",
    url: "https://aurabook.cl/",
    image: { src: "/aurabook-full.webp", width: 1440, height: 4134 },
    need: "Los negocios que atienden con hora suelen coordinar sus reservas por mensajes, con tiempo perdido y horarios cruzados.",
    solution:
      "Una página de reservas con la marca de cada negocio: sus clientes eligen servicio, profesional y hora desde el celular, y el equipo lo gestiona todo desde un panel simple.",
    features: [
      "Página de reservas con la marca del negocio",
      "Disponibilidad según duración, pausas y horarios",
      "Sin reservas duplicadas en un mismo horario",
      "Avisos y recordatorios por correo",
      "Panel semanal y gestión del equipo",
    ],
  },
];

export const process = [
  {
    title: "Diagnóstico",
    duration: "1 semana",
    body: "Entendemos tu negocio y tus objetivos. Definimos alcance, prioridades y una propuesta detallada.",
  },
  {
    title: "Diseño",
    duration: "1–2 semanas",
    body: "Estructura, contenidos e interfaz. Revisas prototipos antes de pasar a desarrollo.",
  },
  {
    title: "Desarrollo",
    duration: "2–6 semanas",
    body: "Construimos con entregas parciales. Sigues el avance en un entorno de pruebas.",
  },
  {
    title: "Lanzamiento y acompañamiento",
    duration: "Continuo",
    body: "Publicamos, te capacitamos y seguimos disponibles para soporte y nuevas etapas.",
  },
];

export const principles = [
  {
    title: "Soluciones adaptadas a cada negocio",
    body: "Partimos de cómo funciona tu operación, no de una plantilla. El alcance se define según lo que de verdad necesitas.",
  },
  {
    title: "Trato directo y comunicación transparente",
    body: "Hablas con quienes diseñan y desarrollan tu proyecto. Siempre sabes en qué etapa está y qué viene después.",
  },
  {
    title: "Desarrollo orientado a necesidades reales",
    body: "Priorizamos lo que aporta a tu negocio y a tus clientes, construido con estándares que permiten crecer.",
  },
  {
    title: "Acompañamiento y evolución",
    body: "El lanzamiento no es el final. Seguimos disponibles para soporte, mejoras y las siguientes etapas.",
  },
];

export const about = {
  /**
   * Fotografía real del fundador o del equipo. Mientras sea null, la sección
   * muestra una composición de marca en su lugar.
   * Ejemplo: { src: "/equipo.jpg", alt: "Equipo de Clikium en Santiago", width: 1200, height: 1500 }
   */
  photo: null as { src: string; alt: string; width: number; height: number } | null,
  paragraphs: [
    "Clikium SpA es una empresa chilena de software y soluciones digitales. Diseñamos, construimos y mantenemos sitios, plataformas e integraciones para empresas que necesitan que la tecnología trabaje a favor de su negocio.",
    "Además de los proyectos para clientes, desarrollamos productos propios como AuraBook. Operarlos a diario nos obliga a cuidar lo mismo que cuidamos en cada encargo: estabilidad, claridad y evolución continua.",
  ],
  facts: [
    { label: "Razón social", value: "Clikium SpA" },
    { label: "Base", value: "Santiago, Chile" },
    { label: "Producto propio", value: "AuraBook", href: "https://aurabook.cl/" },
  ],
};

export const faqs = [
  {
    q: "¿Cuánto cuesta desarrollar un sitio web?",
    a: "Depende del alcance: secciones, funcionalidades, integraciones y contenidos. Por eso no publicamos precios fijos. Después de una primera conversación te enviamos una propuesta detallada con lo que incluye y su valor.",
  },
  {
    q: "¿Cuánto demora un proyecto?",
    a: "Depende del tamaño del proyecto y de la disponibilidad de contenidos. Los proyectos más grandes se planifican por etapas, con entregas parciales. El plazo estimado queda definido en la propuesta.",
  },
  {
    q: "¿El dominio y el hosting están incluidos?",
    a: "Se define en cada propuesta. Podemos encargarnos de contratar y configurar el dominio y el hosting, o trabajar con los que ya tienes. Te explicamos qué conviene en tu caso y qué costos tiene cada opción.",
  },
  {
    q: "¿Podré administrar mi sitio web?",
    a: "Si tu proyecto lo requiere, sí. Según el alcance incluimos un panel o gestor de contenidos para que actualices textos, imágenes o productos, y te enseñamos a usarlo.",
  },
  {
    q: "¿Ofrecen mantenimiento?",
    a: "Sí. Después del lanzamiento podemos acompañarte con soporte, actualizaciones, respaldos y nuevas funcionalidades. Las condiciones se acuerdan según lo que necesite tu proyecto.",
  },
  {
    q: "¿Quién es propietario del código y del proyecto?",
    a: "La propiedad del dominio, las cuentas y el código desarrollado para ti queda establecida por escrito en la propuesta, antes de comenzar. Si tienes requisitos específicos, los conversamos desde el inicio.",
  },
];

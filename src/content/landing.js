// Todo el copy de la landing vive aquí. Solo datos: este archivo no exporta
// componentes, para no disparar react-refresh/only-export-components.

export const BRAND = "Worth & Will";

export const HERO = {
  kicker: "Patrimonio neto + plan de herencia",
  titleLead: "Invierte con intención",
  titleAccent: "y claridad.",
  subtitle:
    "Planifica, analiza y actúa con datos claros. Worth & Will te guía para que cada decisión financiera tenga propósito.",
  support:
    "Registra tus activos y pasivos, mira cómo evoluciona tu valor neto y define quién hereda qué — hasta el porcentaje exacto por bien.",
  primaryCta: "Ver las funciones",
  secondaryCta: "Descargar la app",
  microcopy: "Próximamente en App Store y Google Play · En DOP, USD, MXN y EUR",
  image: {
    src: "/screens/valor-neto.jpg",
    alt: "Pestaña Valor neto: gráfico de dona con los activos totales, RD$ 326,637,654, repartidos por categoría, y debajo una tarjeta por categoría con su valor, sus pasivos y su neto.",
    width: 720,
    height: 1455,
  },
};

export const FEATURES_INTRO = {
  kicker: "Funciones",
  title: "Todo tu patrimonio, y el plan para heredarlo",
  subtitle:
    "Tres pestañas: Valor neto, Activos & Pasivos y Distribución. Nada más que aprender.",
};

export const FEATURES = [
  {
    id: "patrimonio-neto",
    tab: "Valor neto",
    title: "Patrimonio neto",
    body: "Tus activos totales repartidos por categoría. Desliza y tienes los pasivos, la evolución en el tiempo con tu valor neto encima, y la distribución. Todo en tu moneda base, con tasas al día.",
    chips: ["Activos", "Pasivos", "Evolución", "DOP · USD · MXN · EUR"],
    visual: "phone",
    image: {
      src: "/screens/valor-neto.jpg",
      alt: "Gráfico de dona con los activos totales en RD$ 326,637,654 repartidos por categoría, el indicador de los cuatro gráficos de la pestaña, la fecha de las tasas de cambio y las tarjetas de categoría con su porcentaje del total.",
      width: 720,
      height: 1455,
    },
  },
  {
    id: "activos-pasivos",
    tab: "Activos & Pasivos",
    title: "Activos y Pasivos",
    body: "Activos, pasivos y neto sumados arriba. Míralo como listado completo o agrupado por categoría, cada una con su valor, su deuda y su neto.",
    chips: ["Listado", "Categorías", "Neto por categoría"],
    visual: "phone",
    image: {
      src: "/screens/activos-pasivos.jpg",
      alt: "Pestaña Activos & Pasivos: resumen con activos RD$ 326,637,654, pasivos RD$ 32,358,718 y neto RD$ 294,278,937, la categoría Propiedades con su neto, y el gráfico de activos totales repartido por categoría.",
      width: 720,
      height: 1515,
    },
  },
  {
    id: "categorias",
    tab: "Categorías",
    title: "Categorías a tu medida",
    body: "Sugerencias rápidas: un toque y la creas, y la editas después. O hazla desde cero con su propio ícono y color.",
    chips: ["Propiedades", "Cuentas bancarias", "Vehículos", "Inversiones"],
    visual: "screenshot",
    image: {
      src: "/screens/categorias.jpg",
      alt: "Pantalla Categorías: tarjeta de Sugerencias rápidas con las plantillas Propiedades, Cuentas bancarias, Vehículos e Inversiones, y debajo las categorías ya creadas.",
      width: 720,
      height: 886,
    },
  },
  {
    id: "beneficiarios",
    tab: "Distribución",
    title: "Beneficiarios",
    body: "Asigna a las personas de confianza que heredarán. Cada una con su distribución neta total, calculada sobre tu patrimonio real.",
    chips: ["Herederos", "Distribución neta total"],
    visual: "beneficiarios",
  },
  {
    id: "distribucion",
    tab: "Distribución",
    title: "Distribución",
    body: "Define el porcentaje que le toca a cada beneficiario, bien por bien. La app calcula los montos y te muestra cuánto queda sin distribuir.",
    chips: ["% por activo", "Montos calculados", "No distribuido"],
    visual: "distribucion",
  },
];

// Datos de ejemplo genéricos. No se usan nombres reales en ninguna parte.
export const DISTRIBUTION = {
  net: "RD$ 294,278,937",
  beneficiaries: [
    { name: "Ana", share: 12, amount: "RD$ 35,313,472" },
    { name: "Luis", share: 9, amount: "RD$ 26,485,104" },
    { name: "Camila", share: 6, amount: "RD$ 17,656,736" },
  ],
};

// Colores y nombres de las plantillas reales:
// lib/features/categories/domain/category_templates.dart
export const DISTRIBUTION_ASSETS = [
  { name: "Apartamento", category: "Propiedades", color: "#3B82F6", splits: [40, 30, 10] },
  { name: "Cuenta de ahorro", category: "Cuentas bancarias", color: "#22C55E", splits: [50, 25, 25] },
  { name: "Camioneta", category: "Vehículos", color: "#F59E0B", splits: [30, 20, 10] },
];

export const QR_URL = "https://worthandwill.app/proximamente";

export const DOWNLOAD = {
  kicker: "Descarga",
  title: "Worth & Will llega pronto a tu teléfono",
  subtitle:
    "Escanea el código con la cámara de tu teléfono y te avisamos apenas esté disponible.",
  stores: [
    { id: "app-store", label: "Disponible próximamente en App Store" },
    { id: "google-play", label: "Disponible próximamente en Google Play" },
  ],
  footnote: "Ambos códigos llevan a worthandwill.app/proximamente",
};

export const FOOTER = {
  tagline: "Patrimonio y herencia, claros. Hecho en República Dominicana.",
  copyright: "© 2026 Worth & Will",
};

export const site = {
  name: "Clikium",
  url: "https://clikium.cl",
  description:
    "Estudio digital en Santiago de Chile. Diseñamos y desarrollamos sitios web, e-commerce, plataformas a medida e integraciones para empresas de cualquier rubro.",
  email: "contacto@clikium.cl",
  phone: "+56 9 7878 5893",
  whatsapp: "56978785893",
  instagram: "https://www.instagram.com/clikium.cl/",
  location: "Santiago, Chile",
} as const;

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas", href: "#preguntas" },
] as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const site = {
  name: "Clikium",
  legalName: "Clikium SpA",
  url: "https://clikium.cl",
  description:
    "Empresa chilena de software y soluciones digitales. Diseñamos y desarrollamos sitios web, e-commerce, plataformas a medida e integraciones para empresas.",
  email: "contacto@clikium.cl",
  phone: "+56 9 7878 5893",
  whatsapp: "56978785893",
  instagram: "https://www.instagram.com/clikium.cl/",
  location: "Santiago, Chile",
} as const;

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Preguntas", href: "#preguntas" },
] as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

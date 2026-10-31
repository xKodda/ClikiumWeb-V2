import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { nav, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t hairline">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo className="h-6" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-silver-500">
            Estudio de diseño y desarrollo web. Construimos sitios, plataformas e integraciones a medida para
            empresas de cualquier rubro.
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-silver-500">Navegación</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-silver-200 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-silver-500">Contacto</h3>
          <ul className="mt-5 space-y-3 text-sm text-silver-200">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                Instagram
              </a>
            </li>
            <li className="text-silver-500">{site.location}</li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t hairline py-6 text-xs text-silver-500 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Clikium. Todos los derechos reservados.</p>
        <p className="font-mono">{"{/}"} Hecho en Chile</p>
      </Container>
    </footer>
  );
}

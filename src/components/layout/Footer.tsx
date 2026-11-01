import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/lib/content";
import { nav, site, whatsappUrl } from "@/lib/site";

const linkClass = "text-silver-300 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="border-t hairline">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 md:grid-cols-12 md:py-20">
        <div className="sm:col-span-2 md:col-span-4">
          <Logo className="h-6" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-silver-400">
            Empresa chilena de software y soluciones digitales. Diseñamos, construimos y mantenemos soluciones digitales para
            empresas.
          </p>
        </div>

        <FooterColumn title="Servicios" className="md:col-span-3">
          {services.map((s) => (
            <li key={s.title}>
              <a href="#servicios" className={linkClass}>
                {s.title}
              </a>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Navegación" className="md:col-span-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={linkClass}>
                {item.label}
              </a>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contacto" className="md:col-span-3">
          <li>
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
          </li>
          <li>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {site.phone}
            </a>
          </li>
          <li>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Instagram
            </a>
          </li>
          <li className="text-silver-400">{site.location}</li>
        </FooterColumn>
      </Container>

      <Container className="flex flex-col gap-2 border-t hairline py-6 pb-24 text-xs text-silver-400 sm:flex-row sm:justify-between sm:pb-6">
        <p>
          © {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
        </p>
        <p className="font-mono">{"{/}"} Hecho en Chile</p>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="eyebrow text-silver-400">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

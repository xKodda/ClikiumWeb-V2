"use client";

import { useState } from "react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Button";
import { services } from "@/lib/content";
import { site, whatsappUrl } from "@/lib/site";

const projectTypes = [...services.slice(0, 5).map((s) => s.title), "Aún no lo tengo claro"];

const fieldClass =
  "w-full rounded-lg border hairline bg-ink-900 px-4 py-3 text-silver-50 placeholder:text-silver-700 transition-colors focus:border-brand-500 focus:outline-none";

export function Contact() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (type: string) =>
    setSelected((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [
      `Hola Clikium, soy ${get("name")}${get("company") ? ` de ${get("company")}` : ""}.`,
      selected.length ? `Me interesa: ${selected.join(", ")}.` : "",
      get("message") ? `\n${get("message")}` : "",
      get("email") ? `\nMi correo: ${get("email")}` : "",
    ];
    window.open(whatsappUrl(lines.filter(Boolean).join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="grain relative overflow-hidden border-t hairline bg-ink-900 py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute -bottom-60 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-700/20 blur-[140px]" />

      <Container className="relative grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">
              <span className="text-silver-500">06 /</span> Contacto
            </p>
            <h2 className="mt-8 text-balance text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-silver-50 lg:text-7xl">
              Conversemos sobre tu proyecto.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-silver-400">
              Cuéntanos qué necesitas. Te respondemos en menos de 24 horas hábiles con los próximos pasos, sin
              compromiso.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-12 space-y-6 border-t hairline pt-8">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-silver-500">Correo</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-lg text-silver-50 underline-offset-4 hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-silver-500">WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-silver-50 underline-offset-4 hover:underline"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:col-span-7">
          <form onSubmit={handleSubmit} className="rounded-2xl border hairline bg-ink-950/60 p-6 backdrop-blur sm:p-10">
            <fieldset>
              <legend className="text-sm font-medium text-silver-200">¿Qué necesitas?</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {projectTypes.map((type) => {
                  const active = selected.includes(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggle(type)}
                      className={clsx(
                        "rounded-full border px-4 py-2 text-sm transition-colors duration-300",
                        active
                          ? "border-silver-100 bg-silver-100 text-ink-950"
                          : "hairline text-silver-400 hover:border-silver-100/30 hover:text-silver-100",
                      )}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm text-silver-400">Nombre</span>
                <input name="name" required autoComplete="name" className={clsx(fieldClass, "mt-2")} />
              </label>
              <label className="block">
                <span className="text-sm text-silver-400">Empresa <span className="text-silver-700">(opcional)</span></span>
                <input name="company" autoComplete="organization" className={clsx(fieldClass, "mt-2")} />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm text-silver-400">Correo</span>
                <input name="email" type="email" required autoComplete="email" className={clsx(fieldClass, "mt-2")} />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm text-silver-400">Cuéntanos sobre tu proyecto</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Qué hace tu empresa, qué quieres lograr y para cuándo."
                  className={clsx(fieldClass, "mt-2 resize-none")}
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-silver-500">Se abrirá WhatsApp con tu mensaje listo para enviar.</p>
              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-silver-100 px-6 text-[15px] font-medium text-ink-950 transition-colors hover:bg-white"
              >
                Enviar mensaje
                <Arrow />
              </button>
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

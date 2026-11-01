"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow, buttonClass } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { capabilities, services } from "@/lib/content";
import { site, whatsappUrl } from "@/lib/site";

const projectTypes = [...services.map((s) => s.title), capabilities[0].title, "Aún no lo tengo claro"];

const fieldClass =
  "mt-2 w-full rounded-lg border bg-ink-950 px-4 py-3 text-base text-silver-50 placeholder:text-silver-500 transition-colors focus:border-brand-300 focus:outline-none aria-[invalid=true]:border-red-400/70";

type Field = "name" | "email";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  if (name.length < 2) errors.name = "Escribe tu nombre.";
  if (!email) errors.email = "Escribe tu correo para poder responderte.";
  else if (!EMAIL_RE.test(email)) errors.email = "Revisa el formato del correo (ej. nombre@empresa.cl).";
  return errors;
}

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentUrl, setSentUrl] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  // Bloqueo síncrono: el estado de React no se actualiza entre clics muy seguidos
  const sendingRef = useRef(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Evita envíos duplicados por doble clic
    if (sendingRef.current) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    sendingRef.current = true;
    setStatus("sending");
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const selected = data.getAll("types").map(String);
    const lines = [
      `Hola Clikium, soy ${get("name")}${get("company") ? ` de ${get("company")}` : ""}.`,
      selected.length ? `Me interesa: ${selected.join(", ")}.` : "",
      get("message") ? `\n${get("message")}` : "",
      `\nMi correo: ${get("email")}`,
    ];
    const url = whatsappUrl(lines.filter(Boolean).join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
    // Breve pausa para que el estado de carga sea perceptible y bloquee un segundo envío
    window.setTimeout(() => {
      sendingRef.current = false;
      setStatus("sent");
    }, 600);
  }

  function reset() {
    formRef.current?.reset();
    setErrors({});
    setStatus("idle");
  }

  const clearError = (field: Field) => errors[field] && setErrors((prev) => ({ ...prev, [field]: undefined }));

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="grain relative overflow-hidden border-t hairline bg-ink-900 py-24 md:py-36">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_0%_100%,black,transparent)]" />

      <Container className="relative grid gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Reveal>
            <SectionLabel index="07" label="Contacto" />
            <h2
              id="contacto-title"
              className="mt-6 text-balance text-[clamp(2.5rem,5.6vw,4.75rem)] font-medium leading-[1] tracking-[-0.04em] text-silver-50"
            >
              Hablemos de tu proyecto.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-silver-300">
              Cuéntanos qué necesitas. Te respondemos en menos de 24 horas hábiles con los próximos pasos, sin
              compromiso.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 space-y-6 border-t hairline pt-8 md:mt-12">
              <div>
                <dt className="eyebrow text-silver-400">Correo</dt>
                <dd className="mt-1.5">
                  <a href={`mailto:${site.email}`} className="text-lg text-silver-50 underline decoration-silver-50/25 underline-offset-4 transition-colors hover:decoration-brand-300">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-silver-400">WhatsApp</dt>
                <dd className="mt-1.5">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-silver-50 underline decoration-silver-50/25 underline-offset-4 transition-colors hover:decoration-brand-300"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="md:col-span-7">
          <div className="rounded-2xl border hairline bg-ink-950/70 p-5 sm:p-10">
            {status === "sent" ? (
              <div role="status" className="py-6 sm:py-10">
                <p className="eyebrow flex items-center gap-2 text-brand-300">
                  <span aria-hidden className="size-1.5 rounded-full bg-brand-300" />
                  Mensaje preparado
                </p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.02em] text-silver-50 sm:text-3xl">
                  Abrimos WhatsApp con tu mensaje.
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-silver-300">
                  Solo falta presionar enviar en WhatsApp. Si no se abrió automáticamente, usa el botón o escríbenos a{" "}
                  <a href={`mailto:${site.email}`} className="text-silver-50 underline underline-offset-4">
                    {site.email}
                  </a>
                  .
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={sentUrl} target="_blank" rel="noopener noreferrer" className={buttonClass()}>
                    Abrir WhatsApp
                    <Arrow external />
                  </a>
                  <button type="button" onClick={reset} className={buttonClass("secondary")}>
                    Escribir otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate aria-describedby="form-nota">
                <fieldset>
                  <legend className="text-sm font-medium text-silver-200">
                    ¿Qué necesitas? <span className="font-normal text-silver-400">(opcional)</span>
                  </legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <label key={type} className="cursor-pointer">
                        <input type="checkbox" name="types" value={type} className="peer sr-only" />
                        <span className="inline-flex min-h-10 items-center rounded-full border hairline px-4 py-2 text-sm text-silver-300 transition-colors duration-300 hover:border-silver-100/35 hover:text-silver-100 peer-checked:border-silver-100 peer-checked:bg-silver-100 peer-checked:text-ink-950 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-300">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <TextField
                    label="Nombre"
                    name="name"
                    autoComplete="name"
                    error={errors.name}
                    onInput={() => clearError("name")}
                  />
                  <TextField label="Empresa" name="company" autoComplete="organization" optional />
                  <TextField
                    label="Correo"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    error={errors.email}
                    onInput={() => clearError("email")}
                    className="sm:col-span-2"
                  />
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm text-silver-300">
                      Cuéntanos sobre tu proyecto <span className="text-silver-400">(opcional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={1500}
                      placeholder="Qué hace tu empresa, qué quieres lograr y para cuándo."
                      className={clsx(fieldClass, "hairline resize-y")}
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p id="form-nota" className="text-sm text-silver-400">
                    Se abrirá WhatsApp con tu mensaje listo para enviar.
                  </p>
                  <button type="submit" disabled={status === "sending"} aria-busy={status === "sending"} className={buttonClass()}>
                    {status === "sending" ? "Preparando…" : "Enviar mensaje"}
                    {status !== "sending" && <Arrow />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
};

function TextField({ label, name, error, optional, className, ...props }: TextFieldProps) {
  const errorId = `${name}-error`;
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm text-silver-300">
        {label} {optional && <span className="text-silver-400">(opcional)</span>}
      </label>
      <input
        id={name}
        name={name}
        required={!optional}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={clsx(fieldClass, !error && "hairline")}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

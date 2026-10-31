# Clikium Web V2

Sitio de [clikium.cl](https://clikium.cl). Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint && npm run typecheck
```

## Estructura

```
src/
  app/                 layout, página, metadata, sitemap, robots, ícono
  components/
    layout/            Header, Footer, botón flotante de WhatsApp
    sections/          Una sección de la home por archivo
    ui/                Primitivas reutilizables (Button, Container, Reveal…)
  lib/
    site.ts            Datos de contacto y navegación
    content.ts         Textos: servicios, proceso, casos, FAQ
```

Los textos se editan en `src/lib/content.ts` y los datos de contacto en `src/lib/site.ts`, sin tocar los componentes.

## Paleta

Derivada del logo. Tokens definidos en `src/app/globals.css` (`@theme`):

| Token        | Hex       | Uso                              |
| ------------ | --------- | -------------------------------- |
| `ink-950`    | `#070D17` | Fondo principal                  |
| `ink-900`    | `#0B1422` | Secciones alternas               |
| `silver-100` | `#E2E9EE` | Texto principal (wordmark logo)  |
| `silver-50`  | `#F4F7F9` | Sección clara                    |
| `brand-700`  | `#164E7F` | Color de marca (llaves del logo) |
| `brand-300`  | `#7FAAD6` | Acento sobre fondo oscuro        |

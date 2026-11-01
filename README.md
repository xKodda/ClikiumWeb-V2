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

Para mostrar una fotografía real en **Quiénes somos**, agrega la imagen en `public/` y completa `about.photo` en `src/lib/content.ts`. Mientras sea `null` se muestra una composición de marca.

Orden de la home: Hero · Servicios · Proyectos y productos · Proceso · Por qué Clikium · Quiénes somos · Preguntas · Contacto.

## Paleta

Derivada del logo. Tokens definidos en `src/app/globals.css` (`@theme`):

| Token        | Hex       | Uso                              |
| ------------ | --------- | -------------------------------- |
| `ink-950`    | `#07111F` | Fondo principal                  |
| `ink-900`    | `#0C182A` | Secciones alternas               |
| `ink-800`    | `#132136` | Superficies                      |
| `silver-100` | `#E3E9EF` | Texto principal (wordmark logo)  |
| `silver-300` | `#B5C2D2` | Texto secundario sobre oscuro    |
| `silver-50`  | `#F4F7FA` | Secciones claras                 |
| `silver-600` | `#5B697B` | Texto secundario sobre claro     |
| `brand-700`  | `#164E7F` | Color de marca (llaves del logo) |
| `brand-300`  | `#79A9DC` | Acento sobre fondo oscuro        |

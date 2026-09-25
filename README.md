# Humanzia

Sitio web de Humanzia: reclutamiento, evaluación y capacitación.

Hecho con [Astro](https://astro.build). Genera un sitio estático.

## Uso

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

Requiere Node 20 o superior.

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Textos, servicios, sectores, correo | `src/data/site.ts` |
| Colores, tipografía, espaciado | `src/styles/global.css` |
| Logotipo | `src/components/Logo.astro` y `public/favicon.svg` |
| Fotografías | `src/assets/photos/` (se optimizan al compilar) |
| Páginas | `src/pages/` |

## Pendiente antes de publicar

- Confirmar el correo de contacto (`contacto@humanzia.mx`).
- Razón social y domicilio para el aviso de privacidad.
- El formulario abre el cliente de correo del usuario; para recibir envíos directos hay que conectar un servicio de formularios (Netlify Forms, Formspree, etc.).

## Créditos de fotografía

Imágenes de [Unsplash](https://unsplash.com/license), de uso libre:

- `capacitacion-taller.jpg`: Vitaly Gariev
- `entrevista.jpg`: Christina @ wocintechchat.com
- `industria-planta.jpg`: Spencer Davis

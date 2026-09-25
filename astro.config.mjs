// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.humanzia.mx',
  // Respeta el puerto que asigne el entorno (p. ej. el panel de vista previa)
  server: { port: Number(process.env.PORT) || 4321 },
});

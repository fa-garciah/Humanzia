/* Contenido del sitio. Todos los textos se editan aquí. */

const year = new Date().getFullYear();

export const site = {
  name: 'Humanzia',
  domain: 'humanzia.mx',
  url: 'https://www.humanzia.mx',
  lang: 'es-MX',
  slogan: 'Soluciones de talento para organizaciones que quieren crecer',
  cta: 'Fortalezca su equipo',
  /* PENDIENTE: correo supuesto sobre el dominio propuesto. Confirmar antes de publicar. */
  email: 'contacto@humanzia.mx',
  year,
  horizon: year + 2, // «el equipo de dentro de dos años»

  nav: [
    { label: 'Servicios', href: '/servicios' },
    { label: 'Método', href: '/#metodo' },
    { label: 'Contacto', href: '/contacto' },
  ],
};

/* Los tres servicios, ordenados como tramos de la línea de desarrollo. */
export const services = [
  {
    slug: 'reclutamiento',
    n: '01',
    title: 'Reclutamiento',
    when: 'Mes 0',
    summary:
      'Buscamos a la persona que puede ocupar el puesto hoy y crecer con él mañana. El perfil se define junto con el plan de su empresa, no solo con la descripción de la vacante.',
    includes: [
      'Perfil del puesto a dos años, construido con su equipo directivo',
      'Búsqueda y filtro de candidatos',
      'Entrevistas por competencias',
      'Terna final con informe de cada candidato',
    ],
    outcome: 'Una contratación con un plan de crecimiento desde el primer día.',
  },
  {
    slug: 'evaluacion',
    n: '02',
    title: 'Evaluación',
    when: 'Meses 1 a 6',
    summary:
      'Medimos lo que cada persona sabe hacer y hacia dónde puede crecer. Sirve para nuevos ingresos y para el equipo que ya tiene, antes de decidir ascensos o reestructuras.',
    includes: [
      'Evaluación de competencias y desempeño',
      'Pruebas psicométricas',
      'Mapa de potencial del equipo',
      'Informe individual con recomendaciones',
    ],
    outcome: 'Un mapa claro de quién puede asumir más responsabilidad y qué le falta.',
  },
  {
    slug: 'capacitacion',
    n: '03',
    title: 'Capacitación',
    when: 'Meses 6 a 24',
    summary:
      'Diseñamos programas a la medida de lo que salió en la evaluación. Cada curso responde a una brecha concreta y a un puesto que su empresa va a necesitar.',
    includes: [
      'Programa de formación por puesto o por grupo',
      'Talleres presenciales y en línea',
      'Formación de mandos medios y líderes',
      'Seguimiento de avance a los 6, 12 y 24 meses',
    ],
    outcome: 'Personas listas para los puestos que su crecimiento va a abrir.',
  },
];

/* Mercado: empresas de servicios, comercio e industria. */
export const sectors = [
  {
    title: 'Servicios',
    text: 'Equipos que atienden clientes todos los días. Al crecer, el reto es sostener la calidad con más gente.',
  },
  {
    title: 'Comercio',
    text: 'Cada sucursal nueva necesita un encargado. Conviene que salga de dentro y llegue formado.',
  },
  {
    title: 'Industria',
    text: 'Técnicos y operarios que pasan a supervisar. El salto de operar a dirigir se prepara con tiempo.',
  },
];

/* Cómo trabajamos: el plan de talento a dos años. */
export const steps = [
  {
    n: '1',
    title: 'Conocemos su plan',
    body: 'Nos sentamos con la dirección para entender hacia dónde va la empresa en los próximos dos años.',
  },
  {
    n: '2',
    title: 'Lo traducimos en puestos',
    body: 'Convertimos ese plan en perfiles, competencias y un calendario de quién debe estar listo y cuándo.',
  },
  {
    n: '3',
    title: 'Acompañamos a las personas',
    body: 'Reclutamos, evaluamos y capacitamos siguiendo ese calendario, con revisiones periódicas.',
  },
  {
    n: '4',
    title: 'Medimos el avance',
    body: 'Revisamos resultados con usted y ajustamos el plan cuando la empresa cambia de rumbo.',
  },
];

import type { AppProject, LocalizedText } from '@/types/content'

const copy = (en: string, es: string): LocalizedText => ({ en, es })

export const appProjects: AppProject[] = [
  {
    slug: 'my-rents',
    name: 'My Rents',
    storeTitle: 'My Rents: Property Manager Pro',
    category: copy('Productivity', 'Productividad'),
    updatedLabel: copy('March 30, 2026', '30 de marzo de 2026'),
    summary: copy(
      'Property management software for landlords who need portfolios, leases, expenses, documents, and tenant communication in one workflow.',
      'Software de gestión inmobiliaria para propietarios que necesitan portfolios, contratos, gastos, documentos y comunicación con inquilinos en un solo flujo.',
    ),
    previewSummary: copy(
      'Property management for rentals, leases, expenses, documents, and tenant communication.',
      'Gestiona alquileres, contratos, gastos, documentos y comunicación con inquilinos.',
    ),
    description: [
      copy(
        'My Rents brings together property creation, portfolio organization, event scheduling, expense tracking, and lease management for landlords handling anything from one unit to a larger real-estate portfolio.',
        'My Rents unifica la creación de propiedades, la organización por portfolios, la planificación de eventos, el control de gastos y la gestión de contratos para propietarios que llevan desde una sola vivienda hasta un portfolio inmobiliario más amplio.',
      ),
      copy(
        'The latest Play Store copy also highlights the Documents Center: a tenant portal where landlords can share files, gallery images, due dates, and updates through a secure link with passcode access.',
        'La descripción más reciente en Google Play también destaca Documents Center: un portal para inquilinos donde el propietario puede compartir archivos, imágenes, vencimientos y actualizaciones mediante un enlace seguro con código de acceso.',
      ),
    ],
    highlights: [
      {
        title: copy('Portfolio control', 'Control del portfolio'),
        description: copy(
          'Group properties by city, type, or strategy and keep every record easy to navigate.',
          'Agrupa propiedades por ciudad, tipo o estrategia y mantiene cada registro fácil de consultar.',
        ),
      },
      {
        title: copy('Lease and billing workflows', 'Flujos de contratos y cobros'),
        description: copy(
          'Track rent due dates, automate bills, and send reminders through WhatsApp, email, or phone.',
          'Controla vencimientos, automatiza recibos y envía recordatorios por WhatsApp, correo o teléfono.',
        ),
      },
      {
        title: copy('Tenant document portal', 'Portal documental para inquilinos'),
        description: copy(
          'Share contracts, images, and expense updates securely without creating separate tenant accounts.',
          'Comparte contratos, imágenes y actualizaciones de gastos de forma segura sin crear cuentas separadas para inquilinos.',
        ),
      },
    ],
    featureAlt: copy(
      'My Rents property dashboard and landlord workflow screens.',
      'Pantallas del panel de propiedades y flujos para propietarios en My Rents.',
    ),
    downloads: '5K+',
    rating: '4.8',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.drodriguez.my_rents',
    iosStoreUrl: 'https://apps.apple.com/es/app/my-rents-property-manager-pro/id1537064606',
    iconUrl: '/apps/my-rents-icon.png',
    featureUrl: '/apps/my-rents-banner.png',
    featured: true,
    palette: {
      accent: '#0f6b63',
      soft: '#d4f0ea',
      gradient: 'linear-gradient(135deg, #0f6b63 0%, #78c4b5 50%, #fff1df 100%)',
    },
  },
  {
    slug: 'home-handy',
    name: 'HomeHandy',
    storeTitle: 'HomeHandy Home Maintenance',
    category: copy('House & Home', 'Casa y hogar'),
    updatedLabel: copy('April 19, 2026', '19 de abril de 2026'),
    summary: copy(
      'A home maintenance planner for recurring tasks, service history, reminders, and editable care routines.',
      'Un planificador de mantenimiento del hogar con tareas recurrentes, historial de servicio, recordatorios y rutinas editables.',
    ),
    previewSummary: copy(
      'Stay on top of recurring home maintenance before small issues become expensive surprises.',
      'Mantente al día con el mantenimiento recurrente del hogar antes de que pequeños problemas salgan caros.',
    ),
    description: [
      copy(
        'HomeHandy helps homeowners keep up with recurring maintenance across HVAC, kitchen, plumbing, safety, and exterior care so small issues do not turn into expensive repairs.',
        'HomeHandy ayuda a los propietarios a seguir el mantenimiento recurrente de climatización, cocina, fontanería, seguridad y exterior para que los pequeños problemas no se conviertan en reparaciones costosas.',
      ),
      copy(
        'The app combines starter packs, custom checklists, flexible schedules, reminders, and a service log with notes, vendors, costs, dates, and photos.',
        'La app combina packs iniciales, listas personalizadas, calendarios flexibles, recordatorios y un registro de servicio con notas, proveedores, costes, fechas y fotos.',
      ),
    ],
    highlights: [
      {
        title: copy('Starter packs that adapt', 'Packs iniciales adaptables'),
        description: copy(
          'Start with ready-made maintenance packs and then edit the checklist so it matches the reality of your home.',
          'Empieza con packs de mantenimiento preparados y después ajusta la lista para que encaje con la realidad de tu casa.',
        ),
      },
      {
        title: copy('Flexible recurring schedules', 'Calendarios recurrentes flexibles'),
        description: copy(
          'Run monthly, yearly, seasonal, or custom intervals so every task appears when it matters.',
          'Usa intervalos mensuales, anuales, estacionales o personalizados para que cada tarea aparezca cuando importa.',
        ),
      },
      {
        title: copy('Service history you can trust', 'Historial de servicio fiable'),
        description: copy(
          'Save notes, vendor details, costs, dates, and photos each time maintenance work gets done.',
          'Guarda notas, proveedores, costes, fechas y fotos cada vez que se completa una tarea de mantenimiento.',
        ),
      },
    ],
    featureAlt: copy(
      'HomeHandy banner with a home maintenance mark and green wordmark.',
      'Banner de HomeHandy con un símbolo de mantenimiento del hogar y logotipo en verde.',
    ),
    downloads: '1+',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.drodriguez.homehandy',
    iosStoreUrl: 'https://apps.apple.com/es/app/homehandy-home-maintenance/id6763947552',
    iconUrl: '/apps/home-handy-icon.png',
    featureUrl: '/apps/home-handy-banner.png',
    featured: false,
    palette: {
      accent: '#77c81f',
      soft: '#e8f7d8',
      gradient: 'linear-gradient(135deg, #1465df 0%, #77c81f 55%, #f5faec 100%)',
    },
  },
  {
    slug: 'tandapp',
    name: 'Tandapp',
    storeTitle: 'Tandapp: Tanda Group Organizer',
    category: copy('Tools', 'Herramientas'),
    updatedLabel: copy('April 16, 2026', '16 de abril de 2026'),
    summary: copy(
      'A tanda organizer for invite flows, round status, payment tracking, reminders, chat, and shared records.',
      'Un organizador de tandas para invitaciones, estado de rondas, seguimiento de pagos, recordatorios, chat y registros compartidos.',
    ),
    previewSummary: copy(
      'Organize tandas with invite links, round tracking, payment reminders, and shared records.',
      'Organiza tandas con enlaces de invitación, seguimiento de rondas, recordatorios y registros compartidos.',
    ),
    description: [
      copy(
        'Tandapp helps a tanda stay organized from the first invite to the final round with group setup, shared status, and clear contribution tracking.',
        'Tandapp ayuda a mantener una tanda organizada desde la primera invitación hasta la última ronda con configuración de grupo, estado compartido y seguimiento claro de aportaciones.',
      ),
      copy(
        'It keeps reminders, chat, proof photos, private savings, and finished-round history in one record while making clear that the app coordinates the group but does not hold pooled money.',
        'Reúne recordatorios, chat, fotos de comprobantes, ahorro privado e historial de rondas en un solo registro, dejando claro que la app coordina el grupo pero no retiene dinero.',
      ),
    ],
    highlights: [
      {
        title: copy('Invite and fill the group', 'Invita y completa el grupo'),
        description: copy(
          'Create a group, share an invite code or link, and start only when all places are filled.',
          'Crea un grupo, comparte un código o enlace de invitación y empieza solo cuando todas las plazas estén completas.',
        ),
      },
      {
        title: copy('Track rounds and payments', 'Sigue rondas y pagos'),
        description: copy(
          'See whose turn is current, who paid, who is late, and which debts were cleared later.',
          'Ve de quién es el turno, quién pagó, quién va tarde y qué deudas se regularizaron después.',
        ),
      },
      {
        title: copy('Keep one shared record', 'Mantiene un registro compartido'),
        description: copy(
          'Store chat, updates, proof photos, reminders, and finished tanda history in one place.',
          'Guarda chat, novedades, fotos de comprobantes, recordatorios e historial de tandas terminadas en un mismo sitio.',
        ),
      },
    ],
    featureAlt: copy(
      'Tandapp banner with participant icons cycling around a savings piggy bank.',
      'Banner de Tandapp con iconos de participantes girando alrededor de una hucha.',
    ),
    downloads: '1+',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.drodriguez.tandapp',
    iosStoreUrl: 'https://apps.apple.com/es/app/tandapp-tandas-organizer/id6763742265',
    iconUrl: '/apps/tandapp-icon.png',
    featureUrl: '/apps/tandapp-banner.png',
    featured: false,
    palette: {
      accent: '#0c7a77',
      soft: '#dff4f1',
      gradient: 'linear-gradient(135deg, #0c7a77 0%, #ffb347 48%, #f7ddea 100%)',
    },
  },
  {
    slug: 'the-impostor',
    name: 'The Impostor',
    storeTitle: 'The Impostor - Party Game',
    category: copy('Word game', 'Juego de palabras'),
    updatedLabel: copy('April 4, 2026', '4 de abril de 2026'),
    summary: copy(
      'A social deduction party game with offline rounds, online matches, custom packs, and multilingual play.',
      'Un juego social de deducción con partidas offline, encuentros online, packs personalizados y juego multilingüe.',
    ),
    previewSummary: copy(
      'A social deduction party game for offline rounds, online matches, and custom packs.',
      'Un party game de deducción social con partidas offline, online y packs personalizados.',
    ),
    description: [
      copy(
        'The Impostor mixes fast party rounds with social deduction: one player does not know the secret word while the rest of the group tries to identify who is bluffing.',
        'The Impostor mezcla rondas rápidas de fiesta con deducción social: una persona no conoce la palabra secreta mientras el resto del grupo intenta descubrir quién está fingiendo.',
      ),
      copy(
        'The latest release adds custom packs, online community packs, and private online matches, which turns the project into a more scalable social game platform instead of a single mode concept.',
        'La última versión añade packs personalizados, packs online de la comunidad y partidas privadas online, convirtiendo el proyecto en una plataforma social más escalable y no solo en una idea de un modo único.',
      ),
    ],
    highlights: [
      {
        title: copy('Offline and online play', 'Juego offline y online'),
        description: copy(
          'Play with one phone locally or jump into worldwide online matches with language-aware matchmaking.',
          'Juega localmente con un solo móvil o entra en partidas online globales con emparejamiento por idioma.',
        ),
      },
      {
        title: copy('Custom packs', 'Packs personalizados'),
        description: copy(
          'Create, share, and vote for word packs so the content library keeps growing after launch.',
          'Crea, comparte y vota packs de palabras para que la librería de contenido siga creciendo tras el lanzamiento.',
        ),
      },
      {
        title: copy('Built for parties', 'Pensado para fiestas'),
        description: copy(
          'Quick rounds, simple rules, and broad category support make it easy to start playing immediately.',
          'Rondas rápidas, reglas simples y variedad de categorías hacen que sea fácil empezar a jugar al instante.',
        ),
      },
    ],
    featureAlt: copy(
      'The Impostor party-game interface and category selection screens.',
      'Interfaz de The Impostor y pantallas de selección de categorías.',
    ),
    downloads: '1K+',
    rating: '5.0',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.drodriguez.imposter',
    iosStoreUrl: 'https://apps.apple.com/es/app/the-impostor-online/id6763661603',
    iconUrl: '/apps/the-impostor-icon.png',
    featureUrl: '/apps/the-impostor-banner.png',
    featured: true,
    palette: {
      accent: '#8e2f3b',
      soft: '#ffd8d6',
      gradient: 'linear-gradient(135deg, #51202b 0%, #8e2f3b 45%, #f7d8c4 100%)',
    },
  },
  {
    slug: 'party-words',
    name: 'Party Words',
    storeTitle: 'Party Words - Multiplayer',
    category: copy('Word game', 'Juego de palabras'),
    updatedLabel: copy('October 9, 2024', '9 de octubre de 2024'),
    summary: copy(
      'A local multiplayer party game built around drawing, gestures, team play, and editable word sets.',
      'Un juego multijugador local centrado en dibujo, gestos, juego por equipos y sets de palabras editables.',
    ),
    previewSummary: copy(
      'A local multiplayer party game built around drawing, gestures, teams, and custom word sets.',
      'Un juego party multijugador local con dibujo, mimos, equipos y sets de palabras propios.',
    ),
    description: [
      copy(
        'Party Words is designed for living rooms and group hangouts, with a simple team flow where one player draws or acts while the rest of the team guesses the word.',
        'Party Words está pensado para salón y reuniones con amigos, con un flujo simple por equipos donde una persona dibuja o actúa mientras el resto adivina la palabra.',
      ),
      copy(
        'The latest store description emphasizes family-friendly multiplayer, broad category coverage, and user-created sets so sessions can be adapted to any group.',
        'La descripción más reciente en tienda destaca el multijugador familiar, la amplitud de categorías y los sets creados por usuarios para adaptar las partidas a cualquier grupo.',
      ),
    ],
    highlights: [
      {
        title: copy('Drawing and gestures', 'Dibujo y mimos'),
        description: copy(
          'Switch between sketch-based clues and silent performance rounds to vary the pace.',
          'Alterna entre pistas dibujadas y rondas de mimos para variar el ritmo.',
        ),
      },
      {
        title: copy('Team setup in seconds', 'Equipos en segundos'),
        description: copy(
          'Build as many teams as needed and keep the whole experience on a single phone.',
          'Crea tantos equipos como necesites y mantén toda la experiencia en un solo móvil.',
        ),
      },
      {
        title: copy('Custom word packs', 'Packs de palabras propios'),
        description: copy(
          'Choose existing categories or create custom sets for family nights, parties, and classrooms.',
          'Elige categorías existentes o crea tus propios sets para reuniones, fiestas y aulas.',
        ),
      },
    ],
    featureAlt: copy(
      'Party Words game interface with prompts for drawing or gestures.',
      'Interfaz de Party Words con indicaciones para dibujar o gesticular.',
    ),
    downloads: '10K+',
    storeUrl: 'https://play.google.com/store/apps/details?id=drodriguez.apps.Words',
    iosStoreUrl: 'https://apps.apple.com/es/app/party-words/id1608977829',
    iconUrl: '/apps/party-words-icon.png',
    featureUrl: '/apps/party-words-banner.png',
    featured: false,
    palette: {
      accent: '#ff6b4a',
      soft: '#ffe0d6',
      gradient: 'linear-gradient(135deg, #ff6b4a 0%, #ffb36d 45%, #fff2cf 100%)',
    },
  },
  {
    slug: 'myholdings',
    name: 'MyHoldings',
    storeTitle: 'MyHoldings',
    category: copy('Finance', 'Finanzas'),
    updatedLabel: copy('January 3, 2025', '3 de enero de 2025'),
    summary: copy(
      'An investment portfolio tracker covering crypto, metals, currencies, and market monitoring with a homescreen widget.',
      'Un gestor de inversiones que cubre cripto, metales, divisas y seguimiento de mercado con widget para la pantalla de inicio.',
    ),
    previewSummary: copy(
      'Track a personal investment portfolio with live market data and a home screen widget.',
      'Sigue una cartera de inversión personal con mercado en tiempo real y widget en la pantalla de inicio.',
    ),
    description: [
      copy(
        'MyHoldings focuses on building a personal portfolio view that can mix very different asset types, then compare performance and profitability from one place.',
        'MyHoldings se centra en construir una vista de cartera personal que puede mezclar tipos de activos muy distintos y comparar rendimiento y rentabilidad desde un solo lugar.',
      ),
      copy(
        'The Play Store positioning is clear: simple monitoring, real-time market data, and a widget that keeps the portfolio visible without opening the app.',
        'La posición en Google Play es clara: seguimiento sencillo, datos de mercado en tiempo real y un widget que mantiene la cartera visible sin abrir la app.',
      ),
    ],
    highlights: [
      {
        title: copy('Mixed asset tracking', 'Seguimiento de activos mixtos'),
        description: copy(
          'Track crypto, precious metals, currencies, and other investment categories inside one portfolio.',
          'Sigue cripto, metales preciosos, divisas y otras categorías de inversión dentro de una sola cartera.',
        ),
      },
      {
        title: copy('Real-time visibility', 'Visibilidad en tiempo real'),
        description: copy(
          'Monitor gains and losses with live market context instead of manual spreadsheet updates.',
          'Controla ganancias y pérdidas con contexto de mercado en vivo en lugar de actualizar hojas manualmente.',
        ),
      },
      {
        title: copy('Widget-first utility', 'Utilidad orientada a widget'),
        description: copy(
          'The homescreen widget helps users stay informed even when they are not actively inside the app.',
          'El widget de inicio ayuda a mantenerse informado incluso cuando el usuario no está dentro de la app.',
        ),
      },
    ],
    featureAlt: copy(
      'MyHoldings portfolio tracking and financial overview screens.',
      'Pantallas de seguimiento de cartera y resumen financiero en MyHoldings.',
    ),
    downloads: '10+',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.drodriguez.my_holdings',
    iconUrl: '/apps/myholdings-icon.png',
    featureUrl: '/apps/myholdings-banner.png',
    featured: false,
    palette: {
      accent: '#2d76d9',
      soft: '#dceaff',
      gradient: 'linear-gradient(135deg, #2d76d9 0%, #7fb1ff 45%, #eef6ff 100%)',
    },
  },
  {
    slug: 'timetap',
    name: 'TimeTap',
    storeTitle: 'TimeTap: The Impossible Game',
    category: copy('Casual game', 'Juego casual'),
    updatedLabel: copy('August 21, 2024', '21 de agosto de 2024'),
    summary: copy(
      'A precision-timing challenge where players try to stop the hidden timer at exactly five seconds in local or online modes.',
      'Un reto de precisión donde los jugadores intentan detener el cronómetro oculto exactamente en cinco segundos, en modos local u online.',
    ),
    previewSummary: copy(
      'Stop the hidden timer at exactly five seconds in solo, local, or online play.',
      'Detén el cronómetro oculto en cinco segundos exactos en modo solitario, local u online.',
    ),
    description: [
      copy(
        'TimeTap takes an ultra-simple mechanic and pushes it into a tense multiplayer challenge: every round is about stopping the timer at the exact moment without seeing it run.',
        'TimeTap toma una mecánica ultra simple y la lleva a un reto multijugador con tensión: cada ronda consiste en detener el cronómetro en el instante exacto sin verlo avanzar.',
      ),
      copy(
        'The store description highlights one-phone multiplayer, leaderboard competition, and a newly added online mode to extend the game beyond local gatherings.',
        'La descripción en tienda destaca el multijugador con un solo móvil, la competición en rankings y un modo online añadido para llevar el juego más allá de las reuniones presenciales.',
      ),
    ],
    highlights: [
      {
        title: copy('One device, many players', 'Un dispositivo, muchos jugadores'),
        description: copy(
          'Play solo, with two people, or with four players sharing the same phone.',
          'Juega en solitario, con dos personas o con cuatro jugadores compartiendo el mismo móvil.',
        ),
      },
      {
        title: copy('Online competition', 'Competición online'),
        description: copy(
          'Challenge players around the world and push for better timing on the global leaderboard.',
          'Reta a jugadores de todo el mundo y busca mejores marcas en el ranking global.',
        ),
      },
      {
        title: copy('Fast repeatable sessions', 'Sesiones rápidas y repetibles'),
        description: copy(
          'Rounds are short, readable, and addictive, which makes the concept ideal for quick replays.',
          'Las rondas son cortas, legibles y adictivas, lo que hace que el concepto sea ideal para repetir una y otra vez.',
        ),
      },
    ],
    featureAlt: copy(
      'TimeTap gameplay screens and timing challenge interface.',
      'Pantallas de juego de TimeTap y su interfaz de reto de precisión.',
    ),
    downloads: '500+',
    rating: '5.0',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.drodriguez.time_tap',
    iosStoreUrl: 'https://apps.apple.com/es/app/timetap-the-impossible-game/id6763622142',
    iconUrl: '/apps/timetap-icon.png',
    featureUrl: '/apps/timetap-banner.png',
    featured: false,
    palette: {
      accent: '#7a3ff2',
      soft: '#e5dcff',
      gradient: 'linear-gradient(135deg, #251154 0%, #7a3ff2 45%, #f3e6ff 100%)',
    },
  },
  {
    slug: 'mind-your-math',
    name: 'Mind your Math',
    storeTitle: 'Mind your Math - Arithmetic',
    category: copy('Education', 'Educación'),
    updatedLabel: copy('September 3, 2024', '3 de septiembre de 2024'),
    summary: copy(
      'An arithmetic learning app that adapts to each child, supports goals, and helps parents track progress in real time.',
      'Una app de aprendizaje aritmético que se adapta a cada niño, permite definir objetivos y ayuda a las familias a seguir el progreso en tiempo real.',
    ),
    previewSummary: copy(
      'Adaptive arithmetic practice for kids with goals, reports, and multiplication drills.',
      'Práctica aritmética adaptativa para niños con objetivos, informes y tablas de multiplicar.',
    ),
    description: [
      copy(
        'Mind your Math is built to make arithmetic practice feel approachable, using exercises that cover addition, subtraction, multiplication, division, decimals, and multiplication tables.',
        'Mind your Math está pensada para que practicar aritmética resulte accesible, con ejercicios que cubren suma, resta, multiplicación, división, decimales y tablas de multiplicar.',
      ),
      copy(
        'The latest store copy emphasizes adaptive difficulty, parent goal setting, real-time reports, and support for early-childhood and primary-school learning.',
        'La descripción actual en tienda pone el foco en la dificultad adaptativa, los objetivos definidos por los padres, los informes en tiempo real y el apoyo al aprendizaje infantil y de primaria.',
      ),
    ],
    highlights: [
      {
        title: copy('Adaptive arithmetic practice', 'Práctica aritmética adaptativa'),
        description: copy(
          'Exercises become more challenging as each child improves, avoiding repetitive busywork.',
          'Los ejercicios se vuelven más desafiantes a medida que cada niño mejora, evitando la repetición sin valor.',
        ),
      },
      {
        title: copy('Goals and progress reports', 'Objetivos e informes de progreso'),
        description: copy(
          'Parents can define goals and review detailed progress data from the same app experience.',
          'Las familias pueden definir objetivos y revisar información detallada del progreso desde la misma experiencia.',
        ),
      },
      {
        title: copy('Friendly learning design', 'Diseño amable para aprender'),
        description: copy(
          'A clear interface and focused exercises make the app useful for home support and classroom reinforcement.',
          'Una interfaz clara y ejercicios enfocados hacen que la app sea útil tanto en casa como para reforzar el aula.',
        ),
      },
    ],
    featureAlt: copy(
      'Mind your Math learning screens and arithmetic exercises.',
      'Pantallas de aprendizaje y ejercicios aritméticos de Mind your Math.',
    ),
    downloads: '1K+',
    rating: '5.0',
    storeUrl: 'https://play.google.com/store/apps/details?id=mind.your.maths',
    iconUrl: '/apps/mind-your-math-icon.png',
    featureUrl: '/apps/mind-your-math-banner.png',
    featured: false,
    palette: {
      accent: '#276b34',
      soft: '#dff3dd',
      gradient: 'linear-gradient(135deg, #276b34 0%, #7db76d 45%, #f4f9e8 100%)',
    },
  },
  {
    slug: 'horas-extras',
    name: 'Horas Extras',
    storeTitle: 'Horas Extras: Calculadora LFT',
    category: copy('Utilities', 'Utilidades'),
    updatedLabel: copy('June 1, 2026', '1 de junio de 2026'),
    summary: copy(
      'A Mexican labor law calculator for overtime, Sunday premium, holiday pay, aguinaldo, salary conversion, and LFT article reference.',
      'Una calculadora de ley federal del trabajo para horas extras, prima dominical, día festivo, aguinaldo, conversión de salario y referencia de artículos de la LFT.',
    ),
    previewSummary: copy(
      'Calculate overtime, Sunday premium, holiday pay, and aguinaldo under Mexican labor law.',
      'Calcula horas extra, prima dominical, día festivo y aguinaldo según la Ley Federal del Trabajo.',
    ),
    description: [
      copy(
        'Horas Extras is a free, offline calculator that helps Mexican workers understand and verify their legal entitlements under the Ley Federal del Trabajo, covering overtime, Sunday premium, holiday pay, aguinaldo, and daily salary conversion.',
        'Horas Extras es una calculadora gratuita y offline que ayuda a los trabajadores mexicanos a entender y verificar sus derechos bajo la Ley Federal del Trabajo, incluyendo horas extras, prima dominical, día festivo, aguinaldo y conversión de salario diario.',
      ),
      copy(
        'The app also provides a plain-language reference for key LFT articles and lets users track overtime hours worked, including payment status.',
        'La app también ofrece una referencia en lenguaje claro de los artículos más importantes de la LFT y permite registrar las horas extra trabajadas, incluyendo su estado de pago.',
      ),
    ],
    highlights: [
      {
        title: copy('Multiple labor calculators', 'Múltiples calculadoras laborales'),
        description: copy(
          'Overtime double and triple pay, 25% Sunday premium, holiday triple pay, aguinaldo proportional or full, and monthly-to-daily salary conversion.',
          'Pago doble y triple por horas extras, 25% de prima dominical, pago triple en festivos, aguinaldo proporcional o completo, y conversión de salario mensual a diario.',
        ),
      },
      {
        title: copy('LFT article reference', 'Referencia de artículos LFT'),
        description: copy(
          'Read clear explanations of articles 58, 66-68, 71, 73-75, 76, and 87 covering workday limits, overtime, rest days, and benefits.',
          'Lee explicaciones claras de los artículos 58, 66-68, 71, 73-75, 76 y 87 sobre jornada, horas extras, días de descanso y prestaciones.',
        ),
      },
      {
        title: copy('Hour tracking with status', 'Registro de horas con estado'),
        description: copy(
          'Log overtime hours with date, rate, amount, and payment status to see what you are still owed at a glance.',
          'Registra horas extra con fecha, tarifa, monto y estado de pago para ver lo que te deben de un vistazo.',
        ),
      },
    ],
    featureAlt: copy(
      'Horas Extras calculator screens and labor rights reference.',
      'Pantallas de la calculadora de Horas Extras y referencia de derechos laborales.',
    ),
    downloads: '1+',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.drodriguez.horasextra',
    iconUrl: '/apps/horas-extras-icon.png',
    featureUrl: '/apps/horas-extras-banner.png',
    featured: false,
    palette: {
      accent: '#1a73e8',
      soft: '#d4e4fc',
      gradient: 'linear-gradient(135deg, #1a73e8 0%, #64b5f6 50%, #e3f2fd 100%)',
    },
  },
  {
    slug: 'lucra',
    name: 'Lucra',
    storeTitle: 'Lucra: Total Money Control',
    category: copy('Finance', 'Finanzas'),
    updatedLabel: copy('March 21, 2026', '21 de marzo de 2026'),
    summary: copy(
      'A personal finance dashboard for income, expenses, subscriptions, mortgages, savings, and investments in real time.',
      'Un panel de control financiero para ingresos, gastos, suscripciones, hipotecas, ahorros e inversiones en tiempo real.',
    ),
    previewSummary: copy(
      'Track income, expenses, subscriptions, mortgages, savings, and investments in one dashboard.',
      'Controla ingresos, gastos, suscripciones, hipotecas, ahorros e inversiones en un solo panel.',
    ),
    description: [
      copy(
        'Lucra is positioned as an all-in-one money companion that makes it easier to understand how income, recurring costs, subscriptions, and investments affect a global balance.',
        'Lucra se posiciona como un compañero financiero todo en uno que facilita entender cómo los ingresos, los costes recurrentes, las suscripciones y las inversiones afectan al balance global.',
      ),
      copy(
        'Its current Play Store description focuses on real-time earnings, personalized balances, and the ability to model everything from mortgages to stock positions from one interface.',
        'Su descripción actual en Google Play pone el foco en las ganancias en tiempo real, los balances personalizados y la capacidad de modelar desde hipotecas hasta posiciones en bolsa desde una sola interfaz.',
      ),
    ],
    highlights: [
      {
        title: copy('Real-time money visibility', 'Visibilidad financiera en tiempo real'),
        description: copy(
          'See how much money is coming in or going out without opening spreadsheets or calculators.',
          'Ve cuánto dinero entra o sale sin recurrir a hojas de cálculo ni calculadoras.',
        ),
      },
      {
        title: copy('Custom balances', 'Balances personalizados'),
        description: copy(
          'Create views around subscriptions, savings, debts, or investments depending on what matters most.',
          'Crea vistas alrededor de suscripciones, ahorros, deudas o inversiones según lo que más importe.',
        ),
      },
      {
        title: copy('One place for obligations', 'Un solo lugar para obligaciones'),
        description: copy(
          'Track mortgage payments, bills, and recurring commitments alongside long-term assets.',
          'Controla pagos de hipoteca, facturas y compromisos recurrentes junto con activos a largo plazo.',
        ),
      },
    ],
    featureAlt: copy(
      'Lucra finance dashboard with real-time balance screens.',
      'Panel financiero de Lucra con pantallas de balance en tiempo real.',
    ),
    downloads: '50+',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.drodriguez.profits',
    iosStoreUrl: 'https://apps.apple.com/es/app/profit/id1606458998',
    iconUrl: '/apps/lucra-icon.png',
    featureUrl: '/apps/lucra-banner.png',
    featured: true,
    palette: {
      accent: '#c4621b',
      soft: '#ffe4c9',
      gradient: 'linear-gradient(135deg, #633514 0%, #c4621b 45%, #fff2dd 100%)',
    },
  },
]

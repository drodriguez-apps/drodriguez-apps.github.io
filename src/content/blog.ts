import type { BlogPost, LocalizedText } from '@/types/content'

const copy = (en: string, es: string): LocalizedText => ({ en, es })

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-we-build-with-flutter',
    title: copy(
      'Why We Build Every App with Flutter',
      'Por qué desarrollamos todas nuestras apps con Flutter',
    ),
    summary: copy(
      'How choosing Flutter as our cross-platform framework lets us ship on Android, iOS, and macOS from a single codebase — and why we picked it over native development and React Native.',
      'Cómo elegir Flutter como framework multiplataforma nos permite publicar en Android, iOS y macOS desde un solo código — y por qué lo elegimos frente al desarrollo nativo y React Native.',
    ),
    date: '2025-08-15',
    readingTime: 7,
    tags: ['flutter', 'cross-platform', 'mobile-development', 'android', 'ios', 'macos'],
    relatedApps: ['drivecam', 'my-rents', 'ai-sabotage', 'home-handy', 'tandapp'],
    content: [
      {
        heading: copy('The Single-Codebase Promise', 'La promesa de un solo código fuente'),
        paragraphs: [
          copy(
            'When we founded Axis Labs, one of the first engineering decisions we faced was this: should we write separate native codebases for Android and iOS, adopt React Native, or go all-in on Flutter? After prototyping in all three, the answer became obvious. Flutter gave us a single Dart codebase that compiles to truly native ARM binaries, pixel-perfect rendering via its own Skia/Impeller engine, and a development loop so fast that hot reload felt like editing a live document.',
            'Cuando fundamos Axis Labs, una de las primeras decisiones de ingeniería que enfrentamos fue: ¿deberíamos escribir código nativo por separado para Android e iOS, adoptar React Native, o apostar todo a Flutter? Después de prototipar en los tres, la respuesta se hizo evidente. Flutter nos dio un solo código en Dart que compila a binarios nativos ARM reales, renderizado perfecto píxel a píxel con su propio motor Skia/Impeller, y un ciclo de desarrollo tan rápido que el hot reload se sentía como editar un documento en vivo.',
          ),
          copy(
            'Today, every app in our catalog — [DriveCam](/drivecam), [My Rents](/my-rents), [AI Sabotage](/ai-sabotage), [HomeHandy](/home-handy), [Tandapp](/tandapp), [The Impostor](/the-impostor), [Party Words](/party-words), [MyHoldings](/myholdings), [TimeTap](/timetap), [Mind your Math](/mind-your-math), [Horas Extras](/horas-extras), and [Lucra](/lucra) — ships from one repo per product. That is multiple apps live on Google Play, all available on the App Store, and several also running natively on macOS. One team, one language, multiple products.',
            'Hoy, cada app de nuestro catálogo — [DriveCam](/drivecam), [My Rents](/my-rents), [AI Sabotage](/ai-sabotage), [HomeHandy](/home-handy), [Tandapp](/tandapp), [The Impostor](/the-impostor), [Party Words](/party-words), [MyHoldings](/myholdings), [TimeTap](/timetap), [Mind your Math](/mind-your-math), [Horas Extras](/horas-extras) y [Lucra](/lucra) — se publica desde un solo repositorio por producto. Son multitud apps publicadas en Google Play, todas disponibles en la App Store, y varias también funcionando de forma nativa en macOS. Un equipo, un lenguaje, infinidad de productos.',
          ),
        ],
      },
      {
        heading: copy('Flutter vs. Native Development', 'Flutter vs. Desarrollo Nativo'),
        paragraphs: [
          copy(
            'Native development with Kotlin for Android and Swift for iOS is still the gold standard for maximum platform integration. But maintaining two codebases means double the bugs, double the QA cycles, and — most critically for a small studio — double the time-to-market. We estimated that going native-only would have cut our catalog in half. Features like the dual-camera recording in [DriveCam](/drivecam) or the real-time landlord dashboard in [My Rents](/my-rents) would have taken months longer to ship and keep in parity across platforms.',
            'El desarrollo nativo con Kotlin para Android y Swift para iOS sigue siendo el estándar para una integración máxima con la plataforma. Pero mantener dos bases de código significa el doble de errores, el doble de ciclos de QA y — lo más crítico para un estudio pequeño — el doble del tiempo para lanzar. Estimamos que ir solo con nativo habría reducido nuestro catálogo a la mitad. Funcionalidades como la grabación con doble cámara en [DriveCam](/drivecam) o el panel de propietario en tiempo real de [My Rents](/my-rents) habrían tardado meses más en publicarse y mantenerse en paridad entre plataformas.',
          ),
          copy(
            'Flutter bridges the gap. Its platform channel system lets us call native APIs when we need them — camera hardware, in-app purchases, background services — while keeping 95% of the code shared. We still write native code when it makes sense, but only once, wrapped in a clean Dart interface that both platforms consume.',
            'Flutter cierra la brecha. Su sistema de canales de plataforma nos permite llamar a APIs nativas cuando las necesitamos — hardware de cámara, compras dentro de la app, servicios en segundo plano — mientras mantenemos el 95% del código compartido. Seguimos escribiendo código nativo cuando tiene sentido, pero solo una vez, envuelto en una interfaz Dart limpia que ambas plataformas consumen.',
          ),
        ],
      },
      {
        heading: copy('Flutter vs. React Native', 'Flutter vs. React Native'),
        paragraphs: [
          copy(
            'React Native was the other serious contender. Its JavaScript ecosystem is massive, and the React component model is battle-tested. But after building test projects in both, three factors tipped the scale toward Flutter. First, performance: Flutter compiles to native code without a JavaScript bridge, which means smoother animations, faster startup, and no jank from async bridge serialization. [DriveCam](/drivecam) records video at while simultaneously streaming a GPS overlay — that kind of workload exposes bridge overhead immediately.',
            'React Native fue el otro contendiente serio. Su ecosistema JavaScript es enorme y el modelo de componentes React está más que probado. Pero después de crear proyectos de prueba en ambos, tres factores inclinaron la balanza hacia Flutter. Primero, el rendimiento: Flutter compila a código nativo sin un puente JavaScript, lo que significa animaciones más suaves, inicio más rápido y sin tirones por serialización asíncrona del bridge. [DriveCam](/drivecam) graba vídeo a mientras superpone GPS en tiempo real — esa carga de trabajo expone la latencia del bridge inmediatamente.',
          ),
          copy(
            'Second, UI consistency: Flutter draws every pixel itself, so a widget looks and behaves identically on a Pixel 9 and an iPhone 16. React Native delegates rendering to platform components, which can diverge in subtle but frustrating ways. Third, Dart: it is a strongly-typed, AOT-compiled language with excellent null safety, pattern matching, and tooling. For a studio building apps, type safety catches bugs before they reach users.',
            'Segundo, consistencia visual: Flutter dibuja cada píxel por sí mismo, así que un widget se ve y se comporta igual en un Pixel 9 y en un iPhone 16. React Native delega el renderizado a componentes de plataforma, que pueden divergir de formas sutiles pero frustrantes. Tercero, Dart: es un lenguaje fuertemente tipado, compilado AOT, con excelente seguridad de nulos, pattern matching y herramientas. Para un estudio que publica apps, la seguridad de tipos atrapa errores antes de que lleguen a los usuarios.',
          ),
        ],
      },
      {
        heading: copy('Desktop and Beyond', 'Escritorio y más allá'),
        paragraphs: [
          copy(
            "One of Flutter's underrated strengths is its desktop story. Several of our apps — including productivity tools like [TimeTap](/timetap) and financial trackers like [MyHoldings](/myholdings) — also run natively on macOS. The same adaptive layouts and responsive design patterns that make them work on phones and tablets scale up to laptop screens. No Electron wrapper, no web-view bridge — just compiled Dart running directly on Apple Silicon.",
            'Una de las ventajas menos valoradas de Flutter es su soporte para escritorio. Varias de nuestras apps — incluyendo herramientas de productividad como [TimeTap](/timetap) y rastreadores financieros como [MyHoldings](/myholdings) — también funcionan de forma nativa en macOS. Los mismos diseños adaptativos y patrones responsive que las hacen funcionar en teléfonos y tablets escalan a pantallas de portátil. Sin wrapper Electron, sin web-view — solo Dart compilado corriendo directamente en Apple Silicon.',
          ),
          copy(
            'This is the future we are investing in: write once, deploy everywhere that matters. Flutter lets a small, focused studio compete with teams ten times our size. We pick the right tool for the job, and for cross-platform mobile products, Flutter is that tool.',
            'Este es el futuro en el que estamos invirtiendo: escribe una vez, despliega en todas partes donde importa. Flutter permite que un estudio pequeño y enfocado compita con equipos diez veces nuestro tamaño. Elegimos la herramienta adecuada para el trabajo, y para productos móviles multiplataforma, Flutter es esa herramienta.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'every-app-deserves-its-own-website',
    title: copy('Every App Deserves Its Own Website', 'Cada app merece su propia página web'),
    summary: copy(
      'Why we build dedicated marketing websites for each of our mobile apps — and how targeted SEO drives organic downloads without spending on ads.',
      'Por qué creamos páginas web de marketing dedicadas para cada una de nuestras apps — y cómo el SEO dirigido impulsa descargas orgánicas sin gastar en publicidad.',
    ),
    date: '2025-09-01',
    readingTime: 6,
    tags: ['seo', 'marketing', 'websites', 'app-marketing', 'organic-growth'],
    relatedApps: ['drivecam', 'my-rents', 'ai-sabotage', 'home-handy', 'tandapp'],
    content: [
      {
        heading: copy('Beyond the App Store Listing', 'Más allá de la ficha en la tienda de apps'),
        paragraphs: [
          copy(
            'Most indie developers treat app store listings as their entire web presence. Upload screenshots, write a description, and hope the algorithm surfaces their app. We take a different approach. Every app in our catalog gets its own dedicated marketing website with a custom domain, tailored copy, and a focused SEO strategy. [DriveCam](/drivecam) lives at [drivecam.store](https://drivecam.store). [My Rents](/my-rents) has its home at [myrents-app.com](https://myrents-app.com). [AI Sabotage](/ai-sabotage) is showcased at [aisabotage.store](https://aisabotage.store). [HomeHandy](/home-handy) sits at [homehandy.store](https://homehandy.store). [Tandapp](/tandapp) runs on [tandapp.net](https://tandapp.net).',
            'La mayoría de desarrolladores indie tratan la ficha en la tienda como toda su presencia web. Suben capturas, escriben una descripción y esperan que el algoritmo muestre su app. Nosotros tomamos un enfoque diferente. Cada app de nuestro catálogo tiene su propia web de marketing con dominio personalizado, textos a medida y una estrategia SEO enfocada. [DriveCam](/drivecam) vive en [drivecam.store](https://drivecam.store). [My Rents](/my-rents) tiene su hogar en [myrents-app.com](https://myrents-app.com). [AI Sabotage](/ai-sabotage) se muestra en [aisabotage.store](https://aisabotage.store). [HomeHandy](/home-handy) se encuentra en [homehandy.store](https://homehandy.store). [Tandapp](/tandapp) funciona en [tandapp.net](https://tandapp.net).',
          ),
          copy(
            'Why invest the effort? Because search engines are the largest discovery channel outside of the stores themselves. When someone searches "dashcam app for driving lessons" or "rental management app for landlords," we want our landing pages — not just our store listings — to appear in results. A dedicated website lets us control the narrative, target long-tail keywords, and provide richer content that store listings cannot accommodate.',
            '¿Por qué invertir el esfuerzo? Porque los motores de búsqueda son el mayor canal de descubrimiento fuera de las propias tiendas. Cuando alguien busca "app de dashcam para clases de conducir" o "app de gestión de alquileres para propietarios," queremos que nuestras landing pages — no solo las fichas de la tienda — aparezcan en los resultados. Una web dedicada nos permite controlar el mensaje, apuntar a palabras clave long-tail y ofrecer contenido más rico que las fichas de la tienda no pueden albergar.',
          ),
        ],
      },
      {
        heading: copy('Anatomy of an App Landing Page', 'Anatomía de una landing page de app'),
        paragraphs: [
          copy(
            'Each marketing site follows a proven structure. A hero section with the app icon, name, and a one-line value proposition. A feature grid that highlights what makes the app unique. Real screenshots and, where possible, embedded demo videos. A download section with direct links to Google Play and the App Store. And a clean footer with privacy policy and support links for store compliance.',
            'Cada web de marketing sigue una estructura probada. Una sección hero con el icono de la app, nombre y una propuesta de valor en una línea. Un grid de funcionalidades que destaca lo que hace la app única. Capturas reales y, cuando es posible, vídeos demo integrados. Una sección de descarga con enlaces directos a Google Play y la App Store. Y un footer limpio con política de privacidad y enlaces de soporte para cumplimiento en tienda.',
          ),
          copy(
            'Every page includes structured data — JSON-LD schemas for SoftwareApplication, Organization, and BreadcrumbList — so search engines understand exactly what the page represents. Open Graph and Twitter Card meta tags ensure the links look polished when shared on social media. And every site is pre-rendered as static HTML for maximum Core Web Vitals scores.',
            'Cada página incluye datos estructurados — esquemas JSON-LD para SoftwareApplication, Organization y BreadcrumbList — para que los motores de búsqueda entiendan exactamente lo que la página representa. Las meta tags de Open Graph y Twitter Card aseguran que los enlaces se vean pulidos cuando se comparten en redes sociales. Y cada sitio se pre-renderiza como HTML estático para máximas puntuaciones en Core Web Vitals.',
          ),
        ],
      },
      {
        heading: copy('SEO as a Growth Engine', 'El SEO como motor de crecimiento'),
        paragraphs: [
          copy(
            'We treat each website as an SEO project. That means keyword research for every market the app targets, multilingual content for Spanish and English audiences, canonical URLs, proper internal linking, and ongoing monitoring with Google Search Console. The results speak for themselves: organic search accounts for a significant share of our download referrals, and it costs exactly zero in ad spend.',
            'Tratamos cada web como un proyecto SEO. Eso significa investigación de palabras clave para cada mercado al que apunta la app, contenido multilingüe para audiencias en español e inglés, URLs canónicas, enlazado interno adecuado y monitorización continua con Google Search Console. Los resultados hablan por sí solos: la búsqueda orgánica representa una parte significativa de nuestras referencias de descarga, y cuesta exactamente cero en inversión publicitaria.',
          ),
          copy(
            'This approach scales well. Once the first marketing site template is built and optimized, spinning up a new site for a new app is a matter of days, not weeks. The pattern is repeatable: same technical foundation, fresh content and keywords, deploy to a new domain. It is one of the highest-ROI activities in our entire product development pipeline.',
            'Este enfoque escala bien. Una vez que la primera plantilla de web de marketing está construida y optimizada, levantar un nuevo sitio para una nueva app es cuestión de días, no semanas. El patrón es repetible: misma base técnica, contenido y palabras clave frescos, desplegar a un nuevo dominio. Es una de las actividades con mayor ROI de todo nuestro proceso de desarrollo de producto.',
          ),
        ],
      },
      {
        heading: copy('The Compound Effect', 'El efecto compuesto'),
        paragraphs: [
          copy(
            'Having multiple dedicated app websites plus this central studio site creates a web of interlinked properties. Each site links back to Axis Labs, and each studio page links to the individual app sites. This cross-linking builds topical authority in search engines, strengthens domain trust signals, and gives users multiple pathways to discover our products. A user who finds [drivecam.store](https://drivecam.store) through a search query may then explore [axislabs.eu](https://axislabs.eu) and discover [My Rents](/my-rents) or [HomeHandy](/home-handy) — apps they did not know they needed.',
            'Tener multitud webs de apps dedicadas más este sitio central del estudio crea una red de propiedades interenlazadas. Cada sitio enlaza de vuelta a Axis Labs, y cada página del estudio enlaza a los sitios individuales de las apps. Este enlazado cruzado construye autoridad temática en los motores de búsqueda, refuerza señales de confianza del dominio y da a los usuarios múltiples caminos para descubrir nuestros productos. Un usuario que encuentra [drivecam.store](https://drivecam.store) a través de una búsqueda puede luego explorar [axislabs.eu](https://axislabs.eu) y descubrir [My Rents](/my-rents) o [HomeHandy](/home-handy) — apps que no sabía que necesitaba.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'open-source-tools-for-our-apps',
    title: copy(
      'Open-Source Tools We Built for Our Apps',
      'Herramientas open-source que creamos para nuestras apps',
    ),
    summary: copy(
      'From a Flutter monetization package on pub.dev to a Python lead-generation scraper — meet the open-source tools that power our app ecosystem.',
      'Desde un paquete de monetización Flutter en pub.dev hasta un scraper Python para generación de leads — conoce las herramientas open-source que impulsan nuestro ecosistema de apps.',
    ),
    date: '2025-09-18',
    readingTime: 8,
    tags: [
      'open-source',
      'flutter-package',
      'pub-dev',
      'python',
      'monetization',
      'lead-generation',
    ],
    relatedApps: ['drivecam', 'my-rents', 'ai-sabotage'],
    content: [
      {
        heading: copy(
          'Why We Open-Source Our Internal Tools',
          'Por qué liberamos nuestras herramientas internas',
        ),
        paragraphs: [
          copy(
            'Building multiple mobile apps teaches you patterns. The same monetization flow, the same ad-to-premium funnel, the same outbound marketing pipeline keeps showing up across projects. Instead of copy-pasting code between repos, we extract these patterns into standalone tools and publish them as open-source packages. The community benefits, we get free bug reports and contributions, and our own apps stay DRY.',
            'Desarrollar múltiples apps móviles te enseña patrones. El mismo flujo de monetización, el mismo embudo de anuncios a premium, el mismo pipeline de marketing outbound aparece una y otra vez entre proyectos. En lugar de copiar y pegar código entre repos, extraemos estos patrones en herramientas independientes y las publicamos como paquetes open-source. La comunidad se beneficia, nosotros recibimos reportes de errores y contribuciones gratis, y nuestras propias apps se mantienen DRY.',
          ),
        ],
      },
      {
        heading: copy(
          'rewarded_ad_counter: Monetization Made Simple',
          'rewarded_ad_counter: monetización simplificada',
        ),
        paragraphs: [
          copy(
            'The [rewarded_ad_counter](https://pub.dev/packages/rewarded_ad_counter) package, published on [pub.dev](https://pub.dev/packages/rewarded_ad_counter), solves a common indie developer problem: how do you let free users experience premium features without a hard paywall? Our approach is what we call the "sweat equity" model. Users watch a configurable number of rewarded video ads — say, three — and unlock ad-free access for a set number of days. If they prefer, a one-tap in-app purchase unlocks premium permanently.',
            'El paquete [rewarded_ad_counter](https://pub.dev/packages/rewarded_ad_counter), publicado en [pub.dev](https://pub.dev/packages/rewarded_ad_counter), resuelve un problema común de desarrolladores indie: ¿cómo dejas que los usuarios gratuitos experimenten funciones premium sin un paywall rígido? Nuestro enfoque es lo que llamamos el modelo de "esfuerzo por recompensa". Los usuarios ven una cantidad configurable de anuncios de vídeo recompensados — digamos, tres — y desbloquean acceso sin publicidad durante un número determinado de días. Si lo prefieren, una compra dentro de la app desbloquea premium permanentemente.',
          ),
          copy(
            'The package handles the entire lifecycle: loading and presenting AdMob rewarded videos via google_mobile_ads, managing in-app purchase streams with the official in_app_purchase plugin, persisting unlock state across app restarts using shared_preferences, and rendering ready-made UI widgets that drop into any Flutter app with minimal configuration. It ships with full theme support, localizable strings with interpolation templates, and — critically — zero default ad unit IDs. Developers must provide their own AdMob IDs, eliminating the risk of accidental revenue leakage.',
            'El paquete gestiona todo el ciclo de vida: cargar y presentar vídeos recompensados de AdMob mediante google_mobile_ads, gestionar flujos de compras dentro de la app con el plugin oficial in_app_purchase, persistir el estado del desbloqueo entre reinicios usando shared_preferences, y renderizar widgets de UI listos para usar que se integran en cualquier app Flutter con configuración mínima. Incluye soporte completo de temas, cadenas localizables con plantillas de interpolación y — crucialmente — cero IDs de unidad de anuncios por defecto. Los desarrolladores deben proporcionar sus propios IDs de AdMob, eliminando el riesgo de pérdida accidental de ingresos.',
          ),
          copy(
            'What would normally take hundreds of lines of error-prone glue code — coordinating ad event listeners, billing streams, countdown timers, and reactive UI state — becomes a ten-line widget integration. The package is already in production across several of our apps and handles thousands of ad views monthly.',
            'Lo que normalmente requeriría cientos de líneas de código propenso a errores — coordinar listeners de eventos de anuncios, flujos de facturación, temporizadores de cuenta atrás y estado reactivo de UI — se convierte en una integración de widget de diez líneas. El paquete ya está en producción en varias de nuestras apps y gestiona miles de visualizaciones de anuncios mensualmente.',
          ),
        ],
      },
      {
        heading: copy(
          'companies-scraper: B2B Lead Generation at Zero Cost',
          'companies-scraper: generación de leads B2B a coste cero',
        ),
        paragraphs: [
          copy(
            'Most mobile developers believe App Store Optimization and paid advertising are the only acquisition channels. But for vertical B2B apps — property management tools for real estate agencies, dashcam solutions for driving schools — cold outbound outreach directly to business owners can yield far higher conversion rates at virtually zero acquisition cost. That is why we built [companies-scraper](https://github.com/erperejildo/companies-scraper).',
            'La mayoría de desarrolladores móviles creen que la optimización de la tienda de apps y la publicidad pagada son los únicos canales de adquisición. Pero para apps B2B verticales — herramientas de gestión de propiedades para inmobiliarias, soluciones de dashcam para autoescuelas — el contacto directo outbound con dueños de negocios puede dar tasas de conversión mucho más altas a un coste de adquisición prácticamente nulo. Por eso creamos [companies-scraper](https://github.com/erperejildo/companies-scraper).',
          ),
          copy(
            '[companies-scraper](https://github.com/erperejildo/companies-scraper) is a Python CLI tool that discovers local business websites by language and geographical region, extracts verified corporate email addresses, and outputs deduplicated contact lists. It supports eight languages, leverages offline geographical data down to the city level for precision targeting, and uses DuckDuckGo search instead of expensive Google APIs. It can decode Cloudflare-obfuscated emails, filter out free webmail addresses, and persist results incrementally so long-running discovery jobs never lose progress.',
            '[companies-scraper](https://github.com/erperejildo/companies-scraper) es una herramienta CLI en Python que descubre sitios web de negocios locales por idioma y región geográfica, extrae direcciones de correo corporativo verificadas y genera listas de contactos deduplicadas. Soporta ocho idiomas, aprovecha datos geográficos offline hasta nivel de ciudad para segmentación precisa, y usa búsqueda de DuckDuckGo en lugar de costosas APIs de Google. Puede decodificar correos ofuscados por Cloudflare, filtrar direcciones de correo gratuitas, y persistir resultados de forma incremental para que trabajos largos nunca pierdan progreso.',
          ),
          copy(
            'We use it actively to drive targeted outreach campaigns for [My Rents](/my-rents) (contacting real estate agencies) and [DriveCam](/drivecam) (reaching driving schools across the whole world). The tool replaces paid services like Apollo or Hunter.io, saving hundreds of dollars monthly while delivering higher-quality, geo-targeted leads. The full source code is available on [GitHub](https://github.com/erperejildo/companies-scraper) for other developers who need a free, privacy-respecting lead generation engine.',
            'Lo usamos activamente para impulsar campañas de contacto dirigido para [My Rents](/my-rents) (contactando inmobiliarias) y [DriveCam](/drivecam) (llegando a autoescuelas en todo el mundo). La herramienta reemplaza servicios de pago como Apollo o Hunter.io, ahorrando cientos de euros al mes mientras entrega leads de mayor calidad y geo-segmentados. El código fuente completo está disponible en [GitHub](https://github.com/erperejildo/companies-scraper) para otros desarrolladores que necesiten un motor de generación de leads gratuito y respetuoso con la privacidad.',
          ),
        ],
      },
      {
        heading: copy(
          'Two Pillars of an Indie Developer Stack',
          'Dos pilares del stack de un desarrollador indie',
        ),
        paragraphs: [
          copy(
            'Together, these two projects represent the two pillars of a sustainable indie app business: in-app monetization mechanics and out-of-app user acquisition tooling. [rewarded_ad_counter](https://pub.dev/packages/rewarded_ad_counter) turns free users into revenue without degrading their experience. [companies-scraper](https://github.com/erperejildo/companies-scraper) finds the right users and puts your app in front of them. Both are free, both are open-source, and both are battle-tested across our twelve-app portfolio. We believe in building tools that help ourselves first and the community second — and publishing them so everyone can benefit.',
            'Juntos, estos dos proyectos representan los dos pilares de un negocio de apps indie sostenible: mecánicas de monetización dentro de la app y herramientas de adquisición de usuarios fuera de ella. [rewarded_ad_counter](https://pub.dev/packages/rewarded_ad_counter) convierte usuarios gratuitos en ingresos sin degradar su experiencia. [companies-scraper](https://github.com/erperejildo/companies-scraper) encuentra los usuarios correctos y pone tu app frente a ellos. Ambos son gratuitos, ambos son open-source y ambos están probados en batalla en nuestro portfolio. Creemos en crear herramientas que nos ayuden primero a nosotros y después a la comunidad — y publicarlas para que todos se beneficien.',
          ),
        ],
      },
    ],
  },
]

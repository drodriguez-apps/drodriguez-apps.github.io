import type { LegalDocument, LocalizedText } from '@/types/content'

const copy = (en: string, es: string): LocalizedText => ({ en, es })

export const privacyDocument: LegalDocument = {
  title: copy('Privacy policy', 'Politica de privacidad'),
  summary: copy(
    'This privacy notice explains how Daniel Rodriguez handles personal information when people use the portfolio website and the published mobile apps.',
    'Este aviso de privacidad explica como Daniel Rodriguez gestiona la informacion personal cuando las personas usan la web del portfolio y las aplicaciones moviles publicadas.',
  ),
  sections: [
    {
      title: copy('Information collection and use', 'Recopilacion y uso de informacion'),
      paragraphs: [
        copy(
          'The current policy used across the existing site states that the main personal data collected directly by the apps can include an email address, name or nickname, and profile picture when an account is created.',
          'La politica actual utilizada en el sitio existente indica que los datos personales recogidos directamente por las apps pueden incluir correo electronico, nombre o apodo y foto de perfil cuando se crea una cuenta.',
        ),
        copy(
          'Some apps also allow users to store their own information, such as property details, contracts, phone numbers, documents, or notes. That information is stored to provide the requested in-app functionality and is not intended for unrelated processing.',
          'Algunas apps tambien permiten que el usuario almacene su propia informacion, como detalles de propiedades, contratos, telefonos, documentos o notas. Esa informacion se guarda para ofrecer la funcionalidad solicitada dentro de la app y no para otros tratamientos ajenos.',
        ),
      ],
    },
    {
      title: copy('Cookies and third-party services', 'Cookies y servicios de terceros'),
      paragraphs: [
        copy(
          'The apps and website do not rely on first-party cookies as a core feature, but third-party libraries and services may use cookies or similar identifiers to improve their own services.',
          'Las apps y la web no dependen de cookies propias como funcionalidad principal, pero librerias y servicios de terceros pueden usar cookies o identificadores similares para mejorar sus propios servicios.',
        ),
        copy(
          'Where relevant, users should also review the Data safety details published on Google Play and the App Store and the privacy terms of external providers linked from the apps.',
          'Cuando corresponda, las personas usuarias tambien deben revisar los detalles de seguridad de datos publicados en Google Play y App Store y las politicas de privacidad de los proveedores externos enlazados desde las apps.',
        ),
      ],
    },
    {
      title: copy(
        'Service providers and external links',
        'Proveedores de servicio y enlaces externos',
      ),
      paragraphs: [
        copy(
          'Third-party companies or individuals may be used to facilitate the service, provide service-related functions, or analyze how the apps are used. Those providers may access limited personal information only as needed to perform their tasks.',
          'Pueden utilizarse empresas o personas terceras para facilitar el servicio, prestar funciones relacionadas o analizar el uso de las apps. Esos proveedores solo pueden acceder a informacion personal limitada cuando sea necesario para realizar su trabajo.',
        ),
        copy(
          'The services can include links to third-party websites such as Google Play, the App Store, or LinkedIn. Daniel Rodriguez is not responsible for the privacy practices of those external sites.',
          'Los servicios pueden incluir enlaces a sitios de terceros como Google Play, App Store o LinkedIn. Daniel Rodriguez no se hace responsable de las practicas de privacidad de esos sitios externos.',
        ),
      ],
    },
    {
      title: copy('Changes to this policy', 'Cambios en esta politica'),
      paragraphs: [
        copy(
          'This privacy policy may be updated from time to time. Any changes become effective as soon as they are published on this website.',
          'Esta politica de privacidad puede actualizarse ocasionalmente. Cualquier cambio entra en vigor en cuanto se publica en esta web.',
        ),
      ],
    },
    {
      title: copy('Contact', 'Contacto'),
      paragraphs: [
        copy(
          'Questions or suggestions about this privacy policy can be sent to drodriguez.apps@gmail.com.',
          'Las dudas o sugerencias sobre esta politica de privacidad pueden enviarse a drodriguez.apps@gmail.com.',
        ),
      ],
    },
  ],
}

export const eulaDocument: LegalDocument = {
  title: copy('End-user license agreement (EULA)', 'Acuerdo de licencia de usuario final (EULA)'),
  summary: copy(
    'This agreement governs the use of the app, defines acceptable behavior for user-generated content, and describes the moderation tools available to keep the community safe.',
    'Este acuerdo regula el uso de la app, define el comportamiento aceptable para el contenido generado por usuarios y describe las herramientas de moderacion disponibles para mantener la comunidad segura.',
  ),
  sections: [
    {
      title: copy('Acceptance of terms', 'Aceptacion de los terminos'),
      paragraphs: [
        copy(
          'By creating an account or using this application, you agree to this end-user license agreement. If you do not agree with these terms, you must not use the app.',
          'Al crear una cuenta o utilizar esta aplicacion, aceptas este acuerdo de licencia de usuario final. Si no estas de acuerdo con estos terminos, no debes usar la app.',
        ),
      ],
    },
    {
      title: copy('Description of the service', 'Descripcion del servicio'),
      paragraphs: [
        copy(
          'This app helps users organize and coordinate group savings rounds (tandas). It includes group chat, payment tracking, reminders, and shared records. Users can send messages, share proof photos, and post updates visible to other members of the same group.',
          'Esta app ayuda a organizar y coordinar rondas de ahorro grupales (tandas). Incluye chat de grupo, seguimiento de pagos, recordatorios y registros compartidos. Los usuarios pueden enviar mensajes, compartir fotos de comprobantes y publicar novedades visibles para otros miembros del mismo grupo.',
        ),
      ],
    },
    {
      title: copy('User-generated content rules', 'Normas sobre contenido generado por usuarios'),
      paragraphs: [
        copy(
          'There is no tolerance for objectionable content or abusive users. By using this app, you agree not to post, share, or transmit any content that is unlawful, defamatory, obscene, discriminatory, threatening, harassing, abusive, pornographic, or otherwise objectionable.',
          'No hay tolerancia para contenido objetable ni usuarios abusivos. Al usar esta app, aceptas no publicar, compartir ni transmitir contenido que sea ilegal, difamatorio, obsceno, discriminatorio, amenazante, acosador, abusivo, pornografico o de cualquier otro modo objetable.',
        ),
        copy(
          'You are solely responsible for the content you publish. The developer reserves the right to remove any content and suspend or terminate any account that violates these rules, at its sole discretion and without prior notice.',
          'Eres el unico responsable del contenido que publicas. El desarrollador se reserva el derecho de eliminar cualquier contenido y suspender o cancelar cualquier cuenta que infrinja estas normas, a su entera discrecion y sin previo aviso.',
        ),
      ],
    },
    {
      title: copy('Content filtering', 'Filtrado de contenido'),
      paragraphs: [
        copy(
          'The app employs automated and manual methods to filter objectionable content before and after it is posted. Content that is flagged by the automated filters is held for review and not displayed publicly until it has been cleared.',
          'La app utiliza metodos automaticos y manuales para filtrar contenido objetable antes y despues de su publicacion. El contenido senalado por los filtros automaticos se retiene para revision y no se muestra publicamente hasta que ha sido revisado.',
        ),
        copy(
          'The developer continuously monitors the platform and reviews user-generated content to prevent the spread of material that violates these terms or applicable law.',
          'El desarrollador supervisa la plataforma de forma continua y revisa el contenido generado por usuarios para evitar la difusion de material que incumpla estos terminos o la legislacion aplicable.',
        ),
      ],
    },
    {
      title: copy('Reporting objectionable content', 'Denuncia de contenido objetable'),
      paragraphs: [
        copy(
          'Users can flag or report objectionable content directly through the app using the built-in reporting feature available in every group chat and post. To report content, tap the flag or report icon next to the offending message or user, select a reason from the available categories, and submit the report.',
          'Los usuarios pueden marcar o denunciar contenido objetable directamente desde la app utilizando la funcion de denuncia integrada disponible en cada chat de grupo y publicacion. Para denunciar contenido, toca el icono de bandera o denuncia junto al mensaje o usuario ofensivo, selecciona un motivo de las categorias disponibles y envia el informe.',
        ),
        copy(
          'All reports are reviewed by the developer. Users who submit false or malicious reports may have their own accounts suspended.',
          'Todas las denuncias son revisadas por el desarrollador. Los usuarios que envien denuncias falsas o maliciosas podran ver suspendidas sus propias cuentas.',
        ),
      ],
    },
    {
      title: copy('Blocking abusive users', 'Bloqueo de usuarios abusivos'),
      paragraphs: [
        copy(
          "Users can block any other user at any time through the app by accessing the offending user's profile or message and selecting the block option. Once a user is blocked, all content from that user is immediately removed from the blocking user's feed and the blocked user can no longer interact with or contact the blocking user.",
          'Los usuarios pueden bloquear a cualquier otro usuario en cualquier momento desde la app accediendo al perfil o mensaje del usuario ofensivo y seleccionando la opcion de bloqueo. Una vez que un usuario es bloqueado, todo el contenido de ese usuario se elimina inmediatamente del feed del usuario que bloquea y el usuario bloqueado ya no puede interactuar ni contactar con el usuario que lo bloqueo.',
        ),
        copy(
          'When a user is blocked, the developer is automatically notified of the block event along with the relevant context. This notification allows the developer to investigate the incident and take appropriate action.',
          'Cuando un usuario es bloqueado, el desarrollador recibe una notificacion automatica del evento de bloqueo junto con el contexto relevante. Esta notificacion permite al desarrollador investigar el incidente y tomar las medidas oportunas.',
        ),
      ],
    },
    {
      title: copy(
        'Developer response and enforcement',
        'Respuesta del desarrollador y aplicacion de medidas',
      ),
      paragraphs: [
        copy(
          'The developer commits to reviewing all reports of objectionable content within 24 hours. Upon confirming a violation, the developer will remove the offending content and may eject the user who provided it from the platform permanently. Account termination decisions are final.',
          'El desarrollador se compromete a revisar todas las denuncias de contenido objetable en un plazo de 24 horas. Al confirmar una infraccion, el desarrollador eliminara el contenido ofensivo y podra expulsar al usuario que lo proporciono de la plataforma de forma permanente. Las decisiones de cancelacion de cuenta son definitivas.',
        ),
        copy(
          'Repeated violations or severe first-time offenses may result in immediate and permanent account termination. The developer may also report illegal content or behavior to the relevant authorities.',
          'Las infracciones repetidas o las infracciones graves cometidas por primera vez pueden dar lugar a la cancelacion inmediata y permanente de la cuenta. El desarrollador tambien podra denunciar contenidos o conductas ilegales ante las autoridades competentes.',
        ),
      ],
    },
    {
      title: copy('Contact information', 'Informacion de contacto'),
      paragraphs: [
        copy(
          'To report concerns, ask questions about these terms, or contact the developer for any reason, email drodriguez.apps@gmail.com. Users can also use the in-app reporting and blocking tools described above.',
          'Para informar de problemas, hacer preguntas sobre estos terminos o contactar con el desarrollador por cualquier motivo, envia un correo a drodriguez.apps@gmail.com. Los usuarios tambien pueden utilizar las herramientas de denuncia y bloqueo descritas anteriormente dentro de la app.',
        ),
      ],
    },
    {
      title: copy('Changes to this agreement', 'Cambios en este acuerdo'),
      paragraphs: [
        copy(
          'This EULA may be updated from time to time. Users will be notified of material changes. Continued use of the app after changes take effect constitutes acceptance of the updated terms.',
          'Este acuerdo de licencia puede actualizarse ocasionalmente. Los usuarios recibiran una notificacion de los cambios significativos. El uso continuado de la app despues de la entrada en vigor de los cambios constituye la aceptacion de los terminos actualizados.',
        ),
      ],
    },
  ],
}

export const termsDocument: LegalDocument = {
  title: copy('Terms and conditions', 'Terminos y condiciones'),
  summary: copy(
    'These terms describe the conditions for using the website, apps, and related services operated by Daniel Rodriguez.',
    'Estos terminos describen las condiciones de uso de la web, las apps y los servicios relacionados operados por Daniel Rodriguez.',
  ),
  sections: [
    {
      title: copy('Conditions of use', 'Condiciones de uso'),
      paragraphs: [
        copy(
          'By using the website, the published applications, or any related services, you accept the terms described on this page.',
          'Al usar la web, las aplicaciones publicadas o cualquier servicio relacionado, aceptas los terminos descritos en esta pagina.',
        ),
      ],
    },
    {
      title: copy('Privacy policy', 'Politica de privacidad'),
      paragraphs: [
        copy(
          'Before continuing to use the services, please review the privacy policy so you understand how user data is handled.',
          'Antes de seguir utilizando los servicios, revisa la politica de privacidad para entender como se gestionan los datos de usuario.',
        ),
      ],
    },
    {
      title: copy('Intellectual property', 'Propiedad intelectual'),
      paragraphs: [
        copy(
          'All materials, products, and services provided in the apps or website remain the property of Daniel Rodriguez and are protected by applicable intellectual-property laws.',
          'Todos los materiales, productos y servicios ofrecidos en las apps o en la web siguen siendo propiedad de Daniel Rodriguez y estan protegidos por la normativa aplicable de propiedad intelectual.',
        ),
        copy(
          'Users may not reproduce or redistribute protected materials without permission. If users publish their own content inside the services, they grant a non-exclusive license for that content to be displayed and processed as needed to provide the service.',
          'Las personas usuarias no pueden reproducir ni redistribuir materiales protegidos sin permiso. Si publican contenido propio dentro de los servicios, otorgan una licencia no exclusiva para mostrarlo y procesarlo en la medida necesaria para prestar el servicio.',
        ),
      ],
    },
    {
      title: copy('Communications and applicable law', 'Comunicaciones y ley aplicable'),
      paragraphs: [
        copy(
          'Communications may be electronic, including notices sent by email or published on the website. These terms are governed by the laws of Spain.',
          'Las comunicaciones pueden realizarse por medios electronicos, incluyendo avisos enviados por correo o publicados en la web. Estos terminos se rigen por las leyes de Espana.',
        ),
      ],
    },
    {
      title: copy('Disputes, comments, and accounts', 'Conflictos, comentarios y cuentas'),
      paragraphs: [
        copy(
          'Disputes related to the services are subject to the jurisdiction described in the existing website terms. Users must not publish unlawful, obscene, defamatory, or harmful content through the services.',
          'Los conflictos relacionados con los servicios quedan sometidos a la jurisdiccion descrita en los terminos del sitio actual. Las personas usuarias no deben publicar contenido ilegal, obsceno, difamatorio o perjudicial a traves de los servicios.',
        ),
        copy(
          'If an app includes user accounts, each user is responsible for maintaining the confidentiality of their credentials and for the activity carried out under that account.',
          'Si una app incluye cuentas de usuario, cada persona es responsable de mantener la confidencialidad de sus credenciales y de la actividad realizada bajo esa cuenta.',
        ),
      ],
    },
    {
      title: copy('Contact', 'Contacto'),
      paragraphs: [
        copy(
          'Questions or suggestions about these terms can be sent to drodriguez.apps@gmail.com.',
          'Las dudas o sugerencias sobre estos terminos pueden enviarse a drodriguez.apps@gmail.com.',
        ),
      ],
    },
  ],
}

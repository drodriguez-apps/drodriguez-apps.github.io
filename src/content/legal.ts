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
          'Where relevant, users should also review the Data safety details published on Google Play and the privacy terms of external providers linked from the apps.',
          'Cuando corresponda, las personas usuarias tambien deben revisar los detalles de seguridad de datos publicados en Google Play y las politicas de privacidad de los proveedores externos enlazados desde las apps.',
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
          'The services can include links to third-party websites such as Google Play or LinkedIn. Daniel Rodriguez is not responsible for the privacy practices of those external sites.',
          'Los servicios pueden incluir enlaces a sitios de terceros como Google Play o LinkedIn. Daniel Rodriguez no se hace responsable de las practicas de privacidad de esos sitios externos.',
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

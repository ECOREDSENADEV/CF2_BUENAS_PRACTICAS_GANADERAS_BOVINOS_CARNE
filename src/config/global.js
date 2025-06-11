export default {
  global: {
    Name: 'Gestión y Evaluación en Ganadería de Carne',
    Description:
      'La capacitación tiene como objetivo fortalecer las competencias para supervisar la implementación de BPG en sistemas de producción de bovinos de carne, asegurando el cumplimiento de la normativa vigente y promoviendo la sostenibilidad productiva. Se enfoca en la evaluación y monitoreo continuo de procesos clave como manejo animal, sanidad, alimentación, bienestar y gestión ambiental, con el fin de garantizar prácticas responsables, eficientes y trazables en toda la cadena productiva',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Trazabilidad de la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos de desarrollo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Sistema Nacional de Identificación e Información del Ganado Bovino (SINIGAN)',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Herramientas clave para la gestión del personal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Capacitación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Asignación de funciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Evaluación del desempeño.',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipologías según el momento y el responsable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas e instrumentos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Evaluaciones especializadas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Importancia de la evaluación integral',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Hallazgos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias correctivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Subsanación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Aplicación de acciones correctivas',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Buenas prácticas ganaderas de carne',
      referencia:
        'TvAgro. (2019). Ventajas de Contar con la Certificacion en Buenas Practicas Ganaderas- TvAgro por Juan Gonzalo Angel  [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/2dwgpN2cl6Q',
    },
    {
      tema: 'Buenas prácticas ganaderas de carne',
      referencia:
        'TvAgro (2018). La importancia de Implementar Buenas Practicas Ganaderas- TvAgro por Juan Gonzalo Angel.  [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/5FGxknhQuVk',
    },
    {
      tema: 'Indicadores productivos',
      referencia:
        'TvAgro (2015).Como Producir Carne eficiéntemente - Montería Colombia- TvAgro por Juan Gonzalo Angel  [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/OxRkFHVZArU',
    },
    {
      tema: 'Trazabilidad',
      referencia:
        'TvAgro. (2022).  Trazabilidad y seguridad en el ganado bovino - TvAgro por Juan Gonzalo Angel Restrepo [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zH4jgQ350Ss&t=27s',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento de información',
      significado:
        'proceso de conservar los datos y registros (físicos o digitales) sobre las actividades ganaderas para garantizar trazabilidad y auditorías.',
    },
    {
      termino: 'Asignación de funciones',
      significado:
        'distribución formal de roles y tareas específicas a los trabajadores según los protocolos de Buenas Prácticas Ganaderas (BPG).',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas preventivas que se implementan para evitar el ingreso y diseminación de enfermedades infecciosas en los sistemas ganaderos.',
    },
    {
      termino: 'Capacitación',
      significado:
        'formación técnica y continua del personal para garantizar el cumplimiento de normas sanitarias, de bienestar animal y sostenibilidad.',
    },
    {
      termino: 'Certificación',
      significado:
        'proceso mediante el cual una unidad ganadera obtiene un aval oficial por cumplir con los estándares establecidos de BPG.',
    },
    {
      termino: 'Comunicación',
      significado:
        'estrategia que permite mantener coordinación y articulación en procesos ganaderos, especialmente en temas como vacunación y manejo sanitario.',
    },
    {
      termino: 'Evaluación',
      significado:
        'proceso continuo de verificación del cumplimiento de las BPG mediante visitas, listas de chequeo y revisión de registros.',
    },
    {
      termino: 'Gestión de personal',
      significado:
        'conjunto de acciones administrativas para organizar, supervisar, capacitar y evaluar al recurso humano en la producción ganadera.',
    },
    {
      termino: 'Herramientas de gestión',
      significado:
        'instrumentos como manuales de funciones, registros de asistencia, EPP y planes de formación usados para optimizar la gestión del personal.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'condición de un alimento que garantiza que es seguro para el consumo humano, libre de contaminantes físicos, químicos o biológicos.',
    },
    {
      termino: 'Instituto Colombiano Agropecuario (ICA)',
      significado:
        'entidad nacional encargada de reglamentar y supervisar la implementación de BPG, trazabilidad y sanidad animal en Colombia.',
    },
    {
      termino: 'Registro animal',
      significado:
        'proceso de identificación individual de cada bovino con dispositivos (aretes, chips) y la documentación correspondiente a su historial productivo y sanitario.',
    },
    {
      termino: 'Sanidad animal',
      significado:
        'estado de salud del ganado; se garantiza mediante planes sanitarios preventivos como vacunación y control de enfermedades.',
    },
    {
      termino:
        'Sistema Nacional de Identificación e Información del Ganado Bovino (SINIGAN)',
      significado:
        'plataforma oficial que permite la identificación y trazabilidad de cada animal bovino en Colombia.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de seguir el recorrido de un animal o producto cárnico desde su origen hasta el consumidor final, garantizando inocuidad y control sanitario.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2004). Ley 914 de 2004.',
      link: '',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos (Fedegán). (s.f.). Guía de implementación de las BPG en sistemas ganaderos. Bogotá: Federación Colombiana de Ganaderos.',
      link: '',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos (Fedegán). (s.f.). Manual de trazabilidad en sistemas ganaderos. ',
      link: '',
    },
    {
      referencia: 'Fedegán. (s.f.). Buenas Prácticas Ganaderas. ',
      link: 'https://www.fedegan.org.co/programas/buenas-practicas-ganaderas',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020). Resolución No. 068167 del 20 de mayo de 2020: Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas (BPG) en la producción de carne de bovinos y/o bufalinos. ',
      link:
        'https://www.ica.gov.co/getattachment/db5b53ff-0752-4884-90b8-a7ce15ce1ead/2020R68167.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (s.f.). Buenas prácticas ganaderas. ',
      link:
        'https://www.ica.gov.co/getattachment/35f0d70e-b2dd-4bfc-ac1f-ba169b5ccdca/Publicacion-5.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (s.f.). Guía técnica de Buenas Prácticas Ganaderas en carne bovina.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (s.f.). Publicación técnica sobre buenas prácticas ganaderas para carne bovina. ',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2021). Implementación de Buenas Prácticas Ganaderas y su efecto sobre la calidad de la carne bovina. ',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/79485/17587001.2021.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

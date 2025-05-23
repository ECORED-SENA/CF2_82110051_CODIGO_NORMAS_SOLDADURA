export default {
  global: {
    Name:
      'Formatos estandarizados para procedimientos de soldadura: WPS, PQR Y WPQR',
    Description:
      'El componente formativo explica los formatos WPS, PQR y WPQR, esenciales en la soldadura para garantizar calidad y cumplimiento normativo. Describe variables del proceso como voltaje, amperaje y tipo de metal, además de condiciones controladas como uso de equipos y supervisión. Incluye criterios de calificación para soldadores, bibliografía técnica y un glosario con términos clave.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo:
          'Formatos para evidenciar la calificación de soldadura y soldadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Variables del proceso de soldeo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Condiciones controladas',
            hash: 't_1_2',
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
        download: 'downloads/82110051_CF02_DU.zip',
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
      tema:
        'Formatos para evidenciar la calificación de soldadura y soldadores',
      referencia: 'SENA. (2005). Calificación de Procedimientos y de Persona.',
      tipo: 'Documento',
      descarga: 'downloads/Anexo_1.pdf',
    },
    {
      tema:
        'Formatos para evidenciar la calificación de soldadura y soldadores',
      referencia:
        'Ely Ramirez. (2021). API 1104 Examen de certificacion AWS CWI parte C: Calificacion de soldadores. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yoGkJq_ZO9Q&ab_channel=ElyRamirez',
    },
    {
      tema: 'Variables del proceso de soldeo',
      referencia:
        'SOLDADORES EN LINEA ().CURSO SOLDADURA GMAW (MIG). [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tGkqV0W0Fy8',
    },
    {
      tema: 'Condiciones controladas',
      referencia:
        'Intecap efi. (2022). La soldadura en atmosfera controlada. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Dz8_0RBgzCE&ab_channel=intecapefi',
    },
  ],
  glosario: [
    {
      termino: 'Amperaje',
      significado:
        'flujo de electrones entre el metal base y el electrodo, generando el calor necesario para la soldadura.',
    },
    {
      termino: 'Calidad',
      significado: 'cumplimiento inherente de los requisitos normativos.',
    },
    {
      termino: 'Calor aportado',
      significado:
        'relación entre voltaje, amperaje y velocidad de avance que influye en la calidad de la soldadura.',
    },
    {
      termino: 'Escoria',
      significado:
        'capa residual formada en el cordón de soldadura que debe limpiarse antes del siguiente pase.',
    },
    {
      termino: 'Formato WPS',
      significado:
        'documento que especifica las variables esenciales para realizar una soldadura repetible y de calidad.',
    },
    {
      termino: 'Metal de aporte',
      significado:
        'material metálico usado para rellenar y unir las piezas en el proceso de soldadura.',
    },
    {
      termino: 'Posiciones de soldadura',
      significado:
        'configuración geométrica de las uniones que define cómo se aplican los cordones de soldadura.',
    },
    {
      termino: 'Supervisión',
      significado:
        'actividad realizada por un experto en soldadura para guiar y garantizar la calidad en el proceso productivo.',
    },
    {
      termino: 'Velocidad de avance',
      significado:
        'rapidez con la que el soldador avanza durante la ejecución del cordón de soldadura.',
    },
    {
      termino: 'Voltaje',
      significado:
        'diferencia de potencial eléctrico entre la pinza de masa y la punta del electrodo durante la soldadura.',
    },
  ],
  referencias: [
    {
      referencia: 'American Petroleum Institute. (2015). Norma API 1104.',
      link: '',
    },
    {
      referencia:
        'Asociación Americana de Soldadura. (2015). Formato Interactivo - WPQR.',
      link: '',
    },
    {
      referencia:
        'Asociación Americana de Soldadura. (2015). Formato Interactivo - WPS; PQR.',
      link: '',
    },
    {
      referencia:
        'Sociedad Americana de Ingenieros Mecánicos. (2015). Código ASME Sección IX - Soldadura: Desarrollo y calificación de procedimientos y soldadores.',
      link: '',
    },
    {
      referencia:
        'Solano Montaña, E. (2007). WPS ASME - Calificación y procedimiento de platina y tubería según ASME.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hivo Alfonso Patarroyo Pulido',
          cargo: 'Experto temático',
          centro: 'Centro de Materiales y Ensayos - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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

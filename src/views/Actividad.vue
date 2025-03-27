<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Estándares de calidad en soldadura',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Identificar los formatos estandarizados para procedimientos de soldadura, las variables del proceso de soldeo y las condiciones controladas.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué significa WPS en soldadura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Especificación de soldadura para procedimientos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Especificación del procedimiento de soldadura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluación de procedimientos soldadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro de procedimientos de soldadura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué tipo de documento valida y califica un WPS?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Especificación técnica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documento de control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro de calificación del procedimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Informe de mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué valor se mide entre la pinza de masa y la punta del electrodo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Amperaje.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Voltaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Velocidad de avance.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calor aportado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el resultado de multiplicar voltaje por amperaje y dividirlo por la velocidad de avance?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calor residual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escoria acumulada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resistencia mecánica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calor aportado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de materiales suelen usarse como metal de aporte en soldadura?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plásticos, resinas y compuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aceros, aleaciones de aluminio, bronces y latones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aleaciones de titanio y polímeros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cables eléctricos y carbones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué documento incluye los resultados de ensayos como tensión y dureza?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formato de calificación de soldadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro de calificación del procedimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Documento de especificación general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Informe de supervisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el equipo adecuado para soldadura con electrodo revestido?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Equipo SMAW.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Antorcha TIG.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pistola MIG.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ninguna de las anteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué método es recomendado para limpiar la escoria entre pases?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de soldadura autógena.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pica escoria o grata manual.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calor residual del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicación de electrodos más gruesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Los formatos WPS, PQR y WPQR garantizan que los soldadores y procedimientos cumplen con estándares de calidad.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La velocidad de avance no afecta la calidad del cordón de soldadura.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué capa se genera en la superficie del cordón de soldadura y debe ser removida antes del siguiente pase?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Polvo residual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escoria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Óxido protector.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué institución define la clasificación de electrodos para soldadura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instituto de Normas Técnicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organización Internacional de Soldadura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'AWS (American Welding Society).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sociedad Americana de Ingenieros Mecánicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué posición de soldadura está influenciada por la disposición geométrica de las uniones?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Posición de carga.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Posición inclinada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Posiciones de soldadura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Configuración angular.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué elemento se utiliza para registrar las variables esenciales en un procedimiento de soldadura?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formatos estandarizados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Dosier técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Supervisión técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manuales operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué profesional firma la validación de los formatos WPS?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Supervisor de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inspector técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ingeniero encargado de soldadura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Operario de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

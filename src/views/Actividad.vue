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
      tema: 'Buenas Prácticas Ganaderas en Producción de Carne Bovina',
      titulo: 'Cuestionario',
      introduccion:
        'Fortalecer los conocimientos sobre las Buenas Prácticas Ganaderas (BPG) aplicadas en la producción de carne bovina.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal del sistema de trazabilidad en las Buenas Prácticas Ganaderas (BPG)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Controlar la comercialización de carne en el mercado local.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la trazabilidad de los animales solo durante el transporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asegurar la inocuidad, sanidad y bienestar animal desde el origen hasta el consumidor final.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: ' Registrar únicamente los nacimientos de los animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué instrumento permite verificar paso a paso el cumplimiento de protocolos en auditorías BPG?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bitácora de visitas técnicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lista de chequeo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Encuesta de percepción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manual de capacitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Qué indicador sanitario alerta sobre fallas en bioseguridad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tasa de natalidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tasa de mortalidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tasa de conversión alimenticia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluación de confort térmico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué acción se considera una estrategia correctiva en BPG?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Capacitar nuevamente al personal tras una no conformidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Planificar una venta de ganado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar un nacimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar el mercado local.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué institución administra el Sistema Nacional de Identificación e Información del Ganado Bovino (SINIGAN)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Agricultura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fedegán.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'INVIMA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Instituto Colombiano Agropecuario (ICA).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el propósito de la evaluación externa en las BPG?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entrenar al personal interno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Supervisar el inventario de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Capacitar a los operarios en bienestar animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Validar objetivamente el cumplimiento de estándares oficiales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el objetivo principal de la capacitación continua del personal en predios BPG?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prepararlos para exportar carne.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar su salario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar la correcta aplicación de protocolos de sanidad, manejo y bioseguridad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Generar estadísticas internas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes es un requisito de bioseguridad en los predios certificados?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tener al menos dos razas de ganado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Llevar una bitácora de ingreso y salida de personas, vehículos y animales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Usar exclusivamente alimento importado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el acceso al agua de los animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué se busca con la implementación de estrategias correctivas en la evaluación de BPG?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar el sistema productivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Corregir no conformidades detectadas y mejorar el cumplimiento normativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Contratar más personal administrativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el documento oficial que regula la certificación en BPG para carne bovina en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 101 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 1500 de 2007.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución No. 068167 de 2020 del ICA.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Resolución 779 de 2006.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El FMA se utiliza únicamente al vender animales en el extranjero.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El bienestar animal es uno de los pilares de las Buenas Prácticas Ganaderas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La trazabilidad hacia delante registra el origen de los animales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La evaluación externa la realiza una entidad certificadora como el ICA.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El almacenamiento de registros puede hacerse tanto en formatos físicos como digitales.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
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

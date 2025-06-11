<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Evaluación
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0   
        figure
          img(src="@/assets/curso/temas/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1     
        .bg-color-2.tarjeta.p-5(data-aos="fade-left")
            p.mb-0 La evaluación en las Buenas Prácticas Ganaderas (BPG) es una herramienta estratégica, estructurada y continua que permite monitorear y verificar el cumplimiento de los estándares establecidos en la producción ganadera. Se considera una de las fases más críticas del proceso de implementación, ya que valora de manera integral todas las acciones ejecutadas en el predio.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Su finalidad principal es determinar si una unidad ganadera cumple con los requisitos exigidos por normativas nacionales, como los lineamientos del ICA, e internacionales, como los de la OIE, la FAO y el Codex Alimentarius.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Evaluación en la práctica: metodología y factores clave
        
        p.mb-5 La evaluación se lleva a cabo mediante visitas técnicas, revisión documental y verificación directa de aspectos esenciales como sanidad animal, bioseguridad, manejo productivo y bienestar animal. Durante el proceso, los funcionarios del ICA emplean listas de chequeo oficiales para constatar que las prácticas implementadas estén alineadas con los principios de inocuidad, sostenibilidad y trazabilidad. Según los resultados, el predio:

        .row.mb-5.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-7.p-5.h-100(data-aos="fade-up")
              img(src="@/assets/curso/temas/tema3/3.svg", style="max-width: 70px").mx-auto.mb-3
              p.mb-0.text-center Puede ser certificado
          .col-lg-4
            .bg-color-8.p-5.h-100(data-aos="fade-down")
              img(src="@/assets/curso/temas/tema3/4.svg", style="max-width: 70px").mx-auto.mb-3
              p.mb-0.text-center Recibir recomendaciones para mejoras y avanzar en el proceso de certificación.
    p.mb-5 Para que la evaluación sea efectiva, es fundamental:
    .row.mb-5
      .col-lg-4.mb-4.text-center(data-aos="fade-up")
        .tarjeta.tarjeta-avatar-slide.bg-color-5.p-4.h-100
          img(src="@/assets/curso/temas/tema3/5.svg", style="max-width: 90px").mx-auto.mb-3
          h4 Implementación correcta
          p Asegura que la evaluación sea funcional y objetiva.
      .col-lg-4.mb-4.text-center(data-aos="fade-down")
        .tarjeta.tarjeta-avatar-slide.bg-color-5.p-4.h-100
          img(src="@/assets/curso/temas/tema3/6.svg", style="max-width: 90px").mx-auto.mb-3
          h4 Participación activa del personal
          p Permite identificar fortalezas y debilidades en las prácticas.
      .col-lg-4.mb-4.text-center(data-aos="fade-up")
        .tarjeta.tarjeta-avatar-slide.bg-color-5.p-4.h-100
          img(src="@/assets/curso/temas/tema3/7.svg", style="max-width: 90px").mx-auto.mb-3
          h4 Recursos económicos adecuados
          p Facilitan la ejecución de las actividades evaluativas y correctivas.
    
    p.mb-5 Esta estrategia permite aprobar, ajustar o rediseñar actividades en función de los materiales, herramientas y resultados observados.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Objetivos de la evaluación en BPG
    
    .bg-full-width.bg-color-1.mb-3
      .px-4.px-md-5.py-4
        p.mb-5 La evaluación en el marco de las Buenas Prácticas Ganaderas tiene como propósito fundamental asegurar el cumplimiento de estándares técnicos y normativos. Sus objetivos principales son:

        .row.mb-5.justify-content-center
          .col-lg-8
            .bg-color-7.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/temas/tema3/8.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Verificar la conformidad normativa en aspectos sanitarios, ambientales y de bienestar animal.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Detectar no conformidades o desviaciones en la implementación.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Establecer líneas base para la mejora continua.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Generar información trazable y verificable para los sistemas de certificación y comercialización.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Alcance de la evaluación
        
        p.mb-5 La evaluación no se limita al animal como tal, sino que abarca todo el sistema de producción, incluyendo:

        .row.mb-5.justify-content-center
          .col-lg-8
            .bg-color-7.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/temas/tema3/9.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Infraestructura
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Gestión del personal
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Registro documental
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Manejo de insumos y residuos
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Procesos de alimentación, sanidad, bioseguridad y trazabilidad

        .titulo-con-imagen(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Tipos de evaluación según su momento de aplicación
        
    p.mb-5 Cada tipo de evaluación tiene un propósito específico dentro del ciclo de mejora continua y certificación:

    .row.justify-content-center
      .col-lg-8
        div.bg-color-3.tarjeta.p-5
          .row.justify-content-center.align-items-center
            .col-md-6.col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/10.svg", data-aos="zoom-in")
            .col-lg-7
              h4(data-aos="fade-left").mb-4.text-white <em>Podcast</em> 
      
              TarjetaAudio.color-primario.bg-color-white.mb-3(
                texto="Tipos de evaluación según su momento de aplicación "
                tiempo
                :audio="require('../assets/curso/podcast/podcast1.mp3')"
              )
    
    separador

    .titulo-segundo.color-acento-contenido
      h2 3.1 Tipologías según el momento y el responsable
    
    p.mb-5 La evaluación en BPG se clasifica tanto por el momento en que se realiza como por la entidad o persona responsable de su ejecución. Esta clasificación permite organizar mejor los objetivos, las herramientas y la periodicidad de cada tipo de evaluación.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Tipos de evaluación por momento de aplicación
        
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th.bg-color-10 Tipo de Evaluación
                th.bg-color-10 Cuando se realiza
                th.bg-color-10 Objetivo
                th.bg-color-10 Resultado esperado
            tbody.bg-color-white
              tr
                td Diagnóstica
                td Antes de implementar las BPG
                td Identificar el estado inicial y brechas
                td Generar línea base para plan de acción
              tr
                td Formativa
                td Durante la implementación de las BPG
                td Monitorear avances y corregir desviaciones
                td Optimizar operaciones en tiempo real
              tr
                td Sumativa
                td Al finalizar un ciclo productivo
                td Evaluar impacto y eficacia de acciones ejecutadas
                td Tomar decisiones para futuros ciclos

        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Tipos de evaluación por responsable
        
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-10 Tipo
                th.bg-color-10 Responsable
                th.bg-color-10 Frecuencia sugerida
                th.bg-color-10 Objetivos clave
                th.bg-color-10 Herramientas principales
            tbody.bg-color-white
              tr
                td Evaluación Interna
                td Personal del predio (administrador o técnico)
                td Trimestral o semestral
                td Verificar cumplimiento de BPG, detectar fallas y retroalimentar al equipo
                td Listas de chequeo internas, manuales operativos
              tr
                td Evaluación Externa
                td Entidades certificadoras, como el ICA
                td Anual o según plan vigente
                td Validar cumplimiento oficial, emitir recomendaciones y respaldar certificación ante el mercado
                td ICA 3-138 v.4, inspección in situ, entrevistas, observación directa

    separador

    .titulo-segundo.color-acento-contenido
      h2 3.2 Técnicas e instrumentos
    
    p.mb-5 Las técnicas de evaluación permiten verificar el cumplimiento de estándares sanitarios, ambientales y productivos, apoyando la toma de decisiones y garantizando la trazabilidad en el sistema ganadero.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema3/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Listas de chequeo
                p.text-center Instrumentos sistemáticos que verifican punto por punto los protocolos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema3/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Observación directa
                p.text-center Inspección visual de animales, instalaciones y condiciones sanitarias.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema3/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Análisis documental
                p.text-center Revisión de registros (vacunación, alimentación, tratamientos, mortalidad).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema3/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Entrevistas y encuestas
                p.text-center Evalúan conocimiento y compromiso del personal con las BPG.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema3/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Indicadores de desempeño
                p.text-center Miden productividad: ganancia de peso, tasa de natalidad, consumo de agua, etc.
  
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema3/11.png', alt='')
        
        .titulo-con-imagen.mb-3(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Estructura típica de una lista de chequeo
    
    p.mb-5 Incluye criterios técnicos y evidencias necesarias para verificar el cumplimiento. Se califican como cumple / no cumple / no aplica y se anotan observaciones:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Estructura típica de una lista de chequeo
        
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th.bg-color-10 Ítem
                th.bg-color-10 Descripción
                th.bg-color-10 Cumple
                th.bg-color-10 No cumple
                th.bg-color-10 Observaciones
            tbody.bg-color-white
              tr
                td 1.1
                td Registro actualizado de vacunación
                td Si
                td
                td Faltan datos de 5 animales
              tr
                td 2.3
                td Acceso permanente a agua limpia
                td
                td No
                td Se recomienda aumentar bebederos

    separador

    .titulo-segundo.color-acento-contenido
      h2 3.3 Evaluaciones especializadas
    
    p.mb-5 Estas evaluaciones se enfocan en áreas específicas del sistema productivo ganadero:

    .bg-full-width.bg-fondo-slider.tarjeta
      .p-5
        .tarjeta.bg-color-12.p-4
          //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- text-small se usa para que los títulos sean mas pequeños
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="Evaluación de resultados").justify-content-around.align-items-center
              .col-md-4.mb-4.mb-md-0
                p.mb-0 Medir resultados a corto y largo plazo del proyecto.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema3/17.png', alt='Texto que describa la imagen')
            .row(titulo="Evaluación de impacto").justify-content-around.align-items-center
              .col-md-4.mb-4.mb-md-0
                p.mb-0 Comparar efectos entre implementar o no un programa.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema3/18.png', alt='Texto que describa la imagen')
            .row(titulo="Evaluación productiva").justify-content-around.align-items-center
              .col-md-4.mb-4.mb-md-0
                p.mb-0 Medir estadísticas de producción y rendimiento animal.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema3/19.png', alt='Texto que describa la imagen')
            .row(titulo="Evaluación de calidad").justify-content-around.align-items-center
              .col-md-4.mb-4.mb-md-0
                p.mb-0 Verificar si el producto cumple los estándares definidos.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema3/20.png', alt='Texto que describa la imagen')
            .row(titulo="Evaluación financiera").justify-content-around.align-items-center
              .col-md-4.mb-4.mb-md-0
                p.mb-0 Analizar la eficiencia en el uso de recursos económicos y administrativos.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema3/21.png', alt='Texto que describa la imagen')
            .row(titulo="Evaluación para solución de problemas").justify-content-around.align-items-center
              .col-md-4.mb-4.mb-md-0
                p.mb-0 Identificar causas raíz y aplicar soluciones correctivas oportunas.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema3/22.png', alt='Texto que describa la imagen')
    
    separador

    .titulo-segundo.color-acento-contenido
      h2 3.4 Importancia de la evaluación integral
    
    .bg-full-width.bg-color-1.mb-3
      .px-4.px-md-5.py-4
        p.mb-5 La combinación equilibrada de evaluaciones internas, externas, técnicas y especializadas fortalece el sistema ganadero al:

        .row.mb-3.justify-content-center
          .col-lg-8
            .bg-color-7.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/temas/tema3/23.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Detectar áreas de mejora.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Aumentar la eficiencia operativa.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Garantizar el cumplimiento de exigencias sanitarias, ambientales y de bienestar animal.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Elevar la competitividad comercial del predio a nivel nacional e internacional.
        
        .row.justify-content-center.mb-5
          .col-lg-10
            div.px-4.px-md-5.py-4.bg-color-8.tarjeta.mb-5
              .row
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema3/24.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h4 Nota final
                  p.mb-0 La ganadería colombiana está en constante evolución. Por ello, las normativas se actualizan regularmente para mantener la competitividad en los mercados internacionales. ¡Esté siempre informado!

        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/temas/tema3/25.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0        
            .bg-color-2.tarjeta.p-5(data-aos="fade-left")
                p.mb-0 Las variables de evaluación de la cadena productiva de ganado de carne son pilares fundamentales del correcto funcionamiento de la empresa ganadera, ayudan a direccionar el establecimiento al buen manejo y cumplimiento de BPG en la ganadería de carne colombiana.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Indicadores considerados en la evaluación de las BPG
        
        p Los indicadores que se tienen en cuenta en la evaluación de las Buenas Prácticas Ganaderas (BPG) están orientados a medir la eficiencia y productividad de la unidad productiva. Una descripción más amplia se encuentra en el Componente 1 del curso, sobre indicadores de gestión.

    .row.justify-content-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Indicadores productivos
        
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th.bg-color-10 Indicador
                th.bg-color-10 Definición
                th.bg-color-10 Fórmula
                th.bg-color-10 Frecuencia recomendada
            tbody.bg-color-white
              tr
                td Tasa de crecimiento
                td Incremento de peso por día en animales
                td (Peso final - Peso inicial) / días
                td Mensual o por lote
              tr
                td Conversión alimenticia
                td Cantidad de alimento consumido por cada kg de carne producido
                td kg de alimento / kg de ganancia de peso
                td Por ciclo productivo
              tr
                td Índice de natalidad
                td % de vacas que paren sobre el total expuesto a reproducción
                td (Nacimientos / Vacas cubiertas) x 100
                td Anual
    
    .row.justify-content-center.mb-3
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Indicadores sanitarios
        
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th.bg-color-10 Indicador
                th.bg-color-10 Definición
                th.bg-color-10 Utilidad
            tbody.bg-color-white
              tr
                td Tasa de morbilidad
                td % de animales enfermos sobre el total del hato
                td Evalúa control de enfermedades
              tr
                td Tasa de mortalidad
                td % de muertes registradas sobre la población total
                td Alerta sobre fallas en bioseguridad
              tr
                td Cumplimiento de vacunación
                td % de animales vacunados frente al total objetivo
                td Evalúa desempeño del plan sanitario

        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Indicadores ambientales
        
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th.bg-color-10 Indicador
                th.bg-color-10 Ejemplo
                th.bg-color-10 Método de evaluación
            tbody.bg-color-white
              tr
                td Manejo de residuos sólidos
                td Uso de compostaje o estercoleros
                td Observación, registros fotográficos
              tr
                td Consumo de agua por animal
                td Medición por animal individual
                td Medición diaria/semanal con dispositivos
              tr
                td Áreas de conservación
                td % del área en cobertura natural o reforestación
                td GPS, planos, registros
    
    .row.justify-content-center.mb-3
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Indicadores de Bienestar Animal
        
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th.bg-color-10 Indicador
                th.bg-color-10 Parámetro evaluado
            tbody.bg-color-white
              tr
                td Evaluación de confort térmico
                td Presencia de sombras naturales o artificiales
              tr
                td Calidad del piso y corrales
                td Existencia de lodo, lesiones en extremidades
              tr
                td Conducta animal
                td Observación de comportamientos normales vs. estereotipias
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Herramientas para el monitoreo de indicadores
    
    p.mb-5 El monitoreo de los indicadores puede realizarse a través de diversas herramientas tecnológicas y manuales, tales como:

    .bg-full-width.bg-color-1.mb-3
      .px-4.px-md-5.py-4
        .row.mb-3.justify-content-center
          .col-lg-8
            .bg-color-7.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/temas/tema3/26.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 <b>Software de gestión ganadera</b> (ej. Software ganadero).
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 <b>Registros manuales:</b> fichas técnicas, cuadernos de pesaje, hojas Excel.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 <b>Tecnologías emergentes:</b> sensores de peso, collares con GPS y medidores de temperatura.
        
        .row.mb-3.justify-content-center
          .col-lg-8
            .bg-color-7.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/temas/tema3/27.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    h5 Ejemplo práctico de análisis
                    p Una finca realiza el monitoreo mensual de la tasa de crecimiento en un lote de 20 novillos:
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 <b>Peso inicial promedio: 300 kg</b>
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 <b>Peso final después de 30 días: 330 kg</b>
                    h5 Cálculo:
                    p Tasa de crecimiento=330-300/30=1.0 kg/día
                    p Un crecimiento de 1.0 kg/día se considera bueno, especialmente si la conversión alimenticia no supera 6:1 en sistemas de pastoreo con suplemento.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Interpretación y toma de decisiones
        
        p.mb-5 El monitoreo de indicadores no debe limitarse a la recolección de datos. Debe usarse para:

        .row.mb-3.justify-content-center
          .col-lg-8
            .bg-color-7.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/temas/tema3/28.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Ajustar la ración alimenticia si la conversión es deficiente.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Revisar el plan sanitario si aumenta la mortalidad.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Redistribuir animales si hay problemas de bienestar térmico.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Cambiar el protocolo de partos si baja la tasa de natalidad.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Metodología de evaluación de las BPG
    
    p.mb-5 La metodología para evaluar las BPG en una unidad productiva incluye los siguientes pasos:

    .bg-full-width.bg-color-1.mb-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-6
            .bg-color-8.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema3/29.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Diagnóstico inicial
                  p.mb-0 Evaluación del estado actual en relación con los estándares.

          .col-lg-6
            .bg-color-8.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema3/30.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Identificación de brechas
                  p.mb-0 Detección de diferencias entre lo actual y lo requerido.

        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-6
            .bg-color-8.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema3/31.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Plan de acción
                  p.mb-0 Estrategias y acciones correctivas.

          .col-lg-6
            .bg-color-8.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema3/32.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Implementación
                  p.mb-0 Ejecución de las acciones planificadas.

        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-6
            .bg-color-8.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema3/33.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Seguimiento y evaluación continua
                  p.mb-0 Monitoreo para asegurar efectividad y realizar ajustes.

        p.mb-5 La evaluación se basa en una lista de verificación estructurada que contempla los siguientes criterios:

        .row.justify-content-center.mb-3
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Tabla 9.
              span Criterios evaluados en la metodología
            
            .tabla-a.color-acento-botones.mb-5
              table
                thead
                  tr
                    th.bg-color-10 Categoría
                    th.bg-color-10 Aspectos Evaluados
                tbody.bg-color-white
                  tr
                    td Infraestructura y bienestar animal
                    td Instalaciones para el alojamiento y manejo de animales.
                  tr
                    td Alimentación y medio ambiente
                    td Prácticas sostenibles en alimentación y manejo ambiental.
                  tr
                    td Sanidad animal y bioseguridad
                    td Programas sanitarios y medidas de bioseguridad.
                  tr
                    td Uso de medicamentos veterinarios
                    td Control y registro de medicamentos.
                  tr
                    td Saneamiento básico y personal
                    td Higiene y capacitación del personal.
                  tr
                    td Registros y trazabilidad
                    td Documentación que permite rastrear historial de animales y prácticas.


    .bg-full-width.bg-color-1.mb-3
      .px-4.px-md-5.py-4
        p.mb-5 Cada criterio es calificado y ponderado según su importancia, lo que permite determinar el nivel de cumplimiento del predio y su elegibilidad para la certificación.
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Instrumentos oficiales de evaluación

        p.mb-5 El principal instrumento oficial es la lista de verificación del ICA, según la Resolución No. 068167 del 20 de mayo de 2020, que establece los requisitos para la certificación en producción de carne bovina. También se utilizan los siguientes registros específicos:
      
        .row.mb-3.justify-content-center
          .col-lg-8
            .bg-color-7.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/temas/tema3/34.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Registros de vacunación y tratamientos veterinarios.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Registros de alimentación y manejo nutricional.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Registros de bioseguridad y limpieza.
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Registros de capacitación del personal.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Criterios y exigencias
        
        p.mb-5 La lista de chequeo debe ser diligenciada conforme a la normatividad del ente de control y adaptarse a toda la cadena de producción. Esto permite obtener una evaluación detallada, objetiva y completa del cumplimiento de las BPG.

        .tarjeta.bg-color-3.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/35.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.bg-color-4 Listas de chequeo para la evaluación de Buenas Prácticas Ganaderas
                  p.text-white Se invita a leer el documento Listas de chequeo para la evaluación de Buenas Prácticas Ganaderas, donde se abordan aspectos generales de suma importancia para la aplicación de estrategias de evaluación en la implementación de las BPG asignadas por el ICA. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        
        separador

        .titulo-segundo.color-acento-contenido
          h2 3.5 Hallazgos
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema3/36.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0        
        .bg-color-2.tarjeta.p-5(data-aos="fade-left")
            p.mb-0 Los estudios y evaluaciones realizadas en predios ganaderos han permitido identificar una serie de fortalezas y áreas de mejora recurrentes en la implementación de las Buenas Prácticas Ganaderas (BPG). Estos hallazgos subrayan la necesidad de una evaluación continua y la aplicación de planes de mejora para alcanzar y mantener la certificación en BPG.

    .row.justify-content-center.mb-3
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Hallazgos comunes en la evaluación de BPG
        
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th.bg-color-10 Fortalezas
                th.bg-color-10 Áreas de mejora
            tbody.bg-color-white
              tr
                td Cumplimiento en aspectos relacionados con la ubicación del predio y la salud, seguridad y bienestar de los trabajadores.
                td Deficiencias en el manejo ambiental y la disposición de residuos.
              tr
                td Implementación de programas de vacunación y control sanitario.
                td Falta de registros actualizados y completos. Necesidad de mejorar la infraestructura para el manejo y bienestar animal. 
             



             
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

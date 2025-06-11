<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de personal
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0 
            figure
              img(src="@/assets/curso/temas/tema2/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1       
            .bg-color-2.tarjeta.p-5(data-aos="fade-left")
                p.mb-0 La <b>gestión del personal</b> en una empresa ganadera certificada en Buenas Prácticas Ganaderas (BPG) comprende un conjunto de acciones orientadas a <b>organizar, capacitar, supervisar y evaluar</b> al equipo humano responsable de la producción pecuaria. Su finalidad es garantizar el cumplimiento de los estándares exigidos por el ICA y por los mercados nacionales e internacionales en aspectos como sanidad animal, inocuidad alimentaria, bienestar animal y sostenibilidad.
        
        .row.justify-content-center
          .col-lg-8
            .bg-color-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema2/2.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0 Una gestión adecuada asegura el correcto desempeño de cada trabajador y reduce los riesgos operativos, sanitarios y de calidad.
    
    separador

    .titulo-segundo.color-acento-contenido
      h2 2.1 Herramientas clave para la gestión del personal
    
    p.mb-5 Las empresas ganaderas deben implementar y mantener actualizadas herramientas que permitan una administración eficiente del talento humano:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema2/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Manuales de funciones
              p Especifican tareas, responsabilidades y requisitos de cada cargo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema2/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Registros de asistencia y actividades
              p Permiten el seguimiento diario del cumplimiento laboral.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema2/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Planes de formación
              p Cronogramas anuales de capacitación técnica para actualizar conocimientos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema2/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Sistemas de comunicación interna
              p Facilitan la coordinación operativa y el reporte de novedades.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Equipos de Protección Personal (EPP)
              p Dotación obligatoria: botas, guantes, overoles, mascarillas, entre otros.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Comunicación y gestión de personal: estrategias interrelacionadas

        p Aunque la comunicación y la gestión del personal son procesos independientes, están estrechamente relacionadas dentro del macroproceso de producción ganadera. Una comunicación efectiva favorece la interacción entre equipos y entidades del sector, mientras que una buena gestión de personal asegura el cumplimiento de responsabilidades y normas.
        p.mb-5 A continuación, se comparan sus características principales:

        .row.mb-5.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-7.p-5.h-100(data-aos="fade-up")
              img(src="@/assets/curso/temas/tema2/8.svg", style="max-width: 70px").mx-auto.mb-3
              h4.text-center Comunicación
              p.mb-0 Permite la articulación constante en temas como vacunación, normativas, producción y manejo de las BPG. Favorece una comunidad productiva reconocida.
          .col-lg-4
            .bg-color-8.p-5.h-100(data-aos="fade-down")
              img(src="@/assets/curso/temas/tema2/9.svg", style="max-width: 70px").mx-auto.mb-3
              h4.text-center Gestión del personal
              p.mb-0 Incluye todas las actividades administrativas de recursos humanos, desde la contratación hasta la terminación del contrato, abarcando la SST.
    
    .row.justify-content-center
      .col-lg-10
        div.px-4.px-md-5.py-4.bg-color-9.tarjeta.mb-5
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4 Nota práctica
              p.mb-0 Para aplicar correctamente estas estrategias en la finca ganadera, registre en su libreta personal los aspectos más destacados. Esto le permitirá consolidar aprendizajes y mejorar la implementación de las BPG.
    
    p.mb-5 Le presentamos una serie de aspectos clave para la aplicación de las estrategias de comunicación y gestión de personal en la finca ganadera: 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .titulo-segundo.color-acento-contenido
          h2 2.2 Capacitación
        
        p.mb-5 La formación del personal es obligatoria y periódica en las empresas ganaderas certificadas en BPG. Debe enfocarse en temas fundamentales que aseguren el cumplimiento de los estándares sanitarios, ambientales y productivos.

        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Temas de capacitación obligatoria
            
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-10 Temas de capacitación obligatorios
                    th.bg-color-10 Objetivo principal
                tbody.bg-color-white
                  tr
                    td Prácticas seguras de manejo animal
                    td Garantizar el bienestar animal y la seguridad de los trabajadores.
                  tr
                    td Higiene personal y bioseguridad
                    td Prevenir la propagación de enfermedades.
                  tr
                    td Aplicación correcta de medicamentos veterinarios
                    td Asegurar tratamientos eficaces y seguros.
                  tr
                    td Manejo de residuos y protección ambiental
                    td Minimizar impactos negativos en el entorno.
                  tr
                    td Procedimientos ante emergencias sanitarias
                    td Responder de forma adecuada y rápida ante brotes o riesgos.
    
    .row.justify-content-center
      .col-lg-10
        div.px-4.px-md-5.py-4.bg-color-9.tarjeta.mb-5
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h4 Importante
              p.mb-0 El ICA exige conservar registros detallados de las capacitaciones, incluyendo <b>firmas de los asistentes, fechas, temarios y responsables.</b>

    
    separador

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .titulo-segundo.color-acento-contenido
          h2 2.3 Asignación de funciones
        
        p.mb-5 Cada trabajador debe contar con <b>funciones definidas y documentadas</b>, alineadas con los protocolos de BPG. Esta asignación debe garantizar claridad, responsabilidad y cumplimiento operativo.

        .row.mb-5
          .col-lg-4.mb-4.text-center(data-aos="fade-up")
            .tarjeta.tarjeta-avatar-slide.bg-color-5.p-4.h-100
              img(src="@/assets/curso/temas/tema2/11.svg", style="max-width: 90px").mx-auto.mb-3
              h4 Asignación formal de roles
              p Producción, sanidad, alimentación, mantenimiento, entre otros.
          .col-lg-4.mb-4.text-center(data-aos="fade-down")
            .tarjeta.tarjeta-avatar-slide.bg-color-5.p-4.h-100
              img(src="@/assets/curso/temas/tema2/12.svg", style="max-width: 90px").mx-auto.mb-3
              h4 Supervisión directa
              p Asegura la ejecución correcta de las tareas asignadas.
          .col-lg-4.mb-4.text-center(data-aos="fade-up")
            .tarjeta.tarjeta-avatar-slide.bg-color-5.p-4.h-100
              img(src="@/assets/curso/temas/tema2/13.svg", style="max-width: 90px").mx-auto.mb-3
              h4 Actualización de funciones
              p Ajustes según cambios en el plan de producción o necesidades operativas.

        separador

        .titulo-segundo.color-acento-contenido
          h2 2.4 Evaluación del desempeño
        
        p.mb-5 La evaluación del desempeño es un proceso esencial para mejorar la eficiencia del personal y mantener altos estándares de calidad. Debe ser <b>documentada y alineada</b> con los objetivos estratégicos de la empresa.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema2/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Periodicidad
                p.text-center Debe realizarse como mínimo una vez al año.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema2/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Enfoque
                p.text-center Basado en criterios técnicos (conocimiento, ejecución) y comportamentales (actitud, responsabilidad).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema2/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Alineación
                p.text-center Con el plan sanitario, bienestar animal y trazabilidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema2/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Uso de resultados
                p.text-center Identificar necesidades de capacitación o reubicación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema2/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Tipos de herramientas
                p.text-center Escalas cualitativas o cuantitativas, entrevistas individuales, autoevaluaciones.    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema2/14.png', alt='')

        .row.justify-content-center
          .col-lg-10
            div.px-4.px-md-5.py-4.bg-color-9.tarjeta.mb-5
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema2/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 La documentación de estas evaluaciones es indispensable como evidencia en auditorías internas o externas.



</template>

<script>
export default {
  name: 'Tema2',
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

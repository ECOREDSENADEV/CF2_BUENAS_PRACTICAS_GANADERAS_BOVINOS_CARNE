<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Estrategias correctivas
    
    .row
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0        
        .bg-color-2.tarjeta.p-5(data-aos="fade-left")
            p.mb-0 Las estrategias correctivas constituyen un conjunto de acciones planificadas y ejecutadas con el fin de corregir no conformidades detectadas durante la evaluación de las BPG. Estas acciones son esenciales para <b>restablecer el cumplimiento</b> de los requisitos técnicos, sanitarios y operativos, y se enmarcan dentro del enfoque de <b>mejora continua</b>, contribuyendo a cerrar brechas de cumplimiento y prevenir la reincidencia de errores en los procesos productivos.
    
    separador

    .titulo-segundo.color-acento-contenido
      h2 4.1 Subsanación

    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        p.mb-5 La <b>subsanación</b> es el proceso mediante el cual se identifican, documentan y resuelven las no conformidades encontradas en una auditoría o autoevaluación. Este proceso incluye:
        .row.mb-5.justify-content-center
          .col-lg-8
            .bg-color-7.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/temas/tema4/2.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    ul.lista-ul--color
                      li.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Análisis de la causa raíz del problema.
                      li.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Registro formal de la no conformidad y su impacto.
                      li.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Definición de una acción correctiva apropiada.
                      li.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Asignación de responsables y plazos para su ejecución.
                      li.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Verificación posterior del cumplimiento y efectividad de la acción aplicada.
        
        p El Instituto Colombiano Agropecuario (ICA) permite que los predios ganaderos subsanen las observaciones hechas durante las visitas de evaluación antes de decidir sobre la certificación.

    separador

    .titulo-segundo.color-acento-contenido
      h2 4.2 Aplicación de acciones correctivas
    
    p.mb-5 Las acciones correctivas pueden abarcar distintas áreas según el tipo de incumplimiento detectado. A continuación, se presentan ejemplos comunes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema4/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Infraestructura
              p Reparación o adecuación de instalaciones inadecuadas para el manejo animal.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema4/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Registros
              p Actualización y mejora de sistemas de documentación (tratamientos, vacunación, alimentación, etc.).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema4/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Bioseguridad
              p Implementación de puntos de desinfección, cuarentenas, y control de ingreso al predio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema4/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Capacitación
              p Formación adicional al personal en protocolos BPG cuando se evidencie desconocimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema4/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Manejo ambiental
              p Corrección de prácticas inadecuadas en la gestión de residuos, aguas y fuentes hídricas.
    
    p Todas estas acciones deben ser documentadas y verificadas posteriormente para asegurar su eficacia.

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

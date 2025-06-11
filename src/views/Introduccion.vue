<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0    
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1    
            .bg-color-2.tarjeta.p-5(data-aos="fade-left")
                p.mb-0 La producción de carne bovina en Colombia ha evolucionado hacia modelos sostenibles que integran criterios de trazabilidad, sanidad, bienestar animal y responsabilidad ambiental. En este contexto, las Buenas Prácticas Ganaderas (BPG) se han consolidado como un pilar esencial para garantizar productos cárnicos seguros, trazables y aceptados en mercados nacionales e internacionales. El componente formativo que se presenta ofrece las bases conceptuales y técnicas para comprender y aplicar estas prácticas en entornos productivos reales.
    
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 A lo largo del proceso formativo, se desarrollarán habilidades orientadas a la implementación y evaluación de sistemas de gestión ganadera, considerando normativas vigentes y metodologías de control. Se abordarán aspectos clave como la gestión del personal, el manejo de registros, la ejecución de auditorías internas y externas, así como la identificación de no conformidades y la aplicación de estrategias correctivas. Estos conocimientos permitirán a los aprendices desempeñarse con criterio técnico en procesos de verificación y mejora continua dentro de la cadena productiva.

        p.mb-5(data-aos="fade-left") Este componente no solo promueve la conformidad con los estándares regulatorios, sino que también fomenta una visión integral del sistema productivo, desde el cuidado animal hasta la gestión ambiental. La formación está diseñada para fortalecer el compromiso del talento humano con prácticas responsables que generen confianza en los consumidores y que contribuyan al posicionamiento competitivo del sector ganadero colombiano.
</template>

<script>
export default {
  name: 'Introduccion',
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

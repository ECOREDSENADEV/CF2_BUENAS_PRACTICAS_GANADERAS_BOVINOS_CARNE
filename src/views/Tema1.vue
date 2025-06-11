<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Trazabilidad de la producción
    
    p.mb-5 El Servicio Agrícola y Ganadero implementa la Trazabilidad Animal para fortalecer la seguridad en la producción ganadera. Este proceso permite identificar y seguir el rastro de cada animal desde su origen hasta su destino final, mediante un sistema estructurado de registros y controles oficiales.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Registro de Establecimientos Pecuarios (RUP)
              p Identifica cada establecimiento pecuario donde hay animales de forma permanente o temporal.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Dispositivo de Identificación Individual Oficial (DIIO)
              p Asigna un número único que permite identificar el predio de origen del animal.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Declaración de Existencia Animal (DEA)
              p Registra anualmente la cantidad de animales por especie y clase en cada establecimiento con RUP.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Formulario de Movimiento Animal (FMA)
              p Se solicita y diligencia cada vez que se trasladan animales con DIIO o por lotes con RUP.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Sistema Oficial de Información Pecuaria (SIPECweb)
              p Plataforma donde se registran, almacenan y gestionan todos los datos del Programa.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto El proceso de trazabilidad
    
  
    .row.align-items-center.mb-5.justify-content-center
      .col-md-6.col-lg-2.order-lg-2.mb-3.mb-lg-0
        img(src="@/assets/curso/temas/tema1/6.svg").mx-auto
      .col-lg-10.order-lg-1
        p.mb-0 La trazabilidad en las Buenas Prácticas Ganaderas (BPG) para la producción de carne en Colombia comprende un conjunto de procedimientos organizados y sistemáticos que permiten registrar, identificar y dar seguimiento al recorrido de los animales y sus productos, desde el inicio del proceso en la finca ganadera hasta su llegada al consumidor final. Este sistema abarca todas las fases: producción, transformación y comercialización, con el objetivo de garantizar la inocuidad alimentaria, la sanidad y el bienestar animal, así como la protección del medio ambiente.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Mediante la trazabilidad se logra identificar y registrar a cada animal y sus productos en todas las etapas del proceso productivo, lo cual incluye nacimiento, alimentación, salud, transporte, sacrificio y comercialización. Esta capacidad de seguimiento permite reconstruir la historia completa de cada animal, lo que resulta esencial para responder oportunamente ante situaciones sanitarias y asegurar la calidad de la carne destinada al consumo humano.
    
    .row.align-items-center.mb-5.justify-content-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        img(src="@/assets/curso/temas/tema1/8.svg").mx-auto
      .col-lg-10
        p.mb-0 Además, el sistema de trazabilidad cuenta con una base de datos que almacena información detallada desde el nacimiento del animal hasta su sacrificio, permitiendo también rastrear sus subproductos a lo largo de toda la cadena productiva. Con ello, se fortalece la confianza en la calidad y seguridad de la carne, cumpliendo con los estándares establecidos tanto a nivel nacional como internacional.
    
    .tarjeta.bg-color-3.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/9.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1.bg-color-4 ¡Amplíe su información!
              p.text-white Lo invitamos a profundizar en el marco legal que respalda la trazabilidad animal en Colombia. La Ley 1659 de 2013, “Por la cual se crea el Sistema Nacional de Identificación, Información y Trazabilidad Animal”, establece las bases para garantizar el seguimiento y control de los animales y sus productos a lo largo de la cadena productiva.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.ica.gov.co/normatividad/normas-nacionales/leyes/2013" target="_blank")
                span Ir al sitio web
                i.fas.fa-link
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Importancia de la trazabilidad en las BPG (Buenas Prácticas Ganaderas)
  
    p.mb-5 La trazabilidad es un componente fundamental dentro de las BPG, ya que permite el seguimiento detallado de los animales a lo largo de toda la cadena productiva. Esto aporta beneficios clave en diversos ámbitos:

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/10.png", data-aos="zoom-in")
          .col-lg-8(data-aos="fade-left") 
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-5")
              .row(titulo="Sanidad animal").justify-content-center
                .col-md-6.mb-4.mb-md-0
                  p Facilita la detección y control oportuno de enfermedades, protegiendo la salud del hato ganadero.
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/tema1/11.png', alt='Texto que describa la imagen')
              .row(titulo="Inocuidad alimentaria").justify-content-center
                .col-md-6.mb-4.mb-md-0
                  p Garantiza que la carne producida sea segura para el consumo humano, cumpliendo con estándares sanitarios tanto nacionales como internacionales.
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/tema1/12.png', alt='Texto que describa la imagen')
              .row(titulo="Bienestar animal").justify-content-center
                .col-md-6.mb-4.mb-md-0
                  p Permite monitorear las condiciones de vida de los animales, promoviendo prácticas que aseguren su bienestar integral.
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/tema1/13.png', alt='Texto que describa la imagen')
              .row(titulo="Acceso a mercados internacionales").justify-content-center
                .col-md-6.mb-4.mb-md-0
                  p Es un requisito clave para la exportación de carne hacia mercados exigentes, ya que evidencia el cumplimiento de normas sanitarias y de calidad.
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/tema1/14.png', alt='Texto que describa la imagen')
               
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Requisitos para la certificación en BPG (ICA)
  
    p.mb-5 Para obtener la certificación en BPG, el Instituto Colombiano Agropecuario (ICA) exige el cumplimiento de varios criterios técnicos y administrativos:

    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        .row
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/temas/tema1/15.png", data-aos="zoom-in")
          .col-lg-8(data-aos="fade-left").order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-5")
              div(titulo="Identificación y registro del predio")
                p Inscripción oficial ante el ICA, con codificación específica tanto del predio como del hato ganadero.
              div(titulo="Plan sanitario")
                p Elaborado por un médico veterinario o zootecnista, incluye esquemas de vacunación, desparasitación y control de enfermedades.
              div(titulo="Protocolos de bioseguridad")
                p Conjunto de medidas para prevenir la entrada y salida de enfermedades infecciosas en la unidad productiva.
              div(titulo="Condiciones de bienestar animal")
                p Garantía de alimentación adecuada, acceso a agua limpia, infraestructura apropiada y manejo respetuoso del animal.
              div(titulo="Capacitación del personal")
                p Formación técnica continua en prácticas ganaderas responsables, orientada a mejorar el desempeño y cumplimiento de las BPG.
    
    separador

    .titulo-segundo.color-acento-contenido
      h2 1.1	Elementos de desarrollo
              
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema1/16.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0        
        .bg-color-2.tarjeta.p-5(data-aos="fade-left")
            p.mb-0 La trazabilidad es uno de los pilares fundamentales dentro del sistema de Buenas Prácticas Ganaderas (BPG) para la producción de carne bovina en Colombia. De acuerdo con el Instituto Colombiano Agropecuario (ICA), su adecuada implementación permite garantizar la seguridad alimentaria, la sanidad animal, el bienestar del ganado y la calidad del producto final, ya que posibilita el seguimiento continuo del animal desde su nacimiento hasta la comercialización de sus productos.
    
    p.mb-5 A continuación, se describen los elementos clave para establecer un sistema de trazabilidad eficiente, en concordancia con los lineamientos técnicos y normativos vigentes:

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Identificación y registro animal
    
    p.mb-5 Cada animal debe contar con una identificación única, mediante dispositivos como aretes o chips electrónicos. Esta identificación debe estar asociada a un registro que contenga información detallada sobre:

    .row.mb-5.justify-content-center
      .col-lg-8
        .bg-color-7.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.order-2
              figure
                img(src='@/assets/curso/temas/tema1/17.png', alt='')
            .col-lg.order-1.mb-3.mb-lg-0
              .p-4
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Fecha de nacimiento
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Raza
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Edad
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Esquema de vacunación
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Tratamientos veterinarios
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Movimientos a lo largo de su vida productiva
        
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Estructura del código de identificación individual del animal

        figure
          img(src='@/assets/curso/temas/tema1/18.png', alt='Ilustración de una etiqueta de identificación animal que detalla la estructura del código de identificación individual compuesto por el código de país (ES), un dígito reservado, un dígito de control, dos dígitos de comunidad autónoma, ocho dígitos de identificación individual y un código de barras para lectura óptica. ')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Registro del predio ganadero
    
    p.mb-5 El Registro Sanitario de Predio Pecuario (RSPP) es una herramienta diseñada para identificar las actividades pecuarias en el país y monitorear la condición sanitaria de los predios. Su propósito es facilitar la formulación de estrategias para la prevención, control y erradicación de enfermedades de control oficial, inusuales o de declaración obligatoria.

    .row.mb-5.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-2.p-5.h-100(data-aos="fade-up")
          h4 Registro del predio ante el ICA
          p.mb-0 El predio debe estar debidamente inscrito en el sistema del ICA y contar con un código único de identificación a nivel nacional.
      .col-lg-5
        .bg-color-8.p-5(data-aos="fade-down")
          h4 Historial sanitario y productivo del hato
          p.mb-0 Se debe llevar un registro detallado del estado sanitario y de la producción del hato, como parte del seguimiento integral dentro del sistema de trazabilidad.
    
   
    div.px-4.px-md-5.py-4.bg-color-9.tarjeta.mb-5
      .row
        .col-lg-auto
          img(src="@/assets/curso/temas/tema1/19.svg", style="max-width: 90px").mx-auto
        .col-lg
          h4 Nota importante
          p Estos registros se limitan a la identificación del predio y del responsable del hato. Su propósito es servir como base para la gestión sanitaria; en ningún caso:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 Otorgan propiedad legal sobre los predios.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 Sustituyen los documentos oficiales para legalizar la actividad comercial o acreditar la propiedad.

    .tarjeta.bg-color-3.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/9.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1.bg-color-4 Registro de predios ante el ICA
              p.text-white Se invita al lector a consultar el siguiente enlace del Instituto Colombiano Agropecuario (ICA). En este sitio web se ofrece información detallada sobre el proceso de registro de predios pecuarios, incluyendo los requisitos, beneficios y procedimientos que deben seguir los propietarios o responsables de establecimientos pecuarios en Colombia.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.ica.gov.co/areas/pecuaria/registro-de-predios-ante-el-ica" target="_blank")
                span Ir al sitio web
                i.fas.fa-link
        
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Documentación y control de procesos

    p.mb-5 Es fundamental registrar de manera sistemática todas las actividades relacionadas con el manejo del ganado, como:

    .row.mb-5.justify-content-center
      .col-lg-6
        .bg-color-7(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.order-2
              figure
                img(src='@/assets/curso/temas/tema1/20.png', alt='')
            .col-lg.order-1.mb-3.mb-lg-0
              .p-4
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Alimentación
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Tratamientos médicos
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Transporte
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Sacrificio
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Comercialización

    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        p.mb-5 Estos registros deben mantenerse actualizados y estar disponibles para su verificación por parte de las autoridades competentes.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Sanidad y bienestar animal

        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/temas/tema1/21.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0        
            .bg-color-2.tarjeta.p-5(data-aos="fade-left")
                p.mb-0 Deben cumplirse los planes sanitarios preventivos formulados por profesionales veterinarios, incluyendo vacunación y desparasitación. Además, es necesario aplicar prácticas de manejo que favorezcan el bienestar animal, evitando el estrés, el maltrato y las condiciones de alojamiento inadecuadas.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Bioseguridad
        
        p.mb-5 La finca ganadera debe contar con protocolos estrictos de bioseguridad para prevenir la entrada y propagación de agentes patógenos. Estos protocolos contemplan:
        
        .row.mb-5.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-5.h-100(data-aos="fade-up")
              img(src="@/assets/curso/temas/tema1/22.svg", style="max-width: 70px").mx-auto.mb-3
              p.mb-0 Control del ingreso de personas, vehículos, animales y equipos
          .col-lg-4
            .bg-color-8.p-5.h-100(data-aos="fade-down")
              img(src="@/assets/curso/temas/tema1/23.svg", style="max-width: 70px").mx-auto.mb-3
              p.mb-0 Desinfección de instalaciones y áreas críticas

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Capacitación del personal

        p.mb-5 Todo el personal involucrado debe recibir formación en temas como:

        .row.mb-5.justify-content-center
          .col-lg-6
            .bg-color-7(data-aos="fade-up")
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/temas/tema1/24.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    ul.lista-ul--color
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Trazabilidad
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Bioseguridad
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Bienestar animal
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Sanidad
                      li.mb-0.d-flex
                        i.far.fa-arrow-alt-circle-right.bg-color-6
                        p.mb-0 Manejo responsable del ganado
            p La capacitación asegura el cumplimiento de los procedimientos establecidos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Almacenamiento y respaldo de la información

    .row.align-items-center
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema1/25.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0        
        .bg-color-2.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Los registros pueden mantenerse en formatos físicos o digitales, pero deben estar disponibles ante inspecciones sanitarias o auditorías de certificación. La conservación segura y organizada de esta información es esencial para garantizar la trazabilidad
    
    separador

    .titulo-segundo.color-acento-contenido
      h2 1.2 Sistema Nacional de Identificación e Información del Ganado Bovino (SINIGAN)
    
    .row.align-items-center.mb-5.justify-content-center
      .col-md-6.col-lg-2.order-lg-2.mb-3.mb-lg-0
        img(src="@/assets/curso/temas/tema1/26.svg").mx-auto
      .col-lg-10.order-lg-1
        p.mb-0 El Instituto Colombiano Agropecuario (ICA) administra el Sistema Nacional de Identificación e Información del Ganado Bovino (SINIGAN), creado mediante la Ley 914 de 2004. Este sistema permite registrar e identificar individualmente a cada animal, asegurando un seguimiento detallado de su historial sanitario y productivo en toda la cadena de valor.
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg-color-7(data-aos="fade-up")
          .row.justify-content-center.mb-3
            .col-lg-auto.order-2
              figure
                img(src='@/assets/curso/temas/tema1/27.png', alt='')
            .col-lg.order-1.mb-3.mb-lg-0
              .p-5
                p El SINIGAN es una herramienta clave para garantizar la trazabilidad a nivel nacional, ya que:
                ul.lista-ul--color.ms-4
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Centraliza y valida la información relacionada con el ganado.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Permite un seguimiento y control en tiempo real desde el nacimiento hasta la comercialización de cada animal.
    
    .tarjeta.bg-color-3.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/9.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1.bg-color-4 Se cumplen 20 años de la ley que dio vida a la identificación del ganado en Colombia
              p.text-white Se invita a visitar el siguiente enlace de Contexto Ganadero. Además, se recomienda revisar con atención el video disponible en el artículo y profundizar en los aspectos generales y claves de la trazabilidad en el marco de las Buenas Prácticas Ganaderas (BPG) para bovinos de carne.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.contextoganadero.com/regiones/se-cumplen-20-anos-de-la-ley-que-dio-vida-a-la-identificacion-del-ganado-en-colombia" target="_blank")
                span Ir al sitio web
                i.fas.fa-link
    
    p.mb-5 La trazabilidad en la producción bovina permite seguir cada animal desde su origen hasta la comercialización, asegurando calidad, sanidad y acceso a mercados nacionales e internacionales.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 A continuación, se presenta la tabla solicitada con los tipos de trazabilidad aplicables a los procesos de Buenas Prácticas Ganaderas (BPG) y el análisis de los elementos que los detallan:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/28.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Trazabilidad hacia atrás
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Identificación del proveedor de animales o insumos (ej. alimento, medicamentos).
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Registro del tipo de producto recibido (animal, lote, medicamento).
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Fecha de ingreso al predio o al sistema.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Propósito del producto recibido (cría, engorde, reproducción, etc.).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/29.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Trazabilidad interna
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Control de los cambios que experimenta el animal o producto dentro del predio (división, mezcla, tratamientos, peso, cambios de lote).
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Transformaciones internas (como la conversión de animales en canales o subproductos).
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Registro de procesos sanitarios aplicados (vacunación, tratamientos, movimientos internos).
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Identificación del producto final dentro del predio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/30.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4.mb-5 Trazabilidad hacia delante
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Registro del destino de los productos ganaderos (cliente, empresa, planta de beneficio).
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Identificación del comprador o destinatario.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Fecha de salida del animal o producto.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Relación entre producto final y cliente final para garantizar la trazabilidad completa en la cadena de comercialización.
          

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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

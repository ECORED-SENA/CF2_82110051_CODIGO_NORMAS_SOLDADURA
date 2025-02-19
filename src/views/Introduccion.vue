<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .p-4.p-md-5

        p(data-aos="fade-up").mb-4 Todo proyecto que implique uniones soldadas requiere documentación técnica normativa y, en Colombia, legal, que garantice la capacidad del contratista o subcontratista para diseñar y ensamblar estructuras metálicas resistentes a solicitaciones mecánicas y metalúrgicas. Esto asegura que los procesos de trazado, corte, ajuste, armado y soldado sean realizados con estándares de calidad adecuados.

        .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es indispensable que las empresas interventoras exijan al fabricante un dosier técnico que valide que tanto los procesos de soldadura como los soldadores están calificados. Este documento sirve como evidencia del cumplimiento de los requisitos legales y contractuales, asegurando la calidad de las juntas soldadas realizadas.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/intro/2.svg", alt="alt")

          .col-lg
            p(data-aos="fade-up").mb-0 La calificación de los procedimientos y del personal se realiza mediante formatos estandarizados, como WPS, PQR y WPQR. Estos documentos contienen los parámetros esenciales del proceso de soldadura, evaluando su ejecución y garantizando que cumplen con los estándares establecidos en los códigos aplicables.
      
           
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

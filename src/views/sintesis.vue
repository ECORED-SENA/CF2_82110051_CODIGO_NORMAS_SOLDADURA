<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta los formatos estandarizados para procedimientos de soldadura: WPS, PQR y WPQR, destacando tres elementos clave. Primero, introduce el manejo de formatos para evidenciar la calificación de soldadura y soldadores, incluyendo el registro de procedimientos (PQR), habilidades (WPQR) y estampes del soldador. Segundo, detalla las variables del proceso, como el voltaje, amperaje, diámetro del electrodo, velocidad de avance y tipo de metal de aporte. Finalmente, aborda las condiciones controladas, como el uso de elementos de protección personal, equipos adecuados, supervisión y mantenimiento de equipos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

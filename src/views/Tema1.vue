<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Formatos para evidenciar la calificación de soldadura y soldadores



    .row.justify-content-center.align-items-center.mb-5
      .col-lg
        p(data-aos="fade-up").mb-0 Los criterios normativos de los documentos de ingeniería relacionados con soldadura se simplifican al desarrollar formatos en los cuales se consignan los valores numéricos de los parámetros de soldadura. A continuación, se explican la estructura y uso de los formatos de especificación y calificación de procedimiento, así como la calificación de soldadores:
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/1.svg", alt="alt")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/2.png", alt="alt")

      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
          div(titulo="Especificación del procedimiento de soldadura (WPS)")
            p Documento preparado por el departamento técnico o de ingeniería de la empresa, en el cual se proyectan los valores numéricos de las variables para realizar una soldadura repetible con base en los requisitos del código aplicable. Este documento describe las variables esenciales, no esenciales y, cuando sea necesario, las suplementarias esenciales de cada procedimiento de soldadura.

          div(titulo="Registro de la calificación del procedimiento (PQR)")
            p Este documento valida y califica un WPS. En él se registran los valores reales medidos de las variables del procedimiento de soldadura mediante la ejecución de una soldadura de calificación en un cupón de prueba estandarizado. También incluye los valores de los resultados adquiridos de los ensayos mecánicos de tensión, doblado, sanidad, dureza y macrografía, entre otros.

          div(titulo="Registro de la calificación del soldador (WPQR)")
            p Una vez que los documentos WPS y PQR estén en orden, se procede a calificar a cada soldador y operario de soldadura, evaluando el proceso de fabricación o instalación de los productos según el código seleccionado. El soldador que prepara y suelda los especímenes del registro de calificación de procedimientos, aprobando los requisitos del código, queda calificado dentro de sus variables de calificación. Todos los demás soldadores serán calificados mediante pruebas específicas de soldadura diseñadas para determinar su capacidad de ejecución mediante soldaduras repetibles en el WPS.

    

    h3(data-aos="fade-up").mb-4 Identificación del trabajo del soldador

    p(data-aos="fade-up").mb-5 A cada soldador se le asigna un número, letra, símbolo o estampa para identificar su trabajo. Los campos de los formatos WPS, PQR y WPQR se diligencian con valores numéricos que representan datos asignados al proceso de soldadura, garantizando que cumpla con los requisitos de calidad normativos.

    .titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1  Variables del proceso de soldeo

    p(data-aos="fade-up").mb-4 Las principales variables del proceso de soldadura que influyen en la calidad del trabajo son las siguientes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo="b")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h5 Voltaje
                p Diferencia de potencial entre una pinza de masa y la punta del electrodo para soldar. Este valor varía según el diámetro del electrodo y el espesor del metal base.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-1.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h5 Amperaje
                p Cantidad de electrones que fluyen entre el metal base y el electrodo, generando un arco eléctrico de gran calor (más de 5000 °C) que funde los metales base y de aporte para formar el cordón de soldadura.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-2.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h5 Diámetro del electrodo
                p Tamaño del electrodo, que influye directamente en la cantidad de voltaje y amperaje necesarios para realizar la soldadura.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-3.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h5 Espesor del metal base
                p Tamaño del metal que se une en configuraciones de juntas, donde se generan los denominados biseles.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-4.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h5 Posiciones de soldadura
                p Cuatro ubicaciones geométricas principales que determinan cómo se aplica un cordón de soldadura, según la disposición de las uniones.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-5.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h5 Clase de electrodos
                p Clasificación de los electrodos según AWS, que identifica diferentes tipos para penetración, relleno o presentación.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-6.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h5 Velocidad de avance
                p Rapidez con la cual el soldador avanza en una junta a soldar. Este valor se mide generalmente en cm/min o pulgadas/min.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-7.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h5 Calor aportado
                p Resultado de la multiplicación del voltaje por el amperaje, dividido por la velocidad de avance. Su unidad se expresa en términos de potencia sobre longitud.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-8.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h5 Limpieza entre pases
                p Cada cordón de soldadura crea una capa llamada escoria en la superficie. Esta debe limpiarse para garantizar una unión metalúrgica adecuada entre pases. Normalmente se realiza con pica escoria o grata manual, aunque en algunos casos se usa una grata circular entorchada acoplada a una pulidora.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-9.png")
            .row.align-items-center.p-4.p-md-5
              .col-lg-7
                h5 Tipo de metal de aporte
                p Metales usados en soldadura, incluyendo aceros, aleaciones de aluminio, bronces y latones. En los formatos de calificación se debe especificar el tipo de material metálico que se está uniendo.
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-10.png")


    .titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2  Condiciones controladas


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-up").mb-0 El fabricante de la estructura metálica soldada debe identificar y planificar los procesos de fabricación, instalación y servicio posventa que influyen directamente en la calidad. Estas actividades se llevan a cabo bajo condiciones controladas:

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.svg", alt="alt")


    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3

        .carousel-bg
          .row.justify-content-center.align-items-center.mb-5

            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/4.png', alt='')

            .col-lg-8

              SlyderF(columnas="col-12 col-lg-6")
                .tarjeta.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema1/icon-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  .bg-color-3.px-4.py-3.mb-4
                    h4.text-center.mb-0 Elementos de protección personal
                  p.text-center Preservan la salud de las personas involucradas en el proceso de soldadura, previniendo accidentes y enfermedades laborales.
                .tarjeta.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema1/icon-2.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  .bg-color-3.px-4.py-3.mb-4
                    h4.text-center.mb-0 Uso de equipos de soldeo adecuados
                  p.text-center La selección correcta del equipo depende del proceso a ejecutar. Por ejemplo, la soldadura con electrodo revestido requiere un equipo para el proceso SMAW.
                .tarjeta.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema1/icon-3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  .bg-color-3.px-4.py-3.mb-4
                    h4.text-center.mb-0 Cumplimiento de requisitos
                  p.text-center Antes de iniciar la soldadura, se deben cumplir todos los parámetros definidos en las variables del proceso. De no ser así, no debe comenzarse el trabajo.
                .tarjeta.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema1/icon-4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  .bg-color-3.px-4.py-3.mb-4
                    h4.text-center.mb-0 Supervisión
                  p.text-center Debe llevarse a cabo por una persona con amplios conocimientos en soldadura, quien asesore al personal durante las actividades productivas.
                .tarjeta.bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema1/icon-5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  .bg-color-3.px-4.py-3.mb-4
                    h4.text-center.mb-0 Mantenimiento de equipos
                  p.text-center El uso frecuente de los equipos de soldadura genera desgaste mecánico, lo que puede afectar los parámetros establecidos. Por ello, es necesario llevar un registro de mantenimiento para cada equipo utilizado.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>

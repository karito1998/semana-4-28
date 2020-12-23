<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :slides="item.slides"
      reverse-transition="fade-transition"
      transition="fade-transition"
      class="display-1">
    <i class="fa fa-700px" aria-hidden="true">{{item.slides}}</i>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://img.bekiamoda.com/articulos/portada/87000/87498.jpg',
            slides: "Ropa de Moda"
          },
          {
            src: 'https://www.vozpopuli.com/2020/03/09/gritos/claves-elegir-pantalon-perfecto_1335176566_14804596_1020x574.jpg',
            slides: "Las mejores Marcas",
          },
          {
            src: 'https://static.iris.net.co/dinero/upload/images/2018/11/21/264472_1.jpg',
            slides: "Maquillaje",
          },
          {
            src: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/08/03124922/suplementos-1920-2.jpg',
            slides: "Bienestar"
          },
        ],
      }
    },
  }
</script>
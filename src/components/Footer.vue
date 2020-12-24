<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Ofrecemos al publico en general la posibilidad de adquirir productos de moda, maquillaje y bienestar, mediante compra virtual con la posibilidad de obtener bonificaciones por su lealtad de compra y realización de una estructura organizada de mercadeo multinivel, generando beneficios económicos para él y para la Tienda  Virtual.
        Afiliado: por cada referido gana 10 puntos para redimir en premios, 5% de descuento en cada compra
        Referido: Al usar el código la primera vez obtienes un 50% de descuento en su compra, ¡registrate ya!

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>CONECTAR SAS</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<template>
  <!--<v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        max-width="410"
        height="500"
      >-->
       <div class= "d-flex justify-content-center p-2">
      <div id = "productos" class="col mt-5" v-for="producto in productos" :key="producto.codigo" > <!---->
        <v-img :src="producto.Imagen" height="250" width="250"></v-img>

        <v-card-text>
          <h2  class="title primary--text">
            {{producto.Nombre}}<!---->
          </h2>
          {{producto.Descripcion}}<!---->
        </v-card-text>
      
        <v-card-title>
          <v-rating
            :value="producto.Value"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>
          <span class="primary--text subtitle-2">{{producto.Reviews}}</span>
        </v-card-title>
        
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn>Quiero ver mas!!!</v-btn>
          </v-overlay>
        </v-fade-transition>
        </div><!---->
        </div>
      <!--</v-card>
    </template>
  </v-hover>-->
</template>

<!--<script>
  export default {
    data(){
        return{
          datos: null, 
            title:'',
            descripcion:'',
        }
    },
  }
</script>-->

<script>
import axios from 'axios';
export default {
    data() {
        return {
            datos: null, 
            productos: [{
                codigo: 1,
                Nombre: 'Sacos y chaquetas ',
                Descripcion: 'Vestuario para toda la familia',
                Imagen: 'https://i.imgur.com/YkbsHLT.jpg',
                Value: 4.5,
                Reviews: 100,
                Color: 'bg-danger'
            },
            {
            codigo: 2,
                Nombre: 'Calzado ',
                Descripcion: 'Zapatos, botas y tenis',
                Imagen: 'https://i.imgur.com/w7HVOyc.jpg',
                Value: 5,
                Reviews: 140,
                Color: 'bg-danger'
            }, {
                codigo: 3,
                Nombre: 'Labiales y Cremas',
                Descripcion: 'Linea de maquillaje de linea.',
                Imagen:'https://i.imgur.com/48Xbenn.jpg',
                Value: 5,
                Reviews: 230,
                Color: 'bg-dark'
            }, {
                codigo: 4,
                Nombre: 'Vitaminas y proteinas',
                Descripcion: 'Cuida tu salud y la de tu familia.',
                Imagen:'https://i.imgur.com/yoGnVuR.jpg',
                Value: 4.8,
                Reviews: 80,
                Color: 'bg-danger'
            }
            ]
        };
    },
    

  
};
</script>

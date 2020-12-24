<template>

  <!--<v-card
    
    max-width="375"
    class="mx-auto"
  >-->
 <div class= "d-flex justify-content-center p-2">
  <div class= "col mt-5" v-for="contactos in Contacto" :key="contactos.codigo" > <!---->
   
    <v-img :src="contactos.Imagen" height="300px" dark>
      <v-row class="fill-height">
        <v-card-title>
          <v-btn
            dark
            icon
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            dark
            icon
            class="mr-4"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            dark
            icon
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>
      
        <v-card-title class="white--text pl-12 pt-12">
          <div id = "contacto" ><h2> 
            {{contactos.Nombre}}
            </h2>
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{contactos.Telefono}}</v-list-item-title>
          <v-list-item-subtitle>Telefono</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title> {{contactos.Celular}}</v-list-item-title>
          <v-list-item-subtitle>Celular</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{contactos.Contacto}}</v-list-item-title>
          <v-list-item-subtitle>Contacto</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

    </v-list>
  </div>
  </div>
  <!--</v-card>-->
  
</template>

<script>
import axios from 'axios';
export default {

  data() {
        return {
            datos: null,
            Contacto: [{
                codigo: 1,
                Nombre: 'Vestuario',
                Telefono: '(031) 555-1234',
                Celular: ' 315-333-5642',
                Contacto: 'vestuario@compartesas.com',
                Imagen: 'https://i.imgur.com/croXZXK.jpg',
                Color: 'bg-danger'
            },
            {
                codigo: 2,
                Nombre: 'Maquillaje',
                Telefono: '(031) 555-8563',
                Celular: ' 311-833-5642',
                Contacto: 'maquillaje@compartesas.com',
                Imagen: 'https://i.imgur.com/vnw8CDr.jpg',
                Color: 'bg-danger'
            },
            {
                codigo: 3,
                Nombre: 'Vitaminas',
                Telefono: '(031) 555-1569',
                Celular: ' 312-343-5542',
                Contacto: 'dietarios@compartesas.com',
                Imagen: 'https://i.imgur.com/QzeUt2X.jpg',
                Color: 'bg-danger'
            }, 
            ]
        };
    },
    

  
};
</script>




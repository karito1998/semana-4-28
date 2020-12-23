<template>
<div>
  <div v-if="estado">
     <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark ">
        <a class="navbar-brand " href="# ">
            <img src="./assets/infinite.png" width="30 " height="30
            
               " class="d-inline-block align-top " alt=" " loading="lazy "> Conectar S.A.S
        </a>
        <div class="collapse navbar-collapse justify-content-end " id="navbarNav ">
            <ul class="navbar-nav ">
                <li class="nav-item active ">
                    <a class="nav-link " v-on:click="ingresar" href="# ">Sistema <span class="sr-only ">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
    
    <div> <Bars/></div>
    <div><Carousel/></div>
    <br>
  <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <card title="Hola"></card> 
      </div>
      <div class="col">
        <Card/>
      </div>
      <div class="col">
        <Card/>
      </div>
      <div class="col">
        <Card/>
      </div>
       <div class="col">
        <Card/>
      </div>
      <div class="col">
        <Card/>
      </div>
  </div>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <Divider/>
      </div>
      <div class="col">
        <Divider/>
      </div>
      <div class="col">
        <Divider/>
      </div>
    </div>

  <Footer/>

  </div>
  <div v-else>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template>
          <v-list-item @click="home">
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Inicio
            </v-list-item-title>
          </v-list-item>
        </template>
        
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Almacén
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{name: 'categoria'}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Categorías
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{name: 'articulo'}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Artículos
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Accesos
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{name: 'usuario'}">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Usuarios
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template> 
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="silver darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-3"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Sistema</span>
      </v-toolbar-title>      
      <v-spacer></v-spacer>
      <v-btn @click="salir()" icon v-if="logueado">
        <v-icon>logout</v-icon> Salir
      </v-btn>
      <v-btn :to="{name: 'login'}" icon v-else>
        <v-icon>apps</v-icon> Login
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-slide-y-transition mode="out-in">
          <router-view/>
        </v-slide-y-transition>
      </v-container>
    </v-content>

  </v-app>
  
  </div>
  </div>

</template>

<script>
import Carousel from './components/Carousel.vue';
import home from './components/home.vue';
import Footer from './components/Footer.vue';
import Card from './components/Card.vue';
import Bars from './components/Bars.vue';
import Divider from './components/Divider.vue';
export default {
  components: { home, Carousel, Footer, Card, Bars, Divider},
  name: 'App',

    data () {
      return {
      drawer: false,
      estado:1
      }
    },

  computed:{
    logueado(){
      return this.$store.state.usuario;
    },
  },
  created(){
    this.$store.dispatch("autoLogin");
  },
  methods:{
    salir(){
      this.$store.dispatch("salir");
      this.estado=1
    },

    ingresar(){
      this.estado=0
    },

    home(){
      this.estado=1

    }
  }
};
</script>

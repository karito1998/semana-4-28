<template>
    

      <div class="container-fluid">
          <div class="row justify-content-center mb-5">
              <div v-for="miembro in team" :key="miembro.codigo" class="col mt-5">
                  <div class="card text-white bg-dark">
                      <div class="d-flex justify-content-center p-2">
                          <img :src= "miembro.Imagen" alt="participante" height="250" width="250">
                      </div>
                      <div class="card-body">
                          <h5 class="card-title"> {{miembro.Rol}}</h5>
                          <h5 class="card-title"> {{miembro.Nombre}}</h5>
                          <p class="card-text"> {{miembro.Descripcion}}
                          </p>
                      </div>
                      <div class="card-footer">
                          <small class="text-muted">{{miembro.GitHub}}</small>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     
</template>

<script>
import axios from 'axios';
export default {
  name: "HelloWorld",

  data() {
        return {
            datos: null,
            team: [{
                codigo: 1,
                Nombre: 'Karol Arciniegas',
                Descripcion: 'Ingeniera Electronica egresada de la universidad ECCI en Bogotá desarrolladora backend en mi.com.co, amante de los gatos, taekwondista.',
                Rol: 'Desarrollador backend',
                GitHub: 'https://github.com/karito1998',
                Imagen: 'https://i.imgur.com/CuP9Scl.png',
                Color: 'bg-danger'
            }, {
                codigo: 2,
                Nombre: 'Deivier Zaraza',
                Descripcion: 'Administrador financiero, con amplia experiencia en remodelaciones de espacios, emprendedor, autodidacta, apasionado por la musica, los viajes, los animales y el deporte.',
                Rol: 'Arquictecto de software',
                GitHub: 'https://github.com/deivitor',
                Imagen:'https://i.imgur.com/QWtUd5E.jpg',
                Color: 'bg-dark'
            }, {
                codigo: 3,
                Nombre: 'Martha Ortiz',
                Descripcion: 'Egresada de la Universidad Real de Colombia del técnico en sistemas.',
                Rol: 'Tester',
                GitHub: 'https://github.com/Mao182532',
                Imagen:'https://i.imgur.com/3M1Evqj.jpg',
                Color: 'bg-danger'
            }, {
                codigo: 4,
                Nombre: 'Omar Perez',
                Descripcion: 'Estudiante ing sistenas en la U central con diplomado de programacion en java politecnico de colombia.',
                Rol: 'Analista',
                GitHub: 'https://github.com/OmarPerez03',
                Imagen:'https://i.imgur.com/d0mCmWv.jpg',
                Color: 'bg-dark'
            },{
                codigo: 5,
                Nombre: 'Andres Sabogal',
                Descripcion: 'Estudiante de ingenieria Electrica, analista estadistico.',
                Rol: 'Desarrollador frontend',
                GitHub: 'https://github.com/AndresSabogal',
                Imagen:'https://i.imgur.com/cxzg1nL.png',
                Color: 'bg-dark'
            }
            ]
        };
    },
    

  
};
</script>

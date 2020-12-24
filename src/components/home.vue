<template>
<div>
    <div class="container-fluid">
        <div class="row mt-md-5 mt-sm-5 mt-xs-5">
            <div v-for="(art,indice) of datos" :key="art.id" class="col-lg-6 col-xs-12 border">
                <div v-if="indice<=3">
                <div  class="d-flex justify-content-center align-items-center">

                    <div class="p-3">
                        <svg width="12em" height="12em" viewBox="0 0 16 16" class="bi bi-alarm-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                            />
                        </svg>
                    </div>

                    <div class="p-2">
                        <p>
                            {{art.nombre}}
                        </p>
                    </div>

                </div>
                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                    <button type="button" class="btn btn-outline-info">Info</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row justify-content-center mb-5">
            <div v-for="miembro in team" :key="miembro.codigo" class="col mt-5">
                     <div class="card text-white bg-dark">
                        <div class="d-flex justify-content-center p-2">
                            <img :src="miembro.image">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Team member: {{miembro.codigo}} {{miembro.rol}}</h5>
                            <h5 class="card-title"> {{miembro.nombre}}</h5>
                            <p class="card-text">{{miembro.descripcion}}
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>


<script>
import axios from 'axios';
export default {
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
            }]
        };
    },
    mounted() {
     axios.get('articulo/list')
    .then(response => (this.datos = response.data));

    },
    
}

</script>
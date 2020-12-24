<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 lg5 x14>
            <v-card>
                <v-toolbar dark color="silver darken-3">
                    <v-toolbar-title>
                        Acceso al Sistema
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-text-field v-model="email" autofocus color="accent" label="Email" required>
                    </v-text-field>
                    <v-text-field v-model="password" type="password" color="accent" label="Password" required>
                    </v-text-field>
                    <v-flex class="red--text" v-if="errorM">
                        {{errorM}}
                    </v-flex>
                </v-card-text>
                <v-card-actions class="px-3 pb-3">
                    <v-flex text-xs-right>
                        <v-btn @click="ingresar()" color=green>Ingresar</v-btn>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-flex>
        
    </v-layout>

</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            email:'',
            password:'',
            errorM:null
        }
    },

    methods:{
        async ingresar(){
            axios.post('Usuario/login',{email: this.email, password: this.password})
            //axios.post('http://localhost:3000/api/Usuario/login',{email: this.email, password: this.password})
            .then(respuesta =>{
                console.log(respuesta.data);
                return respuesta.data;
            })
            .then(data =>{
                
                //this.$store.dispatch("guardarToken",data.tokenReturn);
                this.auth = true;
                this.$router.push({name: 'home'});
                
                
            })
            .catch(error =>{
                console.log(error);
                this.errorM=null;
                console.log(response.status);
                if (response.status==401){
                    console.log('hola');
                    this.errorM='credenciales son incorrectas.';
                } 
                else if (response.status==404){
                    this.errorM='el usuario no existe';
                }
                else{
                    this.errorM='Ocurrió un error con el servidor.';
                }
            });
        }
    }
    
}
</script>

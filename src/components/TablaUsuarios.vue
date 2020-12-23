<template>
  <div> 
     <v-data-table
      :headers="headers"
      :items="categorias"
      :loading="cargando"
      loading-text="Cargando... Por favor esperar"
      sort-by="id"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Usuarios</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                AGREGAR USUARIO
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre deL usuario"
                      ></v-text-field>
                  </v-row>
                  <v-row>
                     
                      <v-textarea
                        v-model="editedItem.descripcion"
                        label="Descripcion"
                        auto-grow
                        counter="240"
                      ></v-textarea>
                  </v-row>  
                 
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Esta seguro que desea cambiar el estado del usuario?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
         mdi-checkbox-marked-outline 

        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
// import axios from "axios"
export default {
      data: () => ({
      dialog: false,
      dialogDelete: false,
      cargando : true,
      iconoCambio: "",
      headers: [
        {
          text: 'Base de mis usuarios',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'ID', value: 'id' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Correo electronico', value: 'email' },
        { text: 'Estado', value: 'estado' },
        { text: 'Contraseña', value: 'password' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      usuarios: [],
      editedIndex: -1,
      editedItem: {
        nombre: '',
        id: 0,
        email: 0,
        password: "",
        rol: '',
        estado: 0,
      },
      defaultItem: {
        nombre: '',
        id: 0,
        email: 0,
        password: '',
        rol: '',
        estado: 0,
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Usuario' : 'Editar Usuario'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      this.cargando = true
      this.initialize()
    },
    methods: {
      list(){
        
      this.$axios.get('/usuario/list')
        .then( (response) => {
          this.usuarios = response.data
          this.cargando = false
        })
        .catch( error => {
          return error
        })
        
      },
      initialize () {
        this.list()
      },
      
      editItem (item) {
        this.editedIndex = this.usuarios.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
    
      // Actualizar la tabla
        this.list()
      },
      deleteItem (item) {
        this.editedIndex = this.usuarios.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        if (this.editedItem.estado === 1) {
          this.$axios.put('/usuario/deactivate', {id: this.editedItem.id})
        }else {
          this.$axios.put('/usuario/activate', {id: this.editedItem.id})
        }
            this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
          
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
        this.list()
      },
      save () {
        if (this.editedIndex > -1) {
          // Editar en base de datos
          let objetoBusqueda = {
              nombre : this.editedItem.nombre,
              email : this.editedItem.email,
              id :  this.editedItem.id
          }
          this.$axios.put('/api/usuario/update', objetoBusqueda)
          Object.assign(this.usuarios[this.editedIndex], this.editedItem)
        } else {
          let objetoBusqueda = {
              nombre : this.editedItem.nombre,
              email : this.editedItem.email,
              password: this.editedItem.password,
              rol: this.editedItem.rol,
              estado : 1
          }
           this.$axios.post('/usuario/add', objetoBusqueda)
          this.usuarios.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>
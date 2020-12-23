<template>
<v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>My CRUD</v-toolbar-title>
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
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="Categoria.."
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Id"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.fat"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Descripcion"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Estado"
                      ></v-text-field>
                    </v-col>
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
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
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
      <template v-slot: item.actions ="{ item }">
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
          mdi-delete
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
          text: 'Categorias de mis productos',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'ID', value: 'id' ,sortable:false},
        { text: 'Nombre', value: 'nombre',sortable:false },
        { text: 'Descripcion', value: 'descripcion',sortable:false },
        { text: 'Estado', value: 'estado',sortable:false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      categorias: [],
      editedIndex: -1,
      editedItem: {
        name: 'Categoria 1',
        id: '1',
        nombre: 'Sub-categoria1',
        descripcion: 'primer de las categorias',
        estado: '1',
      },
      defaultItem: {
        name: '',
        id: 0,
        nombre: 0,
        descripcion: 0,
        estado: 0,
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Categoria' : 'Editar Categoria'
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
        
      this.$axios.get('/categoria/list')
        .then( (response) => {
          this.categorias = response.data
          this.cargando = false
        })
        .catch( error => {
          return error
        })
        
      },
      initialize () {
        this.list(),
        this.desserts = [
        {
          name: 'Categoria 1',
          id: '1',
          nombre: 'Sub-categoria1',
          descripcion: 'primer de las categorias',
          estado: '1',
        },]
      },
      
      editItem (item) {
        this.editedIndex = this.categorias.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
    
      // Actualizar la tabla
        this.list()
      },
      deleteItem (item) {
        this.editedIndex = this.categorias.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        if (this.editedItem.estado === 1) {
          axios.put("insertar url de la base de datos/api/categoria/deactivate", {id: this.editedItem.id})
        }else {
          axios.put("insertar url de la base de datos/api/categoria/activate", {id: this.editedItem.id})
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
              descripcion : this.editedItem.descripcion,
              id :  this.editedItem.id
          }
          axios.put("insertar url de la base de datos/api/categoria/update", objetoBusqueda)
          Object.assign(this.categorias[this.editedIndex], this.editedItem)
        } else {
          let objetoBusqueda = {
              nombre : this.editedItem.nombre,
              descripcion : this.editedItem.descripcion,
              estado : 1
          }
           axios.post("insertar url de la base de datos/api/categoria/add", objetoBusqueda)
          this.categorias.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>
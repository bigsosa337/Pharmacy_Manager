<template>
    <v-container>
      <v-alert  close-text="Close Alert" title="Alert" type="success" color="green accent-4" closeable v-if="this.$route.params.message">{{ message }}</v-alert>
      <v-row no-gutters  justify="center">
        <v-col sm="10" class="mx-auto">
          <v-card class="pa-5">
            <v-card-title>Edit Meds</v-card-title>
            <v-divider></v-divider>
            <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data" method="post">
                 <v-text-field  v-model="post.nume" :rules="rules" label="Nume Medicament"  class="input"
                 ></v-text-field>
                 
                 <VueDatePicker 
                 v-model="post.dataExp"
                 close-on-auto-apply
                 :enable-time-picker="false"
                 placeholder="Select Date"
                 required/>
                <br>
                <v-select
               :items="items"
               label="Forma/Tip Pastila"
               v-model="post.forma"
               >
              </v-select>
              <v-text-field  v-model="post.producator" :rules="rules" label="Producator"  class="input"
                 ></v-text-field>
                 <v-text-field type="number" v-model="post.gramaj" :rules="rules" label="Gramaj"  class="input"
                 ></v-text-field>
                 <v-text-field type="number" v-model="post.stock" :rules="rules" label="Stoc" required class="input"
                 ></v-text-field>
                  <v-btn type="submit" class="mt-3" color="primary">Edit Medicine</v-btn>
                </v-form>
              </v-card>
              
            </v-col>
          </v-row>
        </v-container>
  </template>
  
  <script>
  import API from '../api'
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  // Components
  
  
  export default {
    name: 'AddPatient',
    components: {
      VueDatePicker,
    },
    data() {
      return {
        rules: [
        value => {
          if (value) return true
  
          return 'This field is required.'
        },
      ],
      items: [ 'Rotund', 'Cilindru', 'Praf', 'Lichid'],
        post: {
          nume: "",
          producator: "",
          gramaj: "",
          forma: "",
          dataExp: "",
          stock: "",
        },
      }
    },
    async created() {
        const response = await API.getSingleMed(this.$route.params.id);
        this.post = response;
    },
    methods: {
      async updateForm() {
        if(!this.post.nume &&
        !this.post.producator &&
        this.post.gramaj &&
        !this.post.dataExp &&
        this.post.stock
        ) {
          alert("complete the required inputs!")
        return false;
        }
        const formData = new FormData();
        formData.append('nume', this.post.nume);
        formData.append('gramaj', this.post.gramaj);
        formData.append('forma', this.post.forma);
        formData.append('dataExp', this.post.dataExp);
        formData.append('stock', this.post.stock);
        formData.append('producator', this.post.producator);
        console.log(this.post.producator)
  
        if(this.$refs.form.validate()) {
          const response = await API.updateMed(this.$route.params.id, formData);
          this.$router.push({ name:'view-meds', params: {message: response.message} });
        } else {
          alert("TYPE IN THE REQUIRED FORMS");
        }
        // && this.post.category.length
      },
    }
  
  };
  </script>
  
  <style scoped>
    .AddPage {
      margin: 20px;
      padding-top: 20px;
      display: flex;
      justify-content: center;
      align-content: center;
    }
    /* .input {
      width: 400px;
    } */
    h3 {
      padding: 5px;
    }
  </style>
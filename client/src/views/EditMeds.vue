<template>
    <v-container>
      <v-alert  close-text="Close Alert" title="Alert" type="success" color="green accent-4" closeable v-if="this.$route.params.message">{{ message }}</v-alert>
      <v-row no-gutters  justify="center">
        <v-col sm="10" class="mx-auto">
          <v-card class="pa-5">
            <v-card-title>Edit Meds</v-card-title>
            <v-divider></v-divider>
            <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data" method="post">
                 <v-text-field  v-model="post.name" :rules="rules" label="name Medicament"  class="input"
                 ></v-text-field>
                 
                 <VueDatePicker 
                 v-model="post.dateOfExp"
                 close-on-auto-apply
                 :enable-time-picker="false"
                 placeholder="Select Date"
                 required/>
                <br>
                <v-select
               :items="items"
               label="medtype/Tip Pastila"
               v-model="post.medtype"
               >
              </v-select>
              <v-text-field  v-model="post.Manufacturer" :rules="rules" label="Manufacturer"  class="input"
                 ></v-text-field>
                 <v-text-field type="number" v-model="post.Dosage" :rules="rules" label="Dosage"  class="input"
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
      items: [ 'Round', 'Cylinder', 'Liquid', 'Powder'],
        post: {
          name: "",
          Manufacturer: "",
          Dosage: "",
          medtype: "",
          dateOfExp: "",
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
        const formData = new FormData();
        formData.append('name', this.post.name);
        formData.append('Dosage', this.post.Dosage);
        formData.append('medtype', this.post.medtype);
        formData.append('dateOfExp', this.post.dateOfExp);
        formData.append('stock', this.post.stock);
        formData.append('Manufacturer', this.post.Manufacturer);
        console.log(this.post.Manufacturer)
  
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
<template>
    <v-container>
      <v-alert  close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message"></v-alert>
      <v-row no-gutters>
        <v-col sm="10" class="mx-auto">
          <v-card class="pa-5">
            <v-card-title>Edit Patient</v-card-title>
            <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data" method="post">
               <v-text-field v-model="post.nume" :rules="rules" label="Nume"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.prenume" :rules="rules" label="Prenume"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.cnp" :rules="rules" label="CNP"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.adresa" :rules="rules" label="adresa" required class="input"
               ></v-text-field>
               <v-select
               :items="items"
               label="Tip adresa"
               v-model="post.tipadresa"
               required
               >
              </v-select>
              <v-container v-if="adresaSecundara">
                <v-text-field v-model="post.adresa2"  label="Adresa Secundara" required class="input"
                ></v-text-field>
                <v-select
                :items="items"
                label="Tip Adresa"
                v-model="post.tipadresa2"
                required
                >
              </v-select>
                
              </v-container>
              <v-text-field v-model="post.varsta" :rules="rules" label="Varsta" required class="input"
                ></v-text-field>
                <v-text-field v-model="post.telefon" :rules="rules" label="Numar telefon" required class="input"
                ></v-text-field>
                <v-btn type="submit" class="mt-3" color="success">Update Patient</v-btn>
            </v-form>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import API from '../api'
  // Components
  
  
  export default {
    name: 'AddPatient',
  
    data() {
      return {
        adresaSecundara: true,
        rules: [(value) =>!!value || "This field is required!"],
        items: [ 'Acasa', 'Munca', 'adresa Alternativa', 'Alta'],
        post: {
          nume: "",
          prenume: "",
          cnp: "",
          adresa: "",
          tipadresa: "",
          telefon: "",
          varsta: "",
          adresa2: "",
          tipadresa2: "",
        },
          image: "",
      }
    },
    async created() {
        const response = await API.getSinglePost(this.$route.params.id);
        this.post = response;
    },
    methods: {
      async updateForm() {
        const formData = new FormData();
        formData.append('nume', this.post.nume);
        formData.append('prenume', this.post.prenume);
        formData.append('cnp', this.post.cnp);
        formData.append('adresa', this.post.adresa);
        formData.append('tipadresa', this.post.tipadresa);
        formData.append('adresa2', this.post.adresa2);
        formData.append('tipadresa2', this.post.tipadresa2);
        formData.append('telefon', this.post.telefon);
        formData.append('varsta', this.post.varsta);

        if(this.$refs.form.validate()) {
          const response = await API.updatePost(this.$route.params.id, formData);
          this.$router.push({ name:'home', params: {message: response.message} });
        }
  
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
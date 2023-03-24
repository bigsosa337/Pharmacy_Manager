<template>
  <v-container>
    <v-alert  close-text="Close Alert" title="Alert" type="success" color="green accent-4" closeable v-if="this.$route.params.message">{{ message }}</v-alert>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Patient</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="submitForm" class="pa-5 " enctype="multipart/form-data" method="post">
               <v-text-field v-model="post.nume" :rules="rules" label="Nume"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.prenume" :rules="rules" label="Prenume"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.cnp" :rules="rules" label="CNP"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.adresa" :rules="rules" label="Adresa" required class="input"
               ></v-text-field>
               <v-select
               :items="items"
               label="Tip Adresa"
               v-model="post.tipadresa"
               required
               >
              </v-select>
              <v-container v-if="adresaSecundara">
                <v-text-field v-model="post.adresa2" :rules="rules" label="Adresa" required class="input"
                ></v-text-field>
                <v-select
                :items="items"
                label="Tip Adresa"
                v-model="post.tipadresa2"
                required
                >
              </v-select>
                
              </v-container>
              <v-row class="d-flex justify-center align-center mt-4">
                <v-btn class="mb-5 " @click="showSecondaryAdress">Adauga Adresa Secundara</v-btn>
              </v-row>
                <br>
              <v-text-field v-model="post.varsta" :rules="[v => !!v || 'Required']" label="Varsta" required class="input"
                ></v-text-field>
                <v-text-field v-model="post.telefon" :rules="rules" label="Numar telefon" required class="input"
                ></v-text-field>
                <v-btn type="submit" class="mt-3" color="primary">Add Patient</v-btn>
              </v-form>
            </v-card>
            
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import API from '../api'


export default {
  name: 'AddPatient',
  data() {
    return {
      adresaSecundara: false,
      rules: [
      value => {
        if (value) return true

        return 'This field is required.'
      },
    ],
    items: [ 'Acasa', 'Munca', 'Adresa Alternativa', 'Alta'],
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
    }
  },
  methods: {
    showSecondaryAdress() {
      this.adresaSecundara = !this.adresaSecundara
    },

    async submitForm() {
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

      const response = await API.addPost(formData);
      this.$router.push({ name:'home', params: {message: response.message} });
      if(this.$refs.form.validate()) {
      } else {
        alert("TYPE IN THE REQUIRED FORMS");
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
  h3 {
    padding: 5px;
  }
</style>
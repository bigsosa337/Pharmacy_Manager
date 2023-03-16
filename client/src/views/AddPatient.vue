<template>
  <v-container>
    <v-alert  close-text="Close Alert" title="Alert" type="success" color="green accent-4" closeable v-if="this.$route.params.message">{{ message }}</v-alert>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Patient</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data" method="post">
               <v-text-field v-model="post.title" :rules="rules" label="Title"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.category" :rules="rules" label="Category" required class="input"
               ></v-text-field>
               <v-text-field v-model="post.content" :rules="[v => !!v || 'Required']" label="Content" required class="input"
               ></v-text-field>
              <v-btn type="submit" class="mt-3" color="primary">Add Patient</v-btn>
          </v-form>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import utils from '../utils'
import API from '../api'
// Components


export default {
  name: 'AddPatient',

  data() {
    return {
      rules: [
      value => {
        if (value) return true

        return 'This field is required.'
      },
    ],
      post: {
        title: "",
        category: "",
        content: "",
        image: "",
      },
      // image:"",
      // prenume:"",
      // nume:"",
      // cnp:"",
      // telefon:"",
      // adresa:"",
      // TipAdresa:"",
      // valid: null,
      // validators: {
        //   required: value => !!value || 'This field is required'
        // }
        image: "",
    }
  },
  methods: {
    selectFile(event) {
      // this.image = file[0]
      // console.log(file[1])
      // console.log(this.image.name)
      var files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      var file = files[0];
      this.filename = file.name;
      this.createImage(files[0]);
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('image', this.image);
      formData.append('title', this.post.title);
      formData.append('category', this.post.category);
      formData.append('content', this.post.content);
      if(this.$refs.form.validate() && this.post.category.length) {
        const response = await API.addPost(formData);
        this.$router.push({ name:'home', params: {message: response.message} });
      } else {
        alert("TYPE IN THE REQUIRED FORMS");
      }
    
    },
    addPatient() {
      let requestParameters = {...utils.globalRequestParameters};
      let data = {};
      data.prenume = this.prenume;
      data.nume = this.nume;
      data.cnp = this.cnp;
      data.telefon = this.telefon;
      data.adresa= this.adresa;
      data.TipAdresa = this.TipAdresa;

      requestParameters.body = JSON.stringify(data);
      fetch(utils.url + "users", requestParameters)
        .then((res) => res.json())
        .then((res) => {
          
        })
    }
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
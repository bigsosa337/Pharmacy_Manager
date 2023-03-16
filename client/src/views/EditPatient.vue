<template>
    <v-container>
      <v-alert  close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message"></v-alert>
      <v-row no-gutters>
        <v-col sm="10" class="mx-auto">
          <v-card class="pa-5">
            <v-card-title>Edit Patient</v-card-title>
            <v-divider></v-divider>
            <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data" method="post">
                 <v-text-field v-model="post.title"  label="Title" required class="input"
                 ></v-text-field>
                 <v-text-field v-model="post.category"  label="Category" required class="input"
                 ></v-text-field>
                 <v-text-field v-model="post.content" :rules="[v => !!v || 'Required']" label="Content" required class="input"
                 ></v-text-field>
                <v-btn type="submit" class="mt-3" color="success">Update Patient</v-btn>
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
        rules: [(value) =>!!value || "This field is required!"],
        post: {
          title: "",
          category: "",
          content: "",
          image: "",
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
        formData.append('title', this.post.title);
        formData.append('category', this.post.category);
        formData.append('content', this.post.content);
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
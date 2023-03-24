<template>
    <v-container>
      <v-alert  close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message"></v-alert>
      <v-row no-gutters>
        <v-col sm="10" class="mx-auto">
          <v-card class="pa-5">
            <v-card-title>Edit Patient</v-card-title>
            <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data" method="post">
               <v-text-field v-model="post.name" :rules="rules" label="name"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.firstname" :rules="rules" label="firstname"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.cnp" :rules="rules" label="CNP"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.address" :rules="rules" label="address" required class="input"
               ></v-text-field>
               <v-select
               :items="items"
               label="Tip address"
               v-model="post.addresstype"
               required
               >
              </v-select>
              <v-container v-if="addressSecundara">
                <v-text-field v-model="post.address2"  label="address Secundara" required class="input"
                ></v-text-field>
                <v-select
                :items="items"
                label="Tip address"
                v-model="post.addresstype2"
                required
                >
              </v-select>
                
              </v-container>
              <v-text-field v-model="post.age" :rules="rules" label="age" required class="input"
                ></v-text-field>
                <v-text-field v-model="post.phone" :rules="rules" label="Numar telefon" required class="input"
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
        addressSecundara: true,
        rules: [(value) =>!!value || "This field is required!"],
        items: [ 'Home', 'Work', 'Alternative', 'Other'],
        post: {
          name: "",
          firstname: "",
          cnp: "",
          address: "",
          addresstype: "",
          phone: "",
          age: "",
          address2: "",
          addresstype2: "",
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
        formData.append('name', this.post.name);
        formData.append('firstname', this.post.firstname);
        formData.append('cnp', this.post.cnp);
        formData.append('address', this.post.address);
        formData.append('addresstype', this.post.addresstype);
        formData.append('address2', this.post.address2);
        formData.append('addresstype2', this.post.addresstype2);
        formData.append('phone', this.post.phone);
        formData.append('age', this.post.age);

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
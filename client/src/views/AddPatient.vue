<template>
  <v-container>
    <v-alert  close-text="Close Alert" title="Alert" type="success" color="green accent-4" closeable v-if="this.$route.params.message">{{ message }}</v-alert>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Patient</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="submitForm" class="pa-5 " enctype="multipart/form-data" method="post">
               <v-text-field v-model="post.name" :rules="[value => !!value || 'This field is required.']" label="Last Name" required class="input"
               ></v-text-field>
               <v-text-field v-model="post.firstname" :rules="rules" label="Surname"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.cnp" :rules="rules" label="CNP"  class="input"
               ></v-text-field>
               <v-text-field v-model="post.address" :rules="rules" label="Address" required class="input"
               ></v-text-field>
               <v-select
               :items="items"
               label="Address type"
               v-model="post.addresstype"
               required
               >
              </v-select>
              <v-container v-if="addressSecundara">
                <v-text-field v-model="post.address2" label="Address" required class="input"
                ></v-text-field>
                <v-select
                :items="items"
                label="Address type"
                v-model="post.addresstype2"
                required
                >
              </v-select>
                
              </v-container>
              <v-row class="d-flex justify-center align-center mt-4">
                <v-btn class="mb-5 " variant="outlined" @click="showSecondaryAdress">Add Secondary Address</v-btn>
              </v-row>
                <br>
              <v-text-field v-model="post.age" :rules="rules" label="Age" required class="input"
                ></v-text-field>
                <v-text-field v-model="post.phone" :rules="rules" label="Phone" required class="input"
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
      addressSecundara: false,
      rules: [
      value => !!value || 'Form is required'
    ],
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
    }
  },
  methods: {
    showSecondaryAdress() {
      this.addressSecundara = !this.addressSecundara
    },

    async submitForm() {
      if(!this.post.name && 
      !this.post.firstname && 
      !this.post.phone &&
      !this.post.age &&
      !this.post.address &&
      !this.post.cnp
      ) {
        alert("complete the required inputs!")
        return false;
      } else {
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
  
        const response = await API.addPost(formData);
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
  h3 {
    padding: 5px;
  }
</style>
<template>
  <div class="AddPage">
    <v-form>
      <h3>First Name</h3>
      <v-text-field
        v-model="prenume"
        :rules="nameRules"
        label="First name"
        required
        class="input"
      ></v-text-field>
      <h3>Last Name</h3>
      <v-text-field
        v-model="nume"
        :rules="nameRules"
        label="Last name"
        required
        class="input"
      ></v-text-field>
      <h3>ID Number</h3>
      <v-text-field
        v-model="cnp"
        :rules="nameRules"
        :counter="10"
        label="ID Number"
        required
        class="input"
      ></v-text-field>
      <h3>Phone Number</h3>
      <v-text-field
        v-model="telefon"
        :rules="nameRules"
        label="First name"
        required
        class="input"
      ></v-text-field>
      <h3>Adress</h3>
      <v-text-field
        v-model="Adresa"
        :rules="nameRules"
        label="Adress"
        required
        class="input"
      ></v-text-field>
      <v-select
      label="Tip"
      :items="['Home','Work']"
      v-model="TipAdresa"
      ></v-select>
      <v-btn
      variant="tonal"
      >Add</v-btn>
    </v-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import utils from '../utils'
// Components


export default {
  name: 'AddPatient',

  data() {
    return {
      prenume:"",
      nume:"",
      cnp:"",
      telefon:"",
      adresa:"",
      TipAdresa:"",
      valid: null,
      validators: {
        required: value => !!value || 'This field is required'
      }
    }
  },
  methods: {
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
  .input {
    width: 400px;
  }
  h3 {
    padding: 5px;
  }
</style>
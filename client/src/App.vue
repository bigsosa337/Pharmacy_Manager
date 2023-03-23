<template>
  <v-app id="inspire">
  <v-app-bar app color="indigo" dark>
      <v-avatar class="mx-3" size="40">
        <v-icon size="24">mdi-heart-pulse</v-icon>
      </v-avatar>
      <v-toolbar-title>PharmaMGR</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" >Patients</v-btn>
      <v-btn to="/add-post" >Add Patient</v-btn>
      <v-btn to="/meds" >Medications</v-btn>
      <v-btn to="/add-meds" >Add Meds</v-btn>
      <v-btn to="/reqs" dark>Requests</v-btn>
    </v-app-bar>
  
  <v-main class="bg-grey-lighten-3" id="mainbody">
            <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import AddPatient from './views/AddPatient.vue'
  export default {
    data: () => ({
      links: [
        'Patient List',
        'Add Patient',
        'Meds List',
        'Add Meds',
      ],
    }),
  }
</script>

<style>
#mainbody{
  /* background-image: url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80"); */
  /* -webkit-filter:blur(5px); */
  background-position: center;
  background-size: cover;
}
#body {
  backdrop-filter: blur(5px);
  padding:55px;
  filter: drop-shadow(0 0 0.75rem rgb(83, 83, 83));

}
.router  {
  margin: 0px 5px 0px 5px;
  text-decoration: none;
}
.v-toolbar__title {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
}
</style>
<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center justify-center">
        <!-- <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar> -->
      
        <router-link to="/">
        <v-btn variant="tonal" value="Home" >Home</v-btn>
        </router-link>
          <router-link to="/add-post">
          <v-btn variant="tonal" value="Add Patient" >Add Patient</v-btn>
          </router-link>
          
        
        
        <!-- <v-btn
        v-for="link in links"
        :key="link"
        variant="text"
        >
        {{ link }} 
        </v-btn> -->
      
      <!-- <v-responsive max-width="260">
        <v-text-field
        density="compact"
        hide-details
        variant="solo"
        to="/api/med"
        ></v-text-field> 
      </v-responsive> -->
    </v-container>
  </v-app-bar>
  
  <v-main class="bg-grey-lighten-3" id="mainbody">
    <v-container id="body">
        <v-row>
          <v-col>
            <!-- <v-sheet
             min-height="800"
            >  -->
            <router-view/>
            <!-- </v-sheet> -->
          </v-col>
        </v-row>
    </v-container>
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
  background-image: url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80");
  /* -webkit-filter:blur(5px); */
  background-position: center;
  background-size: cover;
}
#body {
  backdrop-filter: blur(5px);
  padding:55px;
  filter: drop-shadow(0 0 0.75rem rgb(83, 83, 83));

}

</style>
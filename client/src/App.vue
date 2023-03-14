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
  
  <v-main class="bg-grey-lighten-3">
    <v-container>
        <v-row>
          <v-col>
            <v-sheet
            min-height="800"
            >
            <router-view/>
            </v-sheet>
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
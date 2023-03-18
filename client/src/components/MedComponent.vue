<template>
    <v-card  class="pa-1 ma-3" :to="{ name:'med', params: {id: med._id}}">
                    <v-card-title class="headline" >
                            {{ med.nume}} <br>
                             de la: {{ med.producator }}
                    </v-card-title>
                    <v-card-subtitle>
                        ID: {{ med._id }}
                    </v-card-subtitle>
                    <v-divider></v-divider>

                    <v-btn class="ml-4 mt-3 mb-3" small variant="outlined" color="indigo" >
                        Deschide
                    </v-btn>
                        
                </v-card>
  </template>
  

 <script>
import API from '../api'


export default {
    name: "HomePage",
    props: {
        med: Object,
    },
    data() {
        return {
            posts:[],
        };
    },
    async created() {
        this.posts = await API.getAllMeds();
    }
}

</script>

<style scoped>
.pa-1 {
    /* margin: 10px 0px 15px 0px; */
    /* display:inline-block; */
    /* justify-items: center;
    align-content: center;
    justify-content: center; */
}

</style>
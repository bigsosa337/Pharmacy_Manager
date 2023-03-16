<template>
    <v-card class="pa-1" :to="{ name:'med', params: {id: med._id}}">
                    <v-card-title class="headline" >
                            med ID {{ med._id }}
                    </v-card-title>
                    <v-card-subtitle>
                        Age: 
                    </v-card-subtitle>
                    <v-divider></v-divider>

                    <v-btn class="ml-4 mt-3" small variant="outlined" color="indigo" >
                        Open
                    </v-btn>
                        <v-card-text class="py-0">
                            <p></p>
                        </v-card-text>
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
    margin: 10px 0px 15px 0px;
}

</style>
<template>
    <v-card  class="pa-1 ma-3" :to="{ name:'med', params: {id: post._id}}">
                    <v-card-title class="headline" >
                            {{ med.name}} <br>
                             de la: {{ med.Manufacturer }}
                    </v-card-title>
                    <v-card-subtitle>
                        ID: {{ med._id }}
                    </v-card-subtitle>
                    <v-divider></v-divider>

                    <v-btn class="ml-4 mt-3 mb-3" small variant="outlined" color="indigo" >
                        Deschide
                    </v-btn>
                    <v-checkbox label="Select for deletion" v-model="selectedItems"
                    :value="med._id"
                    @click.stop
                    ></v-checkbox>

                </v-card>
  </template>
  

 <script>
import API from '../api'


export default {
    name: "MedComponent",
    props: {
        med: Object,
    },
    data() {
        return {
            posts:[],
            selectedItems: [],
        };
    },
    async created() {
        this.posts = await API.getAllMeds();
    }
}

</script>
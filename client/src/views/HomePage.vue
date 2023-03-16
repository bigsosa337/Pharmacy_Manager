<template>
    <v-container>
        <v-alert  close-text="Close Alert" title="Alert" type="success" color="green accent-4" closeable v-if="this.$route.params.message">{{ this.$route.params.message }}</v-alert>
        <v-row no-gutters>
            <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id" >
                <v-card class="pa-1" :to="{ name:'post', params: {id: post._id}}">
                    <v-card-title class="headline" >
                        {{ post.title }}
                        <v-icon icon="mdi-vuetify" end></v-icon>
                    </v-card-title>
                    <v-card-subtitle>
                        Age: {{ post.title }}
                    </v-card-subtitle>
                    <v-divider></v-divider>

                    <v-btn class="ml-4 mt-3" small variant="outlined" color="indigo" >
                        Open
                    </v-btn>
                        <v-card-text class="py-0">
                            <p>{{ post.content }}</p>
                        </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </template>
  

 <script>
import API from '../api'

export default {
    name: "HomePage",
    data() {
        return {
            posts:[],
        };
    },
    async created() {
        this.posts = await API.getAllPost();
    }
}

</script>
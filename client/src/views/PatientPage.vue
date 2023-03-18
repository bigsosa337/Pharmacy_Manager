<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto" >
                <v-card class="pa-2" >
                    <h2>{{ post.nume }} {{ post.prenume }} </h2>
                    <!-- <v-img :src="`/${post.image}`" height="250"></v-img> -->
                    <v-card-actions class="pb-0" >
                        <v-row class="mt-1 mx-1" >
                            <v-col sm="2">
                                <v-btn  variant="outlined" color="primary">Request</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn color="warning" @click="edit">Edit</v-btn>
                                <v-btn color="red" @click="deleteUser(post._id)">Delete</v-btn>
                                
                            </v-col>
                            <!-- <button :to="{ name:'edit-post', params: {id: post.id}}">12121212</button> -->
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <br>
                        <h3>{{ post.nume }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <!-- <h2>Numar telefon</h2> -->
                        <p>Nume: {{ post.nume }} Prenume: {{ post.prenume }}</p>
                        <p>CNP {{ post.cnp }}</p>
                        <p>Telefon: {{ post.telefon }}</p>
                        <p>Adresa: {{ post.adresa }}</p>
                        <p>Tip adresa: {{ post.tipadresa }}</p>
                        <span v-if="post.adresa2" >
                            <p>Adresa secundara: {{ post.adresa2 }}</p>
                            <p>Tip adresa secundara: {{ post.tipadresa2 }}</p>
                        </span>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '../api';
import { VListItemContent } from 'vuetify';

export default {
    components: {
        VListItemContent,
    },
    data() {
        return {
            post: {},
        };
    },
    methods: {
        edit() {
            this.$router.push("/edit-post/" + this.post._id)
        },
       async deleteUser(id) {
        const response = await API.deletePost(id);
        this.$router.push({name: 'home', params: { message: response.message }})
       }

    },
    async created() {
        const response = await API.getSinglePost(this.$route.params.id)
        this.post = response;
    }
}
</script>
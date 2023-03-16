<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto" >
                <v-card class="pa-2" >
                    <h2>SOMETHING </h2>
                    <!-- <v-img :src="`/${post.image}`" height="250"></v-img> -->
                    <v-card-actions class="pb-0" >
                        <v-row class="mt-1 mx-1" >
                            <v-col sm="2">
                                <v-btn small variant="outlined" color="primary">Age:{{ post.varsta }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn color="warning" @click="edit">Edit</v-btn>
                                <v-btn color="red" @click="deleteUser(post._id)">Delete</v-btn>
                                
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <br>
                        <h3>{{ post._id }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>Nume: {{ post.nume }} Prenume: {{ post.prenume }}</p>
                        <p>CNP {{ post.cnp }}</p>
                        <p>telefon: {{ post.telefon }}</p>
                        <p>Adresa: {{ post.adresa }}</p>
                        <p>Tip Adresa: {{ post.tipAdresa }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '../api'

export default {
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
        const response = await API.deleteMed(id);
        this.$router.push({name: 'view-meds', params: { message: response.message }})
       }

    },
    async created() {
        const response = await API.getSingleMed(this.$route.params.id)
        this.post = response;
    }
}
</script>
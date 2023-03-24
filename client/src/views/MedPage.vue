<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto" >
                <v-card class="pa-2" >
                    <h2 class="pa-3" >{{ post.name }} - {{ post.Manufacturer }} </h2>
                    <v-card-actions class="pb-0" >
                        <v-row class="mt-1 mx-1" >
                            <v-col sm="2">
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn color="warning" variant="outlined" @click="edit">Edit</v-btn>
                                <v-btn color="red" @click="deleteUser(post._id)">Delete</v-btn>
                                
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <br>
                        <h3>ID: {{ post._id }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>Medicine: {{ post.name }}</p>
                        <p>Manufacturer: {{ post.Manufacturer }}</p>
                        <p>Dosage: {{ post.Dosage }}</p>
                        <p>medtype pastilei: {{ post.medtype }}</p>
                        <p>Expiration Date: {{ post.dateOfExp }}</p>
                        <p>Available Stock: {{ post.stock }}</p>
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
            this.$router.push("/edit-med/" + this.post._id)
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
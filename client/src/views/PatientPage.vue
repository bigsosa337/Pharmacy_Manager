<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto" >
                <v-card class="pa-2" >
                    <h2>{{ post.title }}</h2>
                    <!-- <v-img :src="`/${post.image}`" height="250"></v-img> -->
                    <v-card-actions class="pb-0" >
                        <v-row class="mt-1 mx-1" >
                            <v-col sm="2">
                                <v-btn small variant="outlined" color="primary">{{ post.category }}</v-btn>
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
                        <h3>{{ post.title }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
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
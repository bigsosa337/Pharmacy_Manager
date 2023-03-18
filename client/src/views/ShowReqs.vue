<template>
    <v-container>
        <h1>MEDICINE Requests</h1>
        <v-row class="pt-3">
            <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
                <v-card class="pa-1" >
                    <v-card-title>
                        {{ post.nume }}
                    </v-card-title>
                    <v-card-subtitle>
                        <div v-for="med in post.meds" :key="med">
                            {{ med.name }} - {{ med.quantity }}
                        </div>
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
import API from '../api'

export default {
    // name: ShowReqs,
    data() {
        return {
            posts:[],
        }
    },
    async created() {
        // console.log(meds.length)
        this.posts = await API.getAllReqs();
    }
}
</script>
<template>
    <v-container>
        <h1>MEDICINE Requests</h1>
        <v-btn  @click="deleteSelected" >Delete Selected</v-btn>
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
                        <v-checkbox label="Select for deletion" v-model="selectedItems" :value="post._id" ></v-checkbox>

                    </v-card-subtitle>
                    <v-btn class="ml-4 mt-3 mb-3" small variant="outlined" color="indigo"
                    :to="{ name:'req-page', params: { id: post._id }}"
                    >
                        Open
                    </v-btn>
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
            selectedItems: [],

        }
    },
    async created() {
        // console.log(meds.length)
        this.posts = await API.getAllReqs();
    },
    methods: {
        async deleteSelected() {
            console.log(this.selectedItems)
            for(let i = 0; i < this.selectedItems.length; i++) {
                const response = await API.deleteRequest(this.selectedItems[i]);
                this.$router.push({name: 'reqs', params: { message: response.message }})
            }
            location.reload();
        },
        viewReq() {
            
        }
    }
}
</script>
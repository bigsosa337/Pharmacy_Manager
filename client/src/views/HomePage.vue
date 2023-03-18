<template>
    <v-container>
        <v-alert  close-text="Close Alert" title="Alert" type="success" color="green accent-4" closeable v-if="this.$route.params.message">{{ this.$route.params.message }}</v-alert>
        <span class="delAllBtn" >
        <v-btn  @click="deleteSelected" >Delete Selected</v-btn>
        </span>
        <v-row no-gutters>
            <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id" >
                <v-card class="pa-1" >
                    <v-card-title class="headline" >
                        {{ post.nume }} {{ post.prenume }}
                    </v-card-title>
                    <v-card-subtitle>
                        Age: {{ post.varsta }}
                    </v-card-subtitle>
                    <v-divider></v-divider>

                    <v-btn class="ml-4 mt-3" small variant="outlined" color="indigo"
                    :to="{ name:'post', params: {id: post._id}}"
                    >
                        Open
                    </v-btn>
                        <v-card-text class="py-0">
                            <p>{{ post.telefon }}</p>
                        </v-card-text>
                        <v-checkbox label="Select for deletion" v-model="selectedItems" :value="post._id" ></v-checkbox>
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
            selectedItems: [],

        };
    },
    async created() {
        this.posts = await API.getAllPost();
    },
    methods: {
        async deleteSelected() {
            console.log(this.selectedItems)
            for(let i = 0; i < this.selectedItems.length; i++) {
                const response = await API.deletePost(this.selectedItems[i]);
                this.$router.push({name: 'home', params: { message: response.message }})
            }
            location.reload();
        }
    }
    
}

</script>

<style>
.delAllBtn {
    display: flex;
    justify-content: center;
    align-content: center;
}
</style>
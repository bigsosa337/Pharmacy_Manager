<template>
    <v-container>
        <h1>PATIENTS</h1>
        <span class="delAllBtn" >
        <v-btn  @click="deleteSelected" v-if="posts.length"
        class="ma-3"
        color="error"
        >Delete Selected</v-btn>
        </span>
        <v-row no-gutters>
            <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id" >
                <v-card class="pa-1" >
                    <v-card-title class="headline" >
                        {{ post.nume }} {{ post.prenume }}
                    </v-card-title>
                    <v-card-subtitle class="pb-2">
                        Age: {{ post.varsta }}
                    </v-card-subtitle>
                    <v-divider></v-divider>

                    <v-card-text class="py-0">
                        <p class="pt-3" >Phone: {{ post.telefon }}</p>
                    </v-card-text>
                    <v-btn class="ml-4 mt-3" small variant="outlined" color="indigo"
                    :to="{ name:'post', params: {id: post._id}}"
                    >Open</v-btn>
                    <v-checkbox class="checkForDel" label="Select for deletion" v-model="selectedItems" :value="post._id" ></v-checkbox>
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

<style scoped>

h1 {
  font-size: 40px;
  text-align: center;
}

.v-card {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.v-card-title {
  font-size: 24px;
  text-align: center;
}

.v-card-subtitle {
  font-size: 16px;
  text-align: center;
}

.v-card-actions {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.v-btn {
  font-size: 14px;
  margin-right: 8px;
  align-self: center;
}

.delAllBtn {
  display: flex;
  justify-content: center;
}

.v-checkbox__label {
  font-size: 14px;
}
</style>
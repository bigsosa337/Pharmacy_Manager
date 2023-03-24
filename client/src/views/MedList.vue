<template>
    <v-container id="postrow">
      <h1 class="display-4" color="error">Medications</h1>
    </v-container>
    <v-container id="postrow">
      <span class="delAllBtn" >
        <v-btn  @click="deleteSelected" v-if="posts.length"
        class="ma-3"
        color="error"
        >Delete Selected</v-btn>
        </span>
      <v-row>
        <v-col sm="4" class="pa-3 mt-3" v-for="post in posts" :key="post._id">
          <v-card class="pa-1">
            <v-card-title>
              {{ post.nume }}
            </v-card-title>
            <v-card-subtitle>
              Id: {{ post._id }}
            </v-card-subtitle>
            <v-card-subtitle>
              <div v-for="med in post.meds" :key="med">
                {{ med.name }} - {{ med.quantity }}
              </div>
              <v-switch class="pl-3" color="orange" label="Select for deletion" v-model="selectedItems" :value="post._id" type="checkbox"></v-switch>
            </v-card-subtitle>
            <v-btn class="ml-4 mt-3 mb-3" small variant="outlined" color="indigo"
              :to="{ name: 'med', params: { id: post._id }}">
              Open
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import API from '../api'
  import MedComponent from '@/components/MedComponent.vue';
  
  export default {
    name: "MedList",
    components: { MedComponent },
    data() {
      return {
        posts: [],
        selectedItems: [],
      }
    },
    async created() {
      this.posts = await API.getAllMeds();
    },
    methods: {
      async deleteSelected() {
        console.log(this.selectedItems)
        for (let i = 0; i < this.selectedItems.length; i++) {
          const response = await API.deleteMed(this.selectedItems[i]);
          this.$router.push({ name: 'view-meds', params: { message: response.message } })
        }
        location.reload();
      },
    }
  }
</script>

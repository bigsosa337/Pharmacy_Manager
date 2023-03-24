<template>
    <v-container>
      <v-row no-gutters justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="pa-4">
            <h2>{{ post.name }} {{ post.firstname }}</h2>
            <v-divider class="my-4"></v-divider>
            <v-img
              v-if="post.image"
              :src="`/${post.image}`"
              height="250"
              class="mb-4"
            ></v-img>
            <v-card-actions>
              <v-btn color="primary" @click="request" variant="flat">Request</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="warning" @click="edit" variant="outlined">Edit</v-btn>
              <v-btn color="red" @click="deleteUser(post._id)">Delete</v-btn>
            </v-card-actions>
            <v-card-text class="grey--text">
              <p><strong>ID No.:</strong> {{ post.cnp }}</p>
              <p><strong>Phone:</strong> {{ post.phone }}</p>
              <p><strong>Main Address:</strong> {{ post.address }} ({{ post.addresstype }})</p>
              <p v-if="post.address2">
                <strong>Secondary Address:</strong> {{ post.address2 }} ({{ post.addresstype2 }})
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import API from "../api";
  
  export default {
    name: "PatientPage",
    data() {
      return {
        post: {},
      };
    },
    methods: {
      request() {
        this.$router.push({
          name: "add-reqs",
          params: { patientName: `${this.post.name} ${this.post.firstname}` },
        });
      },
      edit() {
        this.$router.push("/edit-post/" + this.post._id);
      },
      async deleteUser(id) {
        const response = await API.deletePost(id);
        this.$router.push({ name: "home", params: { message: response.message } });
      },
    },
    async created() {
      const response = await API.getSinglePost(this.$route.params.id);
      this.post = response;
    },
  };
  </script>
  
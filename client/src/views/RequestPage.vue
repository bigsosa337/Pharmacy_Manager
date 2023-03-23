<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-3">
                  <h2 class="pa-3">Request for: {{ post.nume }}</h2>
                  <v-divider></v-divider>
                        <v-row class="mt-1 mx-1">
                            <v-col sm="6">
                                <v-btn class="mr-2" variant="flat" color="success"
                                @click="approveRequest"
                                :disabled="isDisabled"
                                >Approve</v-btn>
                                <v-btn  variant="outlined"
                                @click="declineRequest"
                                :disabled="isDisabled"
                                >Decline</v-btn>
                            </v-col>
                            <v-col sm="6" class="d-flex justify-end">
                                <v-btn color="warning" 
                                @click="edit"
                                variant="outlined"
                                :disabled="isDisabled"
                                >Edit</v-btn>
                                <v-btn color="red"
                                variant="text" 
                                @click="deleteRequest(post._id)"
                                >Delete</v-btn>
                                
                            </v-col>
                            Status: {{ post.status }}
                        </v-row>
                  <v-card-title ></v-card-title>
                  <v-divider class="pb-3"></v-divider>
                  <div class="pl-3 pb-1" v-for="med in post.meds" :key="med">
                            {{ med.name }}: {{ med.quantity }} 
                        </div>
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
            post:{},
            selectedItems: [],
            meds:[],
            isDisabled: false,

        }
    },
    async created() {
        const response = await API.getAllReqs();
        this.post = response.find(req => req._id === this.$route.params.id);
        const response1 = await API.getAllMeds();
        this.meds = response1;
        console.log(this.post)
        console.log(this.meds)
        this.isDisabled
        if (this.post.status == "Approved" || this.post.status == "Declined"){
            this.isDisabled = true
        }
        
    },
    methods: {
        edit() {
            this.$router.push("/edit-req/" + this.post._id)
        },
        async deleteSelected() {
            console.log(this.selectedItems)
            for(let i = 0; i < this.selectedItems.length; i++) {
                const response = await API.deleteRequest(this.selectedItems[i]);
                this.$router.push({name: 'reqs', params: { message: response.message }})
            }
            location.reload();
        },
        async deleteRequest(id) {
        const response = await API.deleteRequest(id);
        this.$router.push({name: 'reqs', params: { message: response.message }})
       },
       async approveRequest() {
        const medsInPost = this.post.meds;
        const insufficientStock = medsInPost.some(medInPost => {
            const medFound = this.meds.find(med => med.nume === medInPost.name);
            return !medFound || medFound.stock < medInPost.quantity;
        });
        if (insufficientStock) {
            alert('Insufficient stock for one or more medications');
            return;
        }
        for (const medInPost of medsInPost) {
            const medFound = this.meds.find(med => med.nume === medInPost.name);
            console.log(medFound)
            var medId = medFound._id
            console.log(medFound._id)
            const newStock = medFound.stock - medInPost.quantity;
            //i put the api requests here because its easier to read and understand
            //since i am only modifying 1 attribute
            const response = await fetch(`/api/meds/${medId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ stock: newStock })
            });
            const data = await response.json();
        }
        var postId = this.post._id
        console.log(postId)
        //i put the api requests here because its easier to read and understand
        //since i am only modifying 1 attribute
        const response = await fetch(`/api/reqs/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: "Approved"})
        })
        location.reload();
       },
       async declineRequest() {
        var postId = this.post._id
        const response = await fetch(`/api/reqs/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: "Declined"})
        })
        location.reload();
       }
    }
}
</script>
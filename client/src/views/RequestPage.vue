<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                  <h2 class="pa-3">Request for: {{ post.nume }}</h2>
                  <v-card-title ></v-card-title>
                  <div class="pl-3 pb-1" v-for="med in post.meds" :key="med">
                            {{ med.name }} - {{ med.quantity }}
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

        }
    },
    async created() {
        // console.log(meds.length)
        // const response = await API.getAllReqs();
        // console.log(response)
        // // console.log(response[0])
        // let postid = this.$route.params.id
        // this.post = response[postid]
        // console.log(this.post)
        // const response1 = await API.getAllMeds();
        // this.meds = response1
        const response = await API.getAllReqs();
        this.post = response.find(req => req._id === this.$route.params.id);
        const response1 = await API.getAllMeds();
        this.meds = response1;
        console.log(this.post)
    },
    methods: {
        async deleteSelected() {
            console.log(this.selectedItems)
            for(let i = 0; i < this.selectedItems.length; i++) {
                const response = await API.deleteRequest(this.selectedItems[i]);
                this.$router.push({name: 'reqs', params: { message: response.message }})
            }
            location.reload();
        }
    }
}
</script>
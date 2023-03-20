<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    v
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
        }
    }
}
</script>
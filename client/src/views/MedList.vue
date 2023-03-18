<template>
    <v-container>
        <v-row>
            <h1>Med Page</h1>
            <br>
            <v-col  class="pa-3 mt-9" >
                <MedComponent
                :med="elem"
                v-for="elem in posts"
                :key="elem._id"
                class="meds"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '../api'
import MedComponent from '@/components/MedComponent.vue';

export default {
    name:"MedList",
    components: {MedComponent},
    data() {
        return {
            posts:[]
        }
    },
    async created() {
        this.posts = await API.getAllMeds();
    }
}

</script>

<style scoped>
.pa-3{
    display: flex;
    justify-content: center;
    align-content: center;
}

</style>
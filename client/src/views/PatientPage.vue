<template>
    <v-container>
        <v-row>
            <v-col sm="10" class="pa-4 mx-auto" >
                <v-card class="pa-2" >
                    <v-img :src="`/${post.image}`" height="250"></v-img>
                    <v-card-ac class="pb-0" >
                        <v-row class="mt-1 mx-1" >
                            <v-col sm="2">
                                <v-btn small outlined color="primary">{{ post.category }}</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-ac>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '../api'

export default {
    data() {
        return {
            post: {},
        };
    },
    async created() {
        const response = await API.getSinglePost(this.$route.params.id)
        this.post = response;
    }
}
</script>
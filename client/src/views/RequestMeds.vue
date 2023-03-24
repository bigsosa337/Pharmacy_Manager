<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Add new request</v-card-title>
                    <v-divider></v-divider>
                    <req-component :patient-name="patientName" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { TextField } from '@asigloo/vue-dynamic-forms'
import ReqComponent  from '../components/ReqComponent'

export default {
    components: {
        ReqComponent,
    },
    props: {
    },
  data() {
    return {
      patientName: this.$route.params.patientName
    }
  },
}
</script>
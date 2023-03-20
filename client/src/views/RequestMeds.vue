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
    name: "Patient",
    components: {
        ReqComponent,
    },
    props: {
      patientName: {
        type: String,
        required: true,
      }
    },
    computed: {
      patientName() {
        return this.$route.params.patientName
      },
    },
  data() {
    return {
      
    }
  },
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Edit Request</v-card-title>
                    <v-divider></v-divider>
                    <edit-req-component :patient-name="patientName" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '@/api'
import EditReqComponent  from '../components/EditReqComponent'

export default {
    name: "Patient",
    components: {
        EditReqComponent,
    },
    data() {
    return {
      requests: {},
      form: {
                nameOfPatient: this.patientName,
                status: "Pending",
                meds: [
                    { name: '', quantity: 0 }
                ]
            }
    }
    },
    async created() {
        // const response = await API.getSingleRequest(this.$route.params.id)
        // this.requests = response
    },
    props: {
    //   patientName: {
    //     type: String,
    //     required: true,
    //   }
    },
    computed: {
    //   patientName() {
    //     return this.$route.params.patientName
    //   },
    },
    methods: {
        async updateRequest() {


            if(this.$refs.form.validate()){
            const response = await API.updateRequest(this.$route.params.id, formData)
            }
        }
    },
}
</script>
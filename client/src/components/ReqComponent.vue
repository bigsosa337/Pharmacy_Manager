<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-form ref="form" @submit.prevent="submitForm"
                enctype="multipart/form-data" method="post" 
                >
                <v-text-field label="Patient Name" v-model="form.nameOfPatient" disabled >
                </v-text-field>
                <v-container class="pa-5" v-for="(item, index) in form.meds" :key="index">
                    <h3>Item {{ index }}</h3>
                    <br>
                    <!-- {{ item }} -->
                    <!-- <v-row> -->
                        <!-- <span> -->
                        <div class="div1" >
                            <label for="name">Name</label>
                            <v-text-field  label="Name" class="input" 
                            v-model="item.name"
                            ></v-text-field>
                        </div>
                        <div class="div1">
                            <label for="name">Quantity</label>
                            <v-text-field  label="Price" class="input" 
                            v-model="item.quantity"
                            ></v-text-field>
                        </div>
                    <!-- </v-row> -->
                        <v-btn  class="mt-8 mr-4" color="success" @click="addRow">+</v-btn>
                        <br>
                        <v-btn class="mt-8" color="error" variant="outlined" @click="removeRow(index)" >x</v-btn>
                    <!-- </span> -->
                </v-container>
                <v-btn
                color="default"
                type="submit"
                >Submit Request</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { reactive } from 'vue'
import API from '../api'

export default {
    name: 'ReqComponent',
    props: ['patientName'],
    data() {
        return {
            form: {
                nameOfPatient: this.patientName,
                meds: [
                    { name: '', quantity: 0 }
                ]
            }
        }
    },
    created() {
        this.nameOfPatient = this.$route.params.patientName
    },
    methods: {
        addRow() {
            console.log(this.form.meds);
            console.log(this.form)
            this.form.meds.push({ name:'', quantity: 0})
        },
        removeRow(index) {
            if(this.form.meds.length > 1) {
                this.form.meds.splice(index, 1)
            }
        },
        async submitForm() {
            const data = {
                nume: this.form.nameOfPatient,
                meds: this.form.meds
            };
        
            // Log the data being sent
            console.log('Data being sent:', data);

            // if(this.$refs.form.validate()) {
            //     const response = await API.addRequest(data);
            //     this.$router.push.({ name:'reqs', params: { message: response.message }})
            // }
        
            API.addRequest(data)
                .then(response => {
                    // handle successful response
                    this.$router.push({ name:'reqs', params: { message: response.message }})
                })
                .catch(error => {
                    console.log(error);
                    // handle error
                });
        }
    }
}
</script>

<style scoped>
.pa-5{
    display: flex;
    justify-content: center;
    align-content: center;
}
.div1 {
    flex: 12;
    /* display: flex; */
    align-content: center;
    justify-content: center;
    margin: 0px 15px 0px 0px;
}
</style>
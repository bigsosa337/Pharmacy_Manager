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
                    <v-row class="mb-5">
                        <h3>Item {{ index }}</h3>
                    </v-row>
                        <div class="div1" >
                            <label for="name">Name</label>
                            <v-select
                              :items="items"
                              label="Name"
                              v-model="item.name"
                              :rules="[value => !!value || 'This field is required.']"
                              required
                              >
                            </v-select>
                        </div>
                        <div class="div1">
                            <label for="name">Quantity</label>
                            <v-text-field  label="Price" class="input" 
                            type="number"
                            v-model="item.quantity"
                            :rules="[value => !!value || 'This field is required.']"
                            required
                            ></v-text-field>
                        </div>
                        <v-btn  class="mt-8 mr-4" color="success" @click="addRow">+</v-btn>
                        <br>
                        <v-btn class="mt-8" color="error" variant="outlined" @click="removeRow(index)" >x</v-btn>
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

import API from '../api'

export default {
    name: 'ReqComponent',
    props: ['patientName'],
    data() {
        return {
            ids: [],items: [],
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
        try {
            this.nameOfPatient = this.$route.params.patientName;
            const response = await API.getAllMeds();
            let itemArray = response.map(item => item.nume)
            console.log(itemArray)

            // Assign the value of itemArray to this.itemss
            this.items = itemArray;
          // Assign the value of itemArray to this.itemss
        } catch (error) {
          console.log(error);
        }
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
            if(!this.$refs.forms.validate) {
                return false
            }
            const data = {
                nume: this.form.nameOfPatient,
                meds: this.form.meds,
                status: this.form.status
            };
        
            // Log the data being sent
            console.log('Data being sent:', data);

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
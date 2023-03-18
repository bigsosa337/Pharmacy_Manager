<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-form class="pa-5" v-for="(item, index) in form.meds" :key="index">
                    <h3>Item {{ index }}</h3>
                    <br>
                    {{ item }}
                    <!-- <v-row> -->
                        <!-- <span> -->
                        <div class="div1" >
                            <label for="name">Name</label>
                            <v-text-field  label="Name" class="input" 
                            v-model="item.meds[index].name"
                            ></v-text-field>
                        </div>
                        <div class="div1">
                            <label for="name">Quantity</label>
                            <v-text-field  label="Price" class="input" 
                            v-model="item.meds[index].quantity"
                            ></v-text-field>
                        </div>
                    <!-- </v-row> -->
                        <v-btn class="mt-8 mr-4" color="success" @click="addRow">+</v-btn>
                        <br>
                        <v-btn class="mt-8" color="error" variant="outlined" @click="removeRow(index)" >x</v-btn>
                    <!-- </span> -->
                </v-form>
                <v-btn
                color="default"
                >Submit Request</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { reactive } from 'vue'


export default {
    name: 'ReqComponent',
    setup() {
        const form = reactive({
            name: '',
            meds: [
                { name: '', quantity: 0 }
            ]
        })
        const addRow = () => {
            form.push({ name:'', price: 0})
        }
        const removeRow = (index) => {
            if(form.length > 1) {
                form.splice(index, 1)
            }
        }
        return{
            form,
            addRow,
            removeRow
        }
    }
}

</script>

<style>
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
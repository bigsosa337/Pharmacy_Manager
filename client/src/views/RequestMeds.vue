<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Add new request</v-card-title>
                    <v-divider></v-divider>
                    <!-- <v-form ref="form" enctype="multipart/form-data" method="post">
                        <v-text-field v-model="post.nume" label="Nume Pacient" class="input" disabled
                        ></v-text-field>
                        <v-text-field v-model="post.meds.name" label="Nume Pacient" class="input" 
                        ></v-text-field>
                        <v-text-field v-model="post.meds.quantity" label="Nume Pacient" class="input" 
                        ></v-text-field>
                    </v-form> -->
                    <!-- <dynamic-form :form="testForm" /> -->

                    <req-component/>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { TextField } from '@asigloo/vue-dynamic-forms'
// import ReqComponent from '../components/ReqComponent.vue'
import { createDynamicForms } from "@asigloo/vue-dynamic-forms";
import ReqComponent  from '../components/ReqComponent'

export default {
    components: {
        ReqComponent,
    },
  data() {
    return {
      testForm: {
        id: 'form-text-demo',
        fields: {
          username: TextField({
            label: 'Username',

          }),
        },
      },
      post: {
        nume: "",
        meds: {
            name: "",
            quantity: "",
        }
      },
    }
  },
}
</script>
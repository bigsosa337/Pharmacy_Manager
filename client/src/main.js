import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify();


const VueDynamicForms = createDynamicForms({
    // Global Options go here
  });

const app = createApp(App)
loadFonts()
app.component('VueDatePicker', VueDatePicker);



app.use(router).use(vuetify).use(VueDynamicForms).mount('#app')

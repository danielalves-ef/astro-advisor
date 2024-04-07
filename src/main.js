
// Components
// import 'dotenv/config'

import App from './App.vue'
// Composables
import { createApp } from 'vue'
// Plugins
import { registerPlugins } from '@/plugins'


import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

registerPlugins(app)
app.component('VueDatePicker', VueDatePicker);

import "@/styles/settings.scss";


app.mount('#app')





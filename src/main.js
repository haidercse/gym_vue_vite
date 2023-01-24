import { createApp } from 'vue'
import App from './App.vue'

//@import bootstrap
import './assets/main.css'
import './assets/scss/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'


import router from './router'
import store from './stores'
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

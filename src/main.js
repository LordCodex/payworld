import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import store from './store'
import router from './router'


library.add(fas,fab);

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router).use(store).mount('#app')

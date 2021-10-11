import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



createApp(App).use(router).mount('#app')

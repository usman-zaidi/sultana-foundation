import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import './jquery/jquery.min.js'
//import 'jquery-ui-dist/jquery-ui.min'
import 'jquery-ui-dist/jquery-ui.min.css'
import { iconsSet as icons } from '@/assets/icons/index.js'
import DocsCallout from '@/components/DocsCallout.vue'
import DocsExample from '@/components/DocsExample.vue'
import '@coreui/coreui/scss/coreui.scss';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.css"

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPenToSquare,faEye,faDeleteLeft} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPenToSquare,faEye,faDeleteLeft)

/* add font awesome icon component */




const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('DocsExample', DocsExample)

app.mount('#app')


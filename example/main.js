import {createApp} from 'vue'
import App from './App.vue'
import SlmIcon from '../src/SlmIcon.vue'

const myApp = createApp(App)

myApp.component('slm-icon', SlmIcon)
myApp.mount('#app')


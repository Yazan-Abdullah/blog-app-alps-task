import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Create the root Vue application instance
const app = createApp(App);

// Install Vue Router
app.use(router);

// Mount the app to the DOM
app.mount('#app');

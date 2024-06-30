// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';

// // Create the root Vue application instance
// const app = createApp(App);

// // Install Vue Router
// app.use(router);

// // Mount the app to the DOM
// app.mount('#app');


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import the Vuex store

// Create the root Vue application instance
const app = createApp(App);

// Install Vue Router
app.use(router);

// Install Vuex store
app.use(store);

// Mount the app to the DOM
app.mount('#app');

